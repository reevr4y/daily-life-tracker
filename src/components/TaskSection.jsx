import { useState, useRef } from 'react';
import { filterByPeriod } from '../utils/insights';
import { fireSmallConfetti } from '../utils/confetti';
import { playPop, playChime } from '../utils/sounds';

export default function TaskSection({ tasks, filter, onAdd, onComplete, onDelete, onToast }) {
  const [input, setInput] = useState('');
  const [removingId, setRemovingId] = useState(null);
  const inputRef = useRef(null);

  const filtered = filterByPeriod(tasks, filter);
  const pending   = filtered.filter(t => t.status === 'pending');
  const done      = filtered.filter(t => t.status === 'done');

  const handleAdd = async (e) => {
    e.preventDefault();
    const val = input.trim();
    if (!val) { inputRef.current?.focus(); return; }
    setInput('');
    await onAdd(val);
    inputRef.current?.focus();
  };

  const handleComplete = (task, e) => {
    if (task.status === 'done') return;
    // Fire confetti at checkbox position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left / window.innerWidth;
    const y = rect.top / window.innerHeight;
    fireSmallConfetti(x, y);
    playChime();
    onToast('Cie produktif 😏✨', 'success');
    onComplete(task.id);
  };

  const handleDelete = async (id) => {
    setRemovingId(id);
    playPop();
    setTimeout(async () => {
      await onDelete(id);
      setRemovingId(null);
    }, 300);
  };

  const renderTask = (task) => (
    <div
      key={task.id}
      className={`task-item ${task.status === 'done' ? 'completed' : ''} ${removingId === task.id ? 'removing' : ''}`}
    >
      {/* Checkbox */}
      <button
        className={`custom-checkbox ${task.status === 'done' ? 'checked' : ''}`}
        onClick={(e) => handleComplete(task, e)}
        aria-label="Complete task"
        disabled={task.status === 'done'}
      >
        {task.status === 'done' && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        className={`task-text flex-1 text-sm font-medium ${task.status === 'done' ? 'struck' : ''}`}
        style={{ color: 'var(--text)' }}
      >
        {task.title}
      </span>

      {/* Delete */}
      {task.status !== 'done' && (
        <button
          onClick={() => handleDelete(task.id)}
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

  return (
    <div className="card p-5">
      <div className="section-title">
        <span>📋</span>
        <span>Tugas Harian</span>
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
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Tambah tugas baru..."
          className="input-field"
        />
        <button type="submit" className="btn-primary" aria-label="Add task">
          +
        </button>
      </form>

      {/* Task list */}
      <div className="space-y-2">
        {pending.length === 0 && done.length === 0 && (
          <div className="empty-state">
            <div className="text-3xl mb-2">✨</div>
            <p>Belum ada tugas.<br />Yuk tambahin sesuatu!</p>
          </div>
        )}

        {pending.map(renderTask)}

        {done.length > 0 && (
          <>
            <p className="text-xs font-semibold pt-2 pb-1" style={{ color: 'var(--muted)' }}>
              Selesai · {done.length}
            </p>
            {done.map(renderTask)}
          </>
        )}
      </div>
    </div>
  );
}
