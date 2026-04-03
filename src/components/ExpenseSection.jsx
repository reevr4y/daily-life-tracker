import { useState } from 'react';
import { filterByPeriod, getTotalSpending, formatCurrency } from '../utils/insights';
import { playPop } from '../utils/sounds';

export default function ExpenseSection({ expenses, filter, onAdd, onDelete, onToast }) {
  const [name, setName]     = useState('');
  const [amount, setAmount] = useState('');
  const [removingId, setRemovingId] = useState(null);

  const filtered = filterByPeriod(expenses, filter);
  const total    = getTotalSpending(filtered);

  const handleAdd = async (e) => {
    e.preventDefault();
    const n = name.trim();
    const a = parseFloat(amount);
    if (!n || !a || a <= 0) return;
    setName('');
    setAmount('');
    playPop();
    onToast('Jajan lagi nih 👀', 'warn');
    await onAdd(n, a);
  };

  const handleDelete = async (id) => {
    setRemovingId(id);
    playPop();
    setTimeout(async () => {
      await onDelete(id);
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="card p-5">
      <div className="section-title">
        <span>💸</span>
        <span>Pengeluaran</span>
        {filtered.length > 0 && (
          <span
            className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: 'var(--accent)', color: 'var(--text)' }}
          >
            {filtered.length} item
          </span>
        )}
      </div>

      {/* Add form */}
      <form onSubmit={handleAdd} className="space-y-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nama pengeluaran..."
          className="input-field"
        />
        <div className="flex gap-2">
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Nominal (Rp)"
            className="input-field"
            min="0"
            step="500"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            + Catat
          </button>
        </div>
      </form>

      {/* Expense list */}
      <div className="space-y-1.5 mb-4 max-h-56 overflow-y-auto">
        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="text-3xl mb-2">💰</div>
            <p>Belum ada pengeluaran.<br />Hemat banget nih!</p>
          </div>
        )}
        {[...filtered].reverse().map(e => (
          <div
            key={e.id}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-300 ${removingId === e.id ? 'opacity-0 scale-95 translate-x-4' : ''}`}
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base flex-shrink-0">🛍️</span>
              <span className="font-medium capitalize truncate" style={{ color: 'var(--text)' }}>
                {e.name}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="font-semibold whitespace-nowrap" style={{ color: 'var(--exp-fill, #C4A882)' }}>
                {formatCurrency(e.amount)}
              </span>
              <button
                onClick={() => handleDelete(e.id)}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                style={{ color: 'var(--muted)' }}
                aria-label="Delete expense"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      {filtered.length > 0 && (
        <div
          className="flex items-center justify-between px-4 py-3 rounded-xl"
          style={{ background: 'var(--accent)', border: '1px solid var(--accent-2)' }}
        >
          <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
            Total
          </span>
          <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
            {formatCurrency(total)}
          </span>
        </div>
      )}
    </div>
  );
}
