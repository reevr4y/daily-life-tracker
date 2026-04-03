import { useState, useCallback } from 'react';
import { SHEETS_API_URL } from '../config';

// ─── helpers ─────────────────────────────────────────────────────────────────
const LS_TASKS    = 'dlt_tasks';
const LS_EXPENSES = 'dlt_expenses';

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

// ─── Google Sheets fetch helpers ─────────────────────────────────────────────
async function sheetsGet(sheet) {
  const res = await fetch(`${SHEETS_API_URL}?sheet=${sheet}`);
  const data = await res.json();
  return data;
}

async function sheetsPost(payload) {
  await fetch(SHEETS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useSheetsAPI() {
  const useSheets = Boolean(SHEETS_API_URL);
  const [loading, setLoading] = useState(false);

  // ── TASKS ──────────────────────────────────────────────────────────────────
  const fetchTasks = useCallback(async () => {
    if (!useSheets) return lsGet(LS_TASKS);
    try {
      setLoading(true);
      return await sheetsGet('tasks');
    } catch (e) {
      console.warn('Sheets fetch failed, using localStorage', e);
      return lsGet(LS_TASKS);
    } finally {
      setLoading(false);
    }
  }, [useSheets]);

  const addTask = useCallback(async (title) => {
    const task = { id: makeId(), title, status: 'pending', date: todayIso() };
    if (!useSheets) {
      const tasks = lsGet(LS_TASKS);
      lsSet(LS_TASKS, [...tasks, task]);
      return task;
    }
    try {
      await sheetsPost({ action: 'insert', sheet: 'tasks', data: task });
    } catch (e) {
      const tasks = lsGet(LS_TASKS);
      lsSet(LS_TASKS, [...tasks, task]);
    }
    return task;
  }, [useSheets]);

  const updateTask = useCallback(async (id, status) => {
    if (!useSheets) {
      const tasks = lsGet(LS_TASKS).map(t => t.id === id ? { ...t, status } : t);
      lsSet(LS_TASKS, tasks);
      return;
    }
    try {
      await sheetsPost({ action: 'update', sheet: 'tasks', data: { id, status } });
    } catch {
      const tasks = lsGet(LS_TASKS).map(t => t.id === id ? { ...t, status } : t);
      lsSet(LS_TASKS, tasks);
    }
  }, [useSheets]);

  const deleteTask = useCallback(async (id) => {
    if (!useSheets) {
      const tasks = lsGet(LS_TASKS).filter(t => t.id !== id);
      lsSet(LS_TASKS, tasks);
      return;
    }
    try {
      await sheetsPost({ action: 'delete', sheet: 'tasks', data: { id } });
    } catch {
      const tasks = lsGet(LS_TASKS).filter(t => t.id !== id);
      lsSet(LS_TASKS, tasks);
    }
  }, [useSheets]);

  // ── EXPENSES ───────────────────────────────────────────────────────────────
  const fetchExpenses = useCallback(async () => {
    if (!useSheets) return lsGet(LS_EXPENSES);
    try {
      setLoading(true);
      return await sheetsGet('expenses');
    } catch {
      return lsGet(LS_EXPENSES);
    } finally {
      setLoading(false);
    }
  }, [useSheets]);

  const addExpense = useCallback(async (name, amount) => {
    const expense = { id: makeId(), name, amount: Number(amount), date: todayIso() };
    if (!useSheets) {
      const expenses = lsGet(LS_EXPENSES);
      lsSet(LS_EXPENSES, [...expenses, expense]);
      return expense;
    }
    try {
      await sheetsPost({ action: 'insert', sheet: 'expenses', data: expense });
    } catch {
      const expenses = lsGet(LS_EXPENSES);
      lsSet(LS_EXPENSES, [...expenses, expense]);
    }
    return expense;
  }, [useSheets]);

  return {
    loading,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    fetchExpenses,
    addExpense,
  };
}
