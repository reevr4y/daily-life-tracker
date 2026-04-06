export async function fireConfetti() {
  const confetti = (await import('canvas-confetti')).default;
  // Soft, cream-toned confetti burst
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#E6D3B3', '#D6C2A1', '#C4A882', '#A88B64', '#7BAE7F', '#FFEAA7'],
    scalar: 0.9,
    ticks: 150,
    gravity: 0.8,
  });
}

export async function fireSmallConfetti(x, y) {
  const confetti = (await import('canvas-confetti')).default;
  confetti({
    particleCount: 25,
    spread: 45,
    origin: { x, y },
    colors: ['#E6D3B3', '#D6C2A1', '#A88B64', '#7BAE7F'],
    scalar: 0.7,
    ticks: 100,
    gravity: 1,
  });
}
