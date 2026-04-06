import React from 'react';

const TaskItem = React.memo(({ task, today, onComplete, onDelete }) => {
  const isDone = task.status === 'done';
  const isMissed = task.status === 'missed' || (task.status === 'pending' && task.date < today);

  return (
    <div
      className={`task-item ${isDone ? 'completed' : ''} ${isMissed ? 'missed' : ''}`}
    >
      {/* Checkbox */}
      <button
        className={`custom-checkbox ${isDone ? 'checked' : ''} ${isMissed ? 'locked' : ''}`}
        onClick={(e) => onComplete(task, e)}
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
          onClick={() => onDelete(task.id, isMissed)}
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
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
