import { useState, useRef } from 'react';
import { playPop } from '../utils/sounds';

export default function TomorrowTaskSection({ tasks, onAdd, onDelete, onToast }) {
  const [input, setInput] = useState('');
  const [removingId, setRemovingId] = useState(null);
  const inputRef = useRef(null);

  // Calculate tomorrow's date in local YYYY-MM-DD
  const tomorrowObj = new Date();
  tomorrowObj.setDate(tomorrowObj.getDate() + 1);
  const tomorrow = tomorrowObj.toLocaleDateString('en-CA');

  // Filter tasks for tomorrow
  const planned = tasks.filter(t => t.date === tomorrow && t.status === 'pending');

  const handleAdd = async (e) => {
    e.preventDefault();
    const val = input.trim();
    if (!val) { inputRef.current?.focus(); return; }
    
    setInput('');
    // Specifically add for tomorrow's date
    await onAdd(val, tomorrow);
    inputRef.current?.focus();
    onToast('Rencana besok dicatat! ✨', 'success');
  };

  const handleDelete = async (id) => {
    setRemovingId(id);
    playPop();
    setTimeout(async () => {
      await onDelete(id);
      setRemovingId(null);
    }, 300);
  };

  const renderTask = (task) => {
    const isRemoving = removingId === task.id;

    return (
      <div
        key={task.id}
        className={`task-item ${isRemoving ? 'removing' : ''}`}
        style={{ background: 'var(--glass)', backdropFilter: 'blur(4px)', borderColor: 'var(--border)' }}
      >
        <div className="w-2 h-2 rounded-full bg-accent-2 mr-1" />
        <div className="flex-1 min-w-0">
          <span className="task-text text-sm font-medium" style={{ color: 'var(--text)' }}>
            {task.title}
          </span>
        </div>
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
      </div>
    );
  };

  return (
    <div className="card p-5 mt-4" style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)', borderStyle: 'dashed' }}>
      <div className="section-title">
        <span>📅</span>
        <span>Rencana Besok</span>
        {planned.length > 0 && (
          <span
            className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter"
            style={{ background: 'var(--accent-2)', color: 'var(--text)' }}
          >
            {planned.length} planned
          </span>
        )}
      </div>

      <p className="text-[11px] mb-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
        Siapin apa yang mau kamu lakuin besok biar lebih semangat! Tugas ini bakal muncul otomatis di daftar harian pas besok tiba. ✨
      </p>

      {/* Add input */}
      <form onSubmit={handleAdd} className="space-y-4 mb-4">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ada rencana apa besok?.."
            className="input-field"
            style={{ fontSize: '0.85rem' }}
          />
          <button type="submit" className="btn-primary flex-shrink-0 w-10 h-10 flex items-center justify-center p-0" aria-label="Add plan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </form>

      {/* Planned list */}
      <div className="space-y-2">
        {planned.length === 0 ? (
          <div className="py-4 text-center border border-dashed border-border rounded-xl opacity-60">
            <p className="text-xs italic">Belum ada rencana nih.. 🌱</p>
          </div>
        ) : (
          planned.map(renderTask)
        )}
      </div>
    </div>
  );
}
