import { useLocalStorage } from '../hooks/useLocalStorage';

const THEMES = [
  { id: 'matcha',     color: '#7BAE7F', name: 'Matcha 🍵' },
  { id: 'strawberry', color: '#FF8AA1', name: 'Strawberry 🍓' },
  { id: 'peach',      color: '#FFB366', name: 'Peach 🍑' },
  { id: 'lavender',   color: '#A084E8', name: 'Lavender 🍇' },
];

export default function ThemePicker({ currentTheme, onChange }) {
  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/5 backdrop-blur-sm flex-shrink-0">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center relative ${
            currentTheme === t.id ? 'scale-110 shadow-lg' : 'scale-90 hover:scale-100 opacity-60 hover:opacity-100'
          }`}
          style={{ background: t.color }}
          title={t.name}
        >
          {currentTheme === t.id && (
            <div className="absolute inset-0 rounded-full border-2 border-white scale-110 shadow-sm" />
          )}
        </button>
      ))}
    </div>
  );
}
