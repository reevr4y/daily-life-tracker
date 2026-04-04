import { useState, useEffect, useCallback } from 'react';
import { playMeow } from '../utils/sounds';

export default function DeskBuddy({ levelInfo, tasksCompletedToday = 0 }) {
  const [state, setState] = useState('idle');

  useEffect(() => {
    if (tasksCompletedToday > 0) {
      triggerHappy();
    }
  }, [tasksCompletedToday]);

  const triggerHappy = useCallback(() => {
    setState('happy');
    playMeow();
    setTimeout(() => setState('idle'), 2000);
  }, []);

  const handleClick = () => {
    triggerHappy();
  };

  return (
    <div className="flex flex-col items-center pointer-events-auto filter drop-shadow-md relative z-[100]">
      <div 
        className={`machii-sprite ${state}`} 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <div className="machii-name-tag absolute -bottom-2 whitespace-nowrap bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-[10px] font-black shadow-sm text-center">
        MACHII LVL {levelInfo?.level || 1}
      </div>
    </div>
  );
}
