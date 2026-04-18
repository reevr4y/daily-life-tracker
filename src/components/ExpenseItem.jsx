import React from 'react';
import { formatCurrency } from '../utils/insights';

const ExpenseItem = React.memo(({ expense, onDelete }) => {
  return (
    <div
      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-300"
      style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
    >
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-base flex-shrink-0">🛍️</span>
          <span className="font-medium capitalize truncate" style={{ color: 'var(--text)' }}>
            {expense.name}
          </span>
        </div>
        {expense.category && (
          <div className="flex ml-7 mt-0.5">
            <span 
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter"
              style={{ background: 'var(--accent)', color: 'var(--text)', opacity: 0.8 }}
            >
              {expense.category}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="font-semibold whitespace-nowrap" style={{ color: 'var(--exp-fill, #C4A882)' }}>
          {formatCurrency(expense.amount)}
        </span>
        <button
          onClick={() => onDelete(expense.id)}
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
  );
});

ExpenseItem.displayName = 'ExpenseItem';

export default ExpenseItem;
