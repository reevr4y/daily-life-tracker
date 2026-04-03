import { useEffect, useState, useCallback } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'neutral') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, dismissing: false }]);

    // Auto start dismissal after 2.8s
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === id ? { ...t, dismissing: true } : t));
      // Remove after animation
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 350);
    }, 2800);
  }, []);

  return { toasts, addToast };
}

const icons = {
  success: '✨',
  warn:    '👀',
  info:    'ℹ️',
  neutral: '💬',
};

export default function FeedbackToast({ toasts }) {
  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`toast ${t.dismissing ? 'dismissing' : ''}`}
        >
          <span className="mr-1.5">{icons[t.type] || '💬'}</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
