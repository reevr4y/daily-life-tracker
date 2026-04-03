import { useState, useRef } from 'react';
import { filterByPeriod } from '../utils/insights';
import { fireSmallConfetti } from '../utils/confetti';
import { playPop, playChime } from '../utils/sounds';

export default function TaskSection({ tasks, filter, onAdd, onComplete, onDelete, onToast }) {
  const [input, setInput] = useState('');
  const [removingId, setRemovingId] = useState(null);
  const inputRef = useRef(null);

  const today = new Date().toLocaleDateString('en-CA');
  const filtered = filterByPeriod(tasks, filter);
  
  // Pending tasks: still editable (ONLY TODAY)
  const pending   = filtered.filter(t => t.status === 'pending' && t.date === today);
  // Missed tasks: locked
  const missed    = filtered.filter(t => t.status === 'missed' || (t.status === 'pending' && t.date < today));
  // Done (ONLY TODAY or overall?) - user said "harian" so we'll show today's done
  const done      = filtered.filter(t => t.status === 'done' && t.date === today);

  const handleAdd = async (e) => {
    e.preventDefault();
    const val = input.trim();
    if (!val) { inputRef.current?.focus(); return; }
    
    setInput('');
    await onAdd(val, today);
    inputRef.current?.focus();
  };

  const handleComplete = (task, e) => {
    if (task.status === 'done' || task.status === 'missed') return;
    if (task.date < today) return; // Locked

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left / window.innerWidth;
    const y = rect.top / window.innerHeight;
    fireSmallConfetti(x, y);
    playChime();
    onToast('Cie produktif 😏✨', 'success');
    onComplete(task.id);
  };

  const handleDelete = async (id, isLocked) => {
    if (isLocked) return;
    setRemovingId(id);
    playPop();
    setTimeout(async () => {
      await onDelete(id);
      setRemovingId(null);
    }, 300);
  };

  const renderTask = (task) => {
    const isDone = task.status === 'done';
    const isMissed = task.status === 'missed' || (task.status === 'pending' && task.date < today);
    const isRemoving = removingId === task.id;

    return (
      <div
        key={task.id}
        className={`task-item ${isDone ? 'completed' : ''} ${isMissed ? 'missed' : ''} ${isRemoving ? 'removing' : ''}`}
      >
        {/* Checkbox */}
        <button
          className={`custom-checkbox ${isDone ? 'checked' : ''} ${isMissed ? 'locked' : ''}`}
          onClick={(e) => handleComplete(task, e)}
          aria-label="Complete task"
          disabled={isDone || isMissed}
        >
          {isDone && (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {isMissed && !isDone && <span className="text-[10px] transform -rotate-12">❌</span>}
        </button>

        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`task-text text-sm font-medium ${isDone || isMissed ? 'struck' : ''}`}
              style={{ color: isMissed ? 'var(--muted)' : 'var(--text)' }}
            >
              {task.title}
            </span>
            {isMissed && !isDone && (
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 font-bold uppercase tracking-wider">
                Missed
              </span>
            )}
          </div>
        </div>

        {/* Delete button (hidden if missed/done) */}
        {!isDone && !isMissed && (
          <button
            onClick={() => handleDelete(task.id, isMissed)}
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{ color: 'var(--muted)' }}
            aria-label="Delete task"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="card p-5">
      <div className="section-title">
        <span>📋</span>
        <span>Tugas Hari Ini</span>
        {pending.length > 0 && (
          <span
            className="ml-auto text-xs font-normal px-2 py-0.5 rounded-full"
            style={{ background: 'var(--accent)', color: 'var(--text)' }}
          >
            {pending.length} pending
          </span>
        )}
      </div>

      {/* Add input */}
      <form onSubmit={handleAdd} className="space-y-4 mb-6">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Tambah tugas baru..."
            className="input-field"
          />
          <button type="submit" className="btn-primary flex-shrink-0 w-12" aria-label="Add task">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </form>

      {/* Task list */}
      <div className="space-y-2">
        {pending.length === 0 && done.length === 0 && missed.length === 0 && (
          <div className="empty-state">
            <div className="text-3xl mb-2">✨</div>
            <p>Belum ada tugas.<br />Yuk tambahin sesuatu!</p>
          </div>
        )}

        {pending.map(renderTask)}

        {missed.length > 0 && (
          <>
            <p className="text-xs font-bold pt-4 pb-1 text-red-500 dark:text-red-400" style={{ letterSpacing: '0.05em' }}>
              LEWAT DEADLINE (MISSED) ❌
            </p>
            {missed.map(renderTask)}
          </>
        )}

        {done.length > 0 && (
          <>
            <p className="text-xs font-semibold pt-4 pb-1" style={{ color: 'var(--muted)' }}>
              SELESAI · {done.length} ✅
            </p>
            {done.map(renderTask)}
          </>
        )}
      </div>
    </div>
  );
}
