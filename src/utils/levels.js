// Level thresholds (EXP required to reach next level)
export const LEVELS = [
  { level: 1,  title: 'Newbie',      minExp: 0    },
  { level: 2,  title: 'Curious',     minExp: 50   },
  { level: 3,  title: 'Consistent',  minExp: 120  },
  { level: 4,  title: 'Focused',     minExp: 220  },
  { level: 5,  title: 'Productive',  minExp: 350  },
  { level: 6,  title: 'Disciplined', minExp: 520  },
  { level: 7,  title: 'Dedicated',   minExp: 730  },
  { level: 8,  title: 'Efficient',   minExp: 980  },
  { level: 9,  title: 'Master',      minExp: 1280 },
  { level: 10, title: 'Legend',      minExp: 1650 },
];

export function getLevelInfo(exp) {
  let current = LEVELS[0];
  let next = LEVELS[1];

  for (let i = 0; i < LEVELS.length; i++) {
    if (exp >= LEVELS[i].minExp) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }

  const progress = next
    ? ((exp - current.minExp) / (next.minExp - current.minExp)) * 100
    : 100;

  return {
    level: current.level,
    title: current.title,
    progress: Math.min(Math.round(progress), 100),
    currentExp: exp - current.minExp,
    expToNext: next ? next.minExp - current.minExp : 0,
    isMax: !next,
  };
}
