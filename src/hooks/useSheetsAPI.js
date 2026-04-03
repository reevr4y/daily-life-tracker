import { useState, useCallback } from 'react';
import { SHEETS_API_URL } from '../config';

// ─── localStorage helpers (always used as cache) ─────────────────────────────
const LS_TASKS    = 'dlt_tasks';
const LS_EXPENSES = 'dlt_expenses';
const LS_PAP      = 'dlt_pap_history';

function lsGet(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); }
  catch {}
}
function makeId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

// ─── Sheets via GET params (no CORS issues) ───────────────────────────────────
async function sheetsRead(sheet) {
  const url = `${SHEETS_API_URL}?action=read&sheet=${sheet}`;
  const res  = await fetch(url);
  const text = await res.text();
  return JSON.parse(text);
}

async function sheetsWrite(action, sheet, data) {
  const params = new URLSearchParams({
    action,
    sheet,
    data: JSON.stringify(data),
  });
  const url = `${SHEETS_API_URL}?${params.toString()}`;
  const res  = await fetch(url);
  const text = await res.text();
  return JSON.parse(text);
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useSheetsAPI() {
  const useSheets = Boolean(SHEETS_API_URL);
  const [loading, setLoading] = useState(false);

  // ── TASKS ──────────────────────────────────────────────────────────────────
  const fetchTasks = useCallback(async () => {
    // Always return localStorage immediately (fast + offline-safe)
    const cached = lsGet(LS_TASKS);

    if (useSheets) {
      try {
        setLoading(true);
        const remote = await sheetsRead('tasks');
        if (Array.isArray(remote) && remote.length > 0) {
          // Merge remote into localStorage (remote is source of truth)
          lsSet(LS_TASKS, remote);
          return remote;
        }
      } catch (e) {
        console.warn('[Sheets] fetchTasks failed, using localStorage:', e);
      } finally {
        setLoading(false);
      }
    }

    return cached;
  }, [useSheets]);

  const addTask = useCallback(async (title) => {
    const task = { id: makeId(), title, status: 'pending', date: todayIso() };

    // Always update localStorage immediately
    const tasks = lsGet(LS_TASKS);
    lsSet(LS_TASKS, [task, ...tasks]);

    // Also write to Sheets async (fire and forget)
    if (useSheets) {
      sheetsWrite('insert', 'tasks', task).catch(e =>
        console.warn('[Sheets] addTask failed:', e)
      );
    }

    return task;
  }, [useSheets]);

  const updateTask = useCallback(async (id, status) => {
    // Always update localStorage immediately
    const tasks = lsGet(LS_TASKS).map(t => t.id === id ? { ...t, status } : t);
    lsSet(LS_TASKS, tasks);

    if (useSheets) {
      sheetsWrite('update', 'tasks', { id, status }).catch(e =>
        console.warn('[Sheets] updateTask failed:', e)
      );
    }
  }, [useSheets]);

  const deleteTask = useCallback(async (id) => {
    // Always update localStorage immediately
    const tasks = lsGet(LS_TASKS).filter(t => t.id !== id);
    lsSet(LS_TASKS, tasks);

    if (useSheets) {
      sheetsWrite('delete', 'tasks', { id }).catch(e =>
        console.warn('[Sheets] deleteTask failed:', e)
      );
    }
  }, [useSheets]);

  // ── EXPENSES ───────────────────────────────────────────────────────────────
  const fetchExpenses = useCallback(async () => {
    const cached = lsGet(LS_EXPENSES);

    if (useSheets) {
      try {
        const remote = await sheetsRead('expenses');
        if (Array.isArray(remote) && remote.length > 0) {
          lsSet(LS_EXPENSES, remote);
          return remote;
        }
      } catch (e) {
        console.warn('[Sheets] fetchExpenses failed, using localStorage:', e);
      }
    }

    return cached;
  }, [useSheets]);

  const addExpense = useCallback(async (name, amount) => {
    const expense = { id: makeId(), name, amount: Number(amount), date: todayIso() };

    // Always update localStorage immediately
    const expenses = lsGet(LS_EXPENSES);
    lsSet(LS_EXPENSES, [expense, ...expenses]);

    if (useSheets) {
      sheetsWrite('insert', 'expenses', expense).catch(e =>
        console.warn('[Sheets] addExpense failed:', e)
      );
    }

    return expense;
  }, [useSheets]);

  // ── PAP (Daily Photo) ──────────────────────────────────────────────────────
  const addPapRecord = useCallback(async ({ date, status, timestamp }) => {
    const record = {
      id: makeId(),
      date,
      status,
      timestamp: timestamp || new Date().toISOString(),
    };

    // Save to localStorage
    const history = lsGet(LS_PAP);
    const exists  = history.find(p => p.date === date);
    if (!exists) lsSet(LS_PAP, [record, ...history]);

    // Save to Sheets async (fire & forget)
    if (useSheets) {
      sheetsWrite('insert', 'pap', record).catch(e =>
        console.warn('[Sheets] addPapRecord failed:', e)
      );
    }

    return record;
  }, [useSheets]);

  // ── STREAK sync ───────────────────────────────────────────────────────────
  const saveStreakToSheets = useCallback(async ({ date, streak_count, pap_done }) => {
    if (!useSheets) return;
    sheetsWrite('insert', 'streak', { date, streak_count, pap_done }).catch(e =>
      console.warn('[Sheets] saveStreak failed:', e)
    );
  }, [useSheets]);

  return {
    loading,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    fetchExpenses,
    addExpense,
    addPapRecord,
    saveStreakToSheets,
  };
}
