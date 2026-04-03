import { useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getLevelInfo } from '../utils/levels';

const PAP_KEY   = 'dlt_daily_pap';
const todayIso = () => new Date().toLocaleDateString('en-CA');

function getYesterdayIso() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('en-CA');
}

function didPapYesterday() {
  try {
    const raw = JSON.parse(localStorage.getItem(PAP_KEY));
    return raw?.date === getYesterdayIso() && raw?.done === true;
  } catch { return false; }
}

function didPapToday() {
  try {
    const raw = JSON.parse(localStorage.getItem(PAP_KEY));
    return raw?.date === todayIso() && raw?.done === true;
  } catch { return false; }
}

export function useGameState() {
  const [exp,        setExp       ] = useLocalStorage('dlt_exp',        0);
  const [streak,     setStreak    ] = useLocalStorage('dlt_streak',     0);
  const [lastActive, setLastActive] = useLocalStorage('dlt_lastActive', '');
  const [streakBroke,setStreakBroke] = useLocalStorage('dlt_streakBroke', false);

  const levelInfo = getLevelInfo(exp);

  // ── On mount: check if streak should be reset because yesterday had no PAP ──
  useEffect(() => {
    const today = todayIso();
    if (lastActive === today) return; // already checked today

    const yesterday = getYesterdayIso();

    // If last active was yesterday but no PAP was done → break streak
    if (lastActive === yesterday && !didPapYesterday()) {
      setStreak(0);
      setStreakBroke(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update streak on activity
  const recordActivity = useCallback(() => {
    const today = todayIso();
    if (lastActive === today) return; // already recorded today

    const yesterday = getYesterdayIso();

    if (lastActive === yesterday) {
      setStreak(s => s + 1); // continued streak
    } else if (lastActive !== today) {
      setStreak(1); // new or reset
    }
    setLastActive(today);
    setStreakBroke(false);
  }, [lastActive, setStreak, setLastActive, setStreakBroke]);

  const addExp = useCallback((amount) => {
    setExp(e => Math.max(0, Number(e) + amount));
    recordActivity();
  }, [setExp, recordActivity]);

  return {
    exp,
    streak,
    levelInfo,
    addExp,
    recordActivity,
    streakBroke,
    didPapToday,
    setExp,
    setStreak,
    setLastActive,
  };
}
