import { useState, useEffect } from 'react';

/**
 * usePerformanceMode Hook
 * 
 * Deteksi performance capability device dan adjust rendering accordingly.
 * 
 * Modes:
 * - 'minimal': Disable all decorations, fastest
 * - 'balanced': Partial decorations, good for mid-range
 * - 'full': All effects enabled, high-end devices
 * 
 * Auto-detection based on:
 * 1. User preference (prefers-reduced-motion)
 * 2. Device capability (CPU cores, RAM)
 * 3. Manual override (user can change in settings)
 */
export function usePerformanceMode() {
  const [mode, setMode] = useState(() => {
    // Check localStorage untuk user preference
    const saved = localStorage.getItem('dlt_performance_mode');
    if (saved) return saved;
    
    // Auto-detect berdasarkan device
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    
    // Check hardware capability
    const isLowEnd = (
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4)
    );
    
    // Determine mode
    if (prefersReduced) return 'minimal';
    if (isLowEnd) return 'balanced';
    return 'full';
  });
  
  // Persist mode changes
  useEffect(() => {
    localStorage.setItem('dlt_performance_mode', mode);
  }, [mode]);
  
  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e) => {
      if (e.matches) {
        setMode('minimal');
      }
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  return {
    mode,
    setMode,
    
    // Helper flags
    shouldRenderDecorations: mode !== 'minimal',
    shouldRenderSkyEffects: mode === 'full',
    shouldRenderAuraEffects: mode === 'full',
    
    // Animation durations (in seconds)
    animationDuration: mode === 'minimal' ? 0 : mode === 'balanced' ? 0.2 : 0.3,
    
    // FPS targets
    targetFPS: mode === 'minimal' ? 30 : mode === 'balanced' ? 45 : 60,
    
    // Descriptive labels for UI
    labels: {
      minimal: 'Performance (Tercepat)',
      balanced: 'Seimbang (Direkomendasikan)',
      full: 'Quality (Efek Penuh)'
    }
  };
}
