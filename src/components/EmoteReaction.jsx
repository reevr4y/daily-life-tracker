import React, { useState, useCallback, useRef, useEffect } from 'react';
import { playRandomEmoteSound } from '../utils/sounds';

const EMOTES = ['💖', '😆', '🎉', '😺', '✨', '💅', '😭', '🔥', '🌈', '🦄'];

const EmoteReaction = React.memo(function EmoteReaction({ onAddExp }) {
  const [activeEmotes, setActiveEmotes] = useState([]);
  const lastClickRef = useRef(0);
  const intervalRef = useRef(null);

  const handleSpam = useCallback(() => {
    const now = Date.now();
    // Maintain a safe rate limit even when automated
    if (now - lastClickRef.current < 80) return;
    lastClickRef.current = now;

    // Play sound
    playRandomEmoteSound();

    // Add EXP
    if (onAddExp) onAddExp(1);

    // Create new emote object
    const id = Math.random().toString(36).substr(2, 9);
    const emoji = EMOTES[Math.floor(Math.random() * EMOTES.length)];
    const driftX = (Math.random() - 0.5) * 120; // slightly wider drift
    const angle = (Math.random() - 0.5) * 60; // more rotation variety
    const duration = 1.2 + Math.random() * 0.8; // 1.2s - 2s

    const newEmote = { id, emoji, driftX, angle, duration };

    setActiveEmotes((prev) => {
      // Limit max active emotes for performance
      if (prev.length > 25) return [...prev.slice(1), newEmote];
      return [...prev, newEmote];
    });

    // Cleanup after animation
    setTimeout(() => {
      setActiveEmotes((prev) => prev.filter((e) => e.id !== id));
    }, duration * 1000);
  }, [onAddExp]);

  const startContinuousSpam = (e) => {
    if (e) e.preventDefault();
    handleSpam();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleSpam, 100);
  };

  const stopContinuousSpam = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="action-dock-item emote-dock">
      {/* Emote Layer (where they float up from) */}
      <div className="emote-layer">
        {activeEmotes.map((e) => (
          <div
            key={e.id}
            className="floating-emote"
            style={{
              '--drift-x': `${e.driftX}px`,
              '--angle': `${e.angle}`,
              '--anim-duration': `${e.duration}s`,
            }}
          >
            <span className="floating-emote-exp">+1</span>
            <span>{e.emoji}</span>
          </div>
        ))}
      </div>

      {/* Main Spam Button */}
      <button
        onMouseDown={startContinuousSpam}
        onMouseUp={stopContinuousSpam}
        onMouseLeave={stopContinuousSpam}
        onTouchStart={startContinuousSpam}
        onTouchEnd={stopContinuousSpam}
        className="dock-btn"
        aria-label="Send Emote Reaction"
        title="Spam for +1 EXP!"
      >
        <span className="hover:scale-125 transition-transform duration-300">😆</span>
      </button>
    </div>
  );
});

export default EmoteReaction;


