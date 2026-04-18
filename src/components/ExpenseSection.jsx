import { useState, useMemo, useRef, useEffect, useCallback, memo } from 'react';
import { filterByPeriod, getTotalSpending, formatCurrency } from '../utils/insights';
import { playPop } from '../utils/sounds';
import ExpenseItem from './ExpenseItem';

function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

const ExpenseSection = memo(function ExpenseSection({ 
  expenses, filter, categories, categoryLimits, 
  onAdd, onDelete, onToast 
}) {
  const [name, setName]     = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);

  // Memoize filtered expenses
  const filtered = useMemo(() => 
    filterByPeriod(expenses, filter),
    [expenses, filter]
  );
  
  // Memoize total
  const total = useMemo(() => 
    getTotalSpending(filtered),
    [filtered]
  );

  // Debounce name for suggestion filtering
  const debouncedName = useDebouncedValue(name, 150);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate unique suggestions with frequency count
  const suggestionsData = useMemo(() => {
    if (!expenses || expenses.length === 0) return [];
    
    const freq = {};
    const canonicalNames = {};

    expenses.forEach(e => {
      const n = e.name?.trim();
      if (!n) return;
      const lower = n.toLowerCase();
      freq[lower] = (freq[lower] || 0) + 1;
      
      if (!canonicalNames[lower] || (freq[lower] > (freq[canonicalNames[lower].toLowerCase()] || 0))) {
        canonicalNames[lower] = n;
      }
    });

    return Object.keys(freq)
      .sort((a, b) => freq[b] - freq[a])
      .map(lower => ({
        name: canonicalNames[lower],
        count: freq[lower]
      }));
  }, [expenses]);

  const filteredSuggestions = useMemo(() => {
    const search = debouncedName.trim().toLowerCase();
    if (!search) return suggestionsData.slice(0, 6);
    return suggestionsData
      .filter(s => s.name.toLowerCase().includes(search))
      .slice(0, 6);
  }, [suggestionsData, debouncedName]);

  const handleSelectSuggestion = (suggestedName) => {
    setName(suggestedName);
    setShowSuggestions(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const n = name.trim();
    const a = parseFloat(amount);
    if (!n || !a || a <= 0) return;
    setName('');
    setAmount('');
    setCategory('');
    playPop();
    onToast('Jajan lagi nih 👀', 'warn');
    await onAdd(n, a, category || (categories[0] || 'Lainnya'));
  };

  const handleDeleteInternal = useCallback(async (id) => {
    playPop();
    await onDelete(id);
  }, [onDelete]);

  // Calculate monthly spending per category
  const categoryTotals = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const totals = {};
    expenses.forEach(e => {
      const d = new Date(e.date);
      if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
        const cat = e.category || 'Lainnya';
        totals[cat] = (totals[cat] || 0) + Number(e.amount);
      }
    });
    return totals;
  }, [expenses]);

  const warnings = useMemo(() => {
    if (!categoryLimits) return [];
    return Object.entries(categoryLimits)
      .filter(([cat, limit]) => limit > 0 && (categoryTotals[cat] || 0) >= limit)
      .map(([cat, limit]) => ({
        category: cat,
        spent: categoryTotals[cat] || 0,
        limit
      }));
  }, [categoryLimits, categoryTotals]);

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
        <div className="suggestions-container" ref={suggestionsRef}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onClick={() => setShowSuggestions(true)}
            placeholder="Nama pengeluaran..."
            className="input-field"
            autoComplete="off"
          />
          
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="suggestions-menu">
              {filteredSuggestions.map((s, i) => (
                <div 
                  key={i} 
                  className="suggestion-item"
                  onClick={() => handleSelectSuggestion(s.name)}
                >
                  <div className="item-content">
                    <span className="item-icon">🛍️</span>
                    <span className="item-name">{s.name}</span>
                  </div>
                  {s.count > 1 && (
                    <span className="item-freq">{s.count}x</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="input-field py-2 text-sm w-full"
        >
          <option value="" disabled>Pilih Kategori...</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Nominal (Rp)"
            className="input-field flex-1"
            min="0"
            step="500"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            + Catat
          </button>
        </div>
      </form>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="mb-4 space-y-1">
          {warnings.map(w => (
            <div 
              key={w.category}
              className="px-3 py-2 rounded-xl text-[10px] font-bold flex items-center justify-between"
              style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}
            >
              <span>⚠️ {w.category} Melebihi Batas!</span>
              <span>{formatCurrency(w.spent)} / {formatCurrency(w.limit)}</span>
            </div>
          ))}
        </div>
      )}

      {/* Expense list */}
      <div className="space-y-1.5 mb-4 max-h-56 overflow-y-auto overflow-x-hidden">
        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="text-3xl mb-2">💰</div>
            <p>Belum ada pengeluaran.<br />Hemat banget nih!</p>
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          {[...filtered].reverse().map(e => (
            <div key={e.id} className="animate-in-slide">
              <ExpenseItem expense={e} onDelete={handleDeleteInternal} />
            </div>
          ))}
        </div>
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
});

export default ExpenseSection;

