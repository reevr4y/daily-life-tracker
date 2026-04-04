import { useState, useEffect, useCallback, useRef } from 'react';
import { playMeow } from '../utils/sounds';

const MESSAGES = [
  "Hallo Matchaaawww 😆💖",
  "Matcha lagi ngapain nih? 👀",
  "Semangat ya hari ini Matcha 💪✨",
  "Jangan lupa makan yaa 🍽️",
  "Machii kangen Matcha 😽"
];

export default function DeskBuddy({ tasksCompletedToday = 0 }) {
  const [state, setState] = useState('idle');
  const [activeMessage, setActiveMessage] = useState(null);
  
  // Pacing Physics State
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(1);
  const isWalkingRef = useRef(false);

  const lastMsgIdxRef = useRef(-1);
  const messageTimeoutRef = useRef(null);

  useEffect(() => {
    if (tasksCompletedToday > 0) {
      triggerHappy();
    }
  }, [tasksCompletedToday]);

  const triggerHappy = useCallback((isClick = false) => {
    setState('happy');
    playMeow();

    if (isClick) {
      // Pick random message
      let nextIdx = Math.floor(Math.random() * MESSAGES.length);
      if (nextIdx === lastMsgIdxRef.current) {
        nextIdx = (nextIdx + 1) % MESSAGES.length;
      }
      lastMsgIdxRef.current = nextIdx;
      setActiveMessage(MESSAGES[nextIdx]);

      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      messageTimeoutRef.current = setTimeout(() => {
        setActiveMessage(null);
      }, 3000);
    }

    setTimeout(() => {
        if(!isWalkingRef.current) setState('idle');
    }, 600);
  }, []);

  // Occasional pacing back and forth
  useEffect(() => {
    const paceTimer = setInterval(() => {
      if (Math.random() > 0.6 && state === 'idle' && !isWalkingRef.current) {
        startPacing();
      }
    }, 15000); // Decide every 15s

    return () => clearInterval(paceTimer);
  }, [state]);

  const startPacing = () => {
    isWalkingRef.current = true;
    setState('walk');
    
    // Choose right or left
    const walkRight = Math.random() > 0.5;
    const targetX = walkRight ? 60 : -60; // Walk 60px
    
    setDirection(walkRight ? 1 : -1);
    
    // Slight delay to allow facing to update before translating
    setTimeout(() => {
        setOffsetX(targetX);
    }, 50);

    // Wait for walk out
    setTimeout(() => {
      // Walk back
      setDirection(walkRight ? -1 : 1);
      
      setTimeout(() => {
          setOffsetX(0);
      }, 50);
      
      // Wait for walk back
      setTimeout(() => {
         isWalkingRef.current = false;
         setState('idle');
         setDirection(1); // Default face right
      }, 3000);
    }, 4000); // Hang out for a sec before walking back
  };

  return (
    <div className="flex flex-col items-center pointer-events-auto relative z-[100] mt-8 mb-4">
      
      <div 
         className="relative transition-all"
         style={{ 
             transform: `translateX(${offsetX}px) scaleX(${direction})`,
             transitionDuration: state === 'walk' ? '3s' : '0.4s',
             transitionProperty: 'transform',
             transitionTimingFunction: 'linear'
         }}
      >
          {/* ── Chat Bubble ── */}
          {activeMessage && (
            <div className="machii-chat-bubble" style={{ transform: `scaleX(${direction})` }}>
              {activeMessage}
            </div>
          )}

          {/* ── Name Tag ── */}
          <div className="machii-name-tag absolute -top-4 flex justify-center w-full z-10 pointer-events-none" style={{ transform: `scaleX(${direction})` }}>
            <span className="machii-name-text">Machii 🐱</span>
          </div>

          {/* ── Cat Sprite ── */}
          <div 
            className={`machii-sprite ${state} filter drop-shadow-md`} 
            onClick={() => triggerHappy(true)}
          />
      </div>
    </div>
  );
}

