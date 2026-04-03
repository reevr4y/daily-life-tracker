import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getLevelInfo } from '../utils/levels';

const today = () => new Date().toDateString();

export function useGameState() {
  const [exp, setExp] = useLocalStorage('dlt_exp', 0);
  const [streak, setStreak] = useLocalStorage('dlt_streak', 0);
  const [lastActive, setLastActive] = useLocalStorage('dlt_lastActive', '');

  const levelInfo = getLevelInfo(exp);

  // Update streak on activity
  const recordActivity = useCallback(() => {
    const todayStr = today();
    if (lastActive === todayStr) return; // already recorded today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastActive === yesterdayStr) {
      setStreak(s => s + 1); // continued streak
    } else if (lastActive !== todayStr) {
      setStreak(1); // reset
    }
    setLastActive(todayStr);
  }, [lastActive, setStreak, setLastActive]);

  const addExp = useCallback((amount) => {
    setExp(e => Math.max(0, e + amount));
    recordActivity();
  }, [setExp, recordActivity]);

  return {
    exp,
    streak,
    levelInfo,
    addExp,
    recordActivity,
  };
}
