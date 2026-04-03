import { useState } from 'react';
import { filterByPeriod, getTotalSpending, formatCurrency } from '../utils/insights';
import { playPop } from '../utils/sounds';

export default function ExpenseSection({ expenses, filter, onAdd, onToast }) {
  const [name, setName]     = useState('');
  const [amount, setAmount] = useState('');

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
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">🛍️</span>
              <span className="font-medium capitalize" style={{ color: 'var(--text)' }}>
                {e.name}
              </span>
            </div>
            <span className="font-semibold" style={{ color: 'var(--exp-fill, #C4A882)' }}>
              {formatCurrency(e.amount)}
            </span>
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
