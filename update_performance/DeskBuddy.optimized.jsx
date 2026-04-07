import { useState, useEffect, useCallback, useRef } from 'react';
import { playMeow } from '../utils/sounds';

const MESSAGES = [
  "Hallo Matchaaawww 😆💖",
  "Matcha lagi ngapain nih? 👀",
  "Semangat ya hari ini Matcha 💪✨",
  "Jangan lupa makan yaa 🍽️",
  "Machii kangen Matcha 😽"
];

/**
 * Throttle helper function
 * Limits function calls to once per specified delay
 */
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}

/**
 * OPTIMIZED DeskBuddy Component
 * 
 * Performance improvements:
 * 1. Throttled mouse tracking (100/sec → 30/sec)
 * 2. RAF-based eye updates (smoother 60fps)
 * 3. Passive event listeners (better scroll performance)
 * 4. Significant change detection (reduce setState calls)
 * 
 * Impact: ~67% reduction in mouse event processing
 */
export default function DeskBuddy({ tasksCompletedToday = 0 }) {
  const [state, setState] = useState('idle');
  const [activeMessage, setActiveMessage] = useState(null);
  
  // Pacing State
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lookAt, setLookAt] = useState({ x: 0, y: 0 });
  const isWalkingRef = useRef(false);
  const containerRef = useRef(null);

  // RAF reference for cleanup
  const rafRef = useRef(null);
  
  const lastMsgIdxRef = useRef(-1);
  const messageTimeoutRef = useRef(null);

  // Trigger happy animation when tasks completed
  useEffect(() => {
    if (tasksCompletedToday > 0) {
      triggerHappy();
    }
  }, [tasksCompletedToday]);

  // ✅ OPTIMIZED: Mouse tracking with throttle + RAF
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    
    // Throttled mouse position capture (max 30fps)
    const handleMouseMove = throttle((e) => {
      if (isWalkingRef.current) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, 33); // ~30fps throttle
    
    // Smooth eye updates via RAF
    const updateEyes = () => {
      if (!containerRef.current || isWalkingRef.current) {
        rafRef.current = requestAnimationFrame(updateEyes);
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const catX = rect.left + rect.width / 2;
      const catY = rect.top + rect.height / 2;
      
      const angleX = (mouseX - catX) / 100;
      const angleY = (mouseY - catY) / 100;
      
      const newX = Math.max(-8, Math.min(8, angleX * 5));
      const newY = Math.max(-5, Math.min(5, angleY * 5));
      
      // ✅ Only update if significant change (reduce setState calls)
      setLookAt(prev => {
        if (Math.abs(prev.x - newX) > 0.5 || Math.abs(prev.y - newY) > 0.5) {
          return { x: newX, y: newY };
        }
        return prev;
      });
      
      rafRef.current = requestAnimationFrame(updateEyes);
    };
    
    // ✅ Passive listener for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateEyes);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const triggerHappy = useCallback((isClick = false) => {
    setState('happy');
    playMeow();

    if (isClick) {
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
        isWalkingRef.current = true;
        setState('walking');
        const newDirection = Math.random() > 0.5 ? 1 : -1;
        setDirection(newDirection);

        let walked = 0;
        const walkDistance = 60 + Math.random() * 80;
        const walkInterval = setInterval(() => {
          walked += 4;
          setOffsetX(prev => prev + newDirection * 4);

          if (walked >= walkDistance) {
            clearInterval(walkInterval);
            isWalkingRef.current = false;
            setState('idle');
          }
        }, 50);
      }
    }, 12000);

    return () => clearInterval(paceTimer);
  }, [state]);

  // Cleanup message timeout
  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="machii-container"
      style={{ 
        transform: `translateX(${offsetX}px) scaleX(${direction})`,
        transition: 'transform 0.1s ease-out'
      }}
      onClick={() => triggerHappy(true)}
    >
      {/* Chat bubble */}
      {activeMessage && (
        <div className="machii-chat-bubble">
          {activeMessage}
        </div>
      )}

      {/* Cat face/body with animated eyes */}
      <div className={`machii-body state-${state}`}>
        <div className="machii-face">
          <div 
            className="machii-eye left"
            style={{
              transform: `translate(${lookAt.x}px, ${lookAt.y}px)`
            }}
          />
          <div 
            className="machii-eye right"
            style={{
              transform: `translate(${lookAt.x}px, ${lookAt.y}px)`
            }}
          />
        </div>
      </div>

      {/* Name tag */}
      <div className="machii-name-tag">
        <span className="machii-name-text">Machii 🐱</span>
      </div>
    </div>
  );
}
