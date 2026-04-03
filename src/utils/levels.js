// Level titles based on range
const TITLES = [
  'Newbie', 'Curious', 'Consistent', 'Focused', 'Productive',
  'Disciplined', 'Dedicated', 'Efficient', 'Master', 'Legend',
  'Elite', 'Grandmaster', 'Unstoppable', 'Godlike', 'Transcendent'
];

function getTitle(level) {
  const index = Math.min(Math.floor((level - 1) / 5), TITLES.length - 1);
  return TITLES[index];
}

// Generate 100 levels with quadratic progression
// Level 1: 0, Level 10: ~1650, Level 50: ~45000
export const LEVELS = Array.from({ length: 100 }, (_, i) => {
  const level = i + 1;
  // Threshold formula: mix of linear and quadratic for smooth early levels
  // (i * 50) + (i^2 * 15)
  const minExp = i === 0 ? 0 : Math.round((i * 60) + (Math.pow(i, 2.1) * 12));
  return {
    level,
    title: getTitle(level),
    minExp
  };
});

export function getLevelInfo(exp) {
  let current = LEVELS[0];
  let next = LEVELS[1];

  for (let i = 0; i < LEVELS.length; i++) {
    if (exp >= LEVELS[i].minExp) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    } else {
      break;
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
