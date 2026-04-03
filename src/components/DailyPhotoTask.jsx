import { useState, useRef } from 'react';
import { playChime } from '../utils/sounds';
import { fireConfetti } from '../utils/confetti';

const STORAGE_KEY = 'dlt_daily_pap';

// ── Pesan lucu waktu belum pap ────────────────────────────────────────────────
const IDLE_MESSAGES = [
  {
    text: 'Kamu harini belom pap nih 😤',
    sub:  'Yuk foto dulu baru rebahan!',
    emoji: '😤',
  },
  {
    text: 'Hei! Fotonya mana? 👀',
    sub:  'Streak kamu bahaya banget kalau ga pap hari ini...',
    emoji: '👀',
  },
  {
    text: 'Belom pap = streak ancur 🔥💀',
    sub:  'Masa iya streak habis gara-gara males foto 5 detik?',
    emoji: '💀',
  },
  {
    text: 'Pap dulu dong jangan curang 😏',
    sub:  'Bukti produktif hari ini mana? Jangan ghosting streak~',
    emoji: '😏',
  },
  {
    text: 'Eh masih belum pap nih~',
    sub:  'Nanti streak kamu nangis loh 😭 Jangan sampe!',
    emoji: '😭',
  },
  {
    text: 'Kamu lupa pap ya? Atau emang sengaja? 🤨',
    sub:  'Streaknya udah nunggu dari tadi nih...',
    emoji: '🤨',
  },
  {
    text: 'Pap!!! Pap!!! Pap sekarang!!! 📣',
    sub:  'Oke oke santai, tapi serius deh foto dulu yuk.',
    emoji: '📣',
  },
  {
    text: 'Plot twist: kamu lupa pap 🙃',
    sub:  'Tapi untungnya masih ada waktu! Go go go!',
    emoji: '🙃',
  },
];

// ── Pesan sukses habis pap ────────────────────────────────────────────────────
const DONE_MESSAGES = [
  { text: 'Pap sukses! Streak aman 🔥', sub: 'Kamu keren banget hari ini!' },
  { text: 'Cakep banget! Good job ✨',   sub: 'Foto ini bukti kerennya kamu~' },
  { text: 'Foto kece, hari makin semangat 😎', sub: 'Streak terjaga, EXP bertambah!' },
  { text: 'Bukti nyata kamu produktif 💪', sub: 'Catat: ini hari yang bagus!' },
  { text: 'Streaknya selamat! Alhamdulillah 🙏', sub: '+15 EXP masuk kantong kamu~' },
];

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadPapState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (raw && raw.date === getTodayKey()) return raw;
    return null;
  } catch { return null; }
}

function savePapState(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: getTodayKey(), ...data }));
}

export default function DailyPhotoTask({ onExp, onToast, onAddPap, onSaveStreak, streak }) {
  const [papState, setPapState] = useState(() => loadPapState());
  const [preview, setPreview]   = useState(papState?.preview || null);
  const [loading, setLoading]   = useState(false);
  const [shaking, setShaking]   = useState(false);
  const fileRef = useRef(null);

  // Pick deterministic idle message for today
  const dayIndex = new Date().getDate() % IDLE_MESSAGES.length;
  const idleMsg  = IDLE_MESSAGES[dayIndex];
  const doneMsg  = DONE_MESSAGES[new Date().getDate() % DONE_MESSAGES.length];
  const isDone   = Boolean(papState?.done);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreview(ev.target.result);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!preview || isDone) return;

    const state = { done: true, preview, timestamp: new Date().toISOString() };
    savePapState(state);
    setPapState({ date: getTodayKey(), ...state });

    playChime();
    fireConfetti();
    onExp(15);
    onToast('Pap berhasil! Streak aman! +15 EXP 📸✨', 'success');

    // ── Catat ke Google Sheets ────────────────────────────────────────────────
    if (onAddPap) {
      await onAddPap({
        date:      getTodayKey(),
        status:    'done',
        timestamp: state.timestamp,
      });
    }

    // ── Catat streak ke Sheets juga ───────────────────────────────────────────
    if (onSaveStreak) {
      onSaveStreak({
        date:         getTodayKey(),
        streak_count: streak ?? 0,
        pap_done:     'YES',
      });
    }
  };

  const handleCancel = () => {
    setPreview(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  // Shake animation kalau klik tombol upload
  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
    fileRef.current?.click();
  };

  return (
    <div
      className="card p-5 relative overflow-hidden"
      style={{
        border: isDone
          ? '1.5px solid var(--success)'
          : '1.5px solid var(--accent-2)',
        transition: 'border-color 0.4s ease',
      }}
    >
      {/* ── Header ── */}
      <div className="section-title mb-3">
        <span>📸</span>
        <span>Kirim Pap Harian</span>
        <span
          className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: isDone ? 'var(--success)' : '#f97316',
            color: '#fff',
          }}
        >
          {isDone ? '✅ Done!' : '⚠️ Wajib Pap'}
        </span>
      </div>

      {!isDone ? (
        <>
          {/* ── Nudge message ── */}
          <div
            className={`px-4 py-3 rounded-2xl mb-4 text-center ${shaking ? 'animate-shake' : ''}`}
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.12))',
              border: '1.5px dashed #f97316',
            }}
          >
            <div className="text-3xl mb-1">{idleMsg.emoji}</div>
            <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>
              {idleMsg.text}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              {idleMsg.sub}
            </p>
          </div>

          {/* ── Streak warning ── */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3 text-xs font-medium"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.25)',
              color: '#ef4444',
            }}
          >
            <span className="text-base">🔥</span>
            <span>
              {streak && streak > 0
                ? `Streak kamu ${streak} hari! Jangan sampe putus gara-gara ga pap~`
                : 'Mulai streak baru hari ini dengan pap! 🚀'}
            </span>
          </div>

          {/* ── Photo preview ── */}
          {preview && (
            <div className="relative mb-3 rounded-2xl overflow-hidden" style={{ border: '2px solid var(--accent)' }}>
              <img
                src={preview}
                alt="preview"
                className="w-full object-cover"
                style={{ maxHeight: '220px' }}
              />
              <button
                onClick={handleCancel}
                className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', backdropFilter: 'blur(4px)' }}
              >
                ✕
              </button>
              <div
                className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', backdropFilter: 'blur(4px)' }}
              >
                📷 Foto siap dikirim!
              </div>
            </div>
          )}

          {/* ── Buttons ── */}
          {!preview ? (
            <button
              onClick={triggerShake}
              disabled={loading}
              className="btn-primary w-full py-3 rounded-2xl flex items-center justify-center gap-2 font-bold"
              style={{ fontSize: '0.95rem' }}
            >
              <span className="text-xl">📷</span>
              <span>{loading ? 'Loading foto...' : 'Ambil / Upload Foto Sekarang!'}</span>
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex-1 py-2.5 rounded-2xl text-sm font-medium border transition-colors"
                style={{
                  background: 'var(--bg)',
                  border: '1.5px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                🔄 Ganti Foto
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 btn-primary py-2.5 rounded-2xl flex items-center justify-center gap-1.5 font-bold"
              >
                ✅ Kirim Pap! (+15 EXP)
              </button>
            </div>
          )}

          {/* Hidden file input */}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      ) : (
        /* ── Done state ── */
        <>
          <div
            className="px-4 py-3 rounded-2xl mb-3 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.12))',
              border: '1.5px solid var(--success)',
            }}
          >
            <div className="text-3xl mb-1">🎉</div>
            <p className="font-bold text-sm" style={{ color: 'var(--success)' }}>
              {doneMsg.text}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              {doneMsg.sub}
            </p>
          </div>

          {preview && (
            <div className="rounded-2xl overflow-hidden mb-3" style={{ border: '2px solid var(--success)' }}>
              <img
                src={preview}
                alt="pap hari ini"
                className="w-full object-cover"
                style={{ maxHeight: '220px' }}
              />
            </div>
          )}

          {/* Saved to Sheets badge */}
          <div
            className="flex items-center justify-center gap-1.5 text-xs font-medium py-2 rounded-xl"
            style={{ background: 'rgba(34,197,94,0.1)', color: 'var(--success)' }}
          >
            <span>✅</span>
            <span>Tercatat di Sheets · Reset besok pagi</span>
          </div>
        </>
      )}

      {/* +15 EXP badge top right */}
      <div
        className="absolute top-4 right-16 text-xs font-bold px-2 py-0.5 rounded-full opacity-70"
        style={{ background: 'var(--accent)', color: 'var(--text)' }}
      >
        +15 EXP
      </div>
    </div>
  );
}
