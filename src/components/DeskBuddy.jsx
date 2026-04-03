import { useState, useEffect, useCallback, useRef } from 'react';
import { playMeow } from '../utils/sounds';

export default function DeskBuddy({ levelInfo, tasksCompletedToday = 0 }) {
  const [state, setState] = useState('idle'); // idle, walk, happy
  const [position, setPosition] = useState({ x: 85, y: 85 }); // percentage
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isWalkingAcross, setIsWalkingAcross] = useState(false);
  const containerRef = useRef(null);

  // Trigger 'happy' when tasks completed count increase could be handled here or passed via props
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

  // Occasionally walk across the screen
  useEffect(() => {
    const walkTimer = setInterval(() => {
      if (Math.random() > 0.8 && !isWalkingAcross && state === 'idle') {
        startWalkAcross();
      }
    }, 20000); // Check every 20s

    return () => clearInterval(walkTimer);
  }, [isWalkingAcross, state]);

  const startWalkAcross = () => {
    setIsWalkingAcross(true);
    setState('walk');
    
    // Choose a random path
    const startSide = Math.random() > 0.5 ? 'left' : 'right';
    const startX = startSide === 'left' ? -10 : 110;
    const endX = startSide === 'left' ? 110 : -10;
    
    setDirection(startX < endX ? 1 : -1);
    setPosition({ x: startX, y: 85 });

    // CSS transition will handle the movement if we use left/top
    setTimeout(() => {
      setPosition({ x: endX, y: 85 });
    }, 100);

    // After animation finish (approx 10s)
    setTimeout(() => {
      setIsWalkingAcross(false);
      setState('idle');
      setPosition({ x: 85, y: 85 }); // Back to corner
      setDirection(1);
    }, 10100);
  };

  const handleClick = () => {
    triggerHappy();
  };

  return (
    <div 
      ref={containerRef}
      className={`machii-container ${isWalkingAcross ? 'walking-across' : ''}`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) scaleX(${direction})`,
        transition: isWalkingAcross ? 'left 10s linear' : 'all 0.5s ease',
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
      onClick={handleClick}
    >
      <div className={`machii-sprite ${state}`} />
      <div className="machii-name-tag" style={{ transform: `scaleX(${direction})` }}>
        Machii LVL {levelInfo?.level || 1}
      </div>
    </div>
  );
}
