import { useState, useEffect, memo } from 'react';
import { playPop } from '../utils/sounds';
import { DEFAULT_ROUTINE } from '../utils/constants';

export default memo(function SettingsModal({ 
  settings, setSettings, 
  categories, setCategories, 
  categoryLimits, setCategoryLimits, 
  onSaveSettings, onClose, onToast 
}) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [localCats, setLocalCats] = useState(categories || []);
  const [localLimits, setLocalLimits] = useState(categoryLimits || {});
  const [newCat, setNewCat] = useState('');
  const [newRoutine, setNewRoutine] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = () => {
    setSettings(localSettings);
    setCategories(localCats);
    setCategoryLimits(localLimits);
    
    if (onSaveSettings) {
      onSaveSettings({ 
        categories: localCats, 
        categoryLimits: localLimits 
      });
    }

    playPop();
    onToast('Pengaturan disimpan! ✨', 'success');
    handleClose();
  };

  const addCategory = () => {
    const name = newCat.trim();
    if (!name) return;
    if (localCats.includes(name)) {
      onToast('Kategori sudah ada!', 'warn');
      return;
    }
    setLocalCats([...localCats, name]);
    setNewCat('');
    playPop();
  };

  const removeCategory = (name) => {
    if (localCats.length <= 1) {
      onToast('Minimal harus ada 1 kategori!', 'warn');
      return;
    }
    setLocalCats(localCats.filter(c => c !== name));
    playPop();
  };

  const updateLimit = (cat, val) => {
    const num = parseInt(val) || 0;
    setLocalLimits({ ...localLimits, [cat]: num });
  };

  const addRoutine = () => {
    const name = newRoutine.trim();
    if (!name) return;
    const currentRoutine = localSettings.routine || DEFAULT_ROUTINE;
    if (currentRoutine.includes(name)) {
      onToast('Tugas sudah ada di rutinitas!', 'warn');
      return;
    }
    setLocalSettings({ ...localSettings, routine: [...currentRoutine, name] });
    setNewRoutine('');
    playPop();
  };

  const removeRoutine = (name) => {
    const currentRoutine = localSettings.routine || DEFAULT_ROUTINE;
    setLocalSettings({ ...localSettings, routine: currentRoutine.filter(r => r !== name) });
    playPop();
  };

  const resetRoutine = () => {
    if (confirm('Reset rutinitas ke setelan awal?')) {
      setLocalSettings({ ...localSettings, routine: DEFAULT_ROUTINE });
      playPop();
      onToast('Rutinitas di-reset ke default! ✨', 'success');
    }
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 z-[12000] flex items-center justify-center p-4 transition-all duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={handleClose}
      />
      
      {/* Modal Card */}
      <div className={`relative w-full max-w-sm card p-6 transition-all duration-500 transform ${animate ? 'translate-y-0 scale-100' : 'translate-y-12 scale-90'}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="section-title mb-0">
            <span>⚙️</span>
            <span>Pengaturan</span>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ color: 'var(--muted)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold px-1 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Batas Harian (IDR)
            </label>
            <input 
              type="number"
              min="0"
              value={localSettings.daily || 0}
              onChange={e => {
                const v = parseInt(e.target.value) || 0;
                setLocalSettings({...localSettings, daily: Math.max(0, v)});
              }}
              className="input-field"
              placeholder="100000"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold px-1 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Batas Mingguan (IDR)
            </label>
            <input 
              type="number"
              min="0"
              value={localSettings.weekly || 0}
              onChange={e => {
                const v = parseInt(e.target.value) || 0;
                setLocalSettings({...localSettings, weekly: Math.max(0, v)});
              }}
              className="input-field"
              placeholder="700000"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold px-1 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Batas Bulanan (IDR)
            </label>
            <input 
              type="number"
              min="0"
              value={localSettings.monthly || 0}
              onChange={e => {
                const v = parseInt(e.target.value) || 0;
                setLocalSettings({...localSettings, monthly: Math.max(0, v)});
              }}
              className="input-field"
            />
          </div>

          <div className="pt-4 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold px-1 uppercase tracking-wider block" style={{ color: 'var(--muted)' }}>
                Rutinitas Harian 📋
              </label>
              <button 
                onClick={resetRoutine}
                className="text-[10px] font-bold px-2 py-1 rounded bg-black/5 dark:bg-white/5 hover:bg-red-500/10 text-red-500 transition-colors"
              >
                Reset Default
              </button>
            </div>
            
            <div className="max-h-[200px] overflow-y-auto space-y-2 mb-4 pr-1 custom-scrollbar">
              {(localSettings.routine || DEFAULT_ROUTINE).map((item, idx) => (
                <div key={`${item}-${idx}`} className="flex items-center gap-2 group">
                  <div className="flex-1 px-3 py-2 rounded-lg text-sm bg-black/5 dark:bg-white/5 border border-transparent">
                    {item}
                  </div>
                  <button 
                    onClick={() => removeRoutine(item)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-red-500 opacity-40 group-hover:opacity-100 transition-all"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input 
                type="text"
                value={newRoutine}
                onChange={e => setNewRoutine(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addRoutine()}
                placeholder="Tambah rutinitas..."
                className="input-field py-2 text-sm"
              />
              <button 
                onClick={addRoutine}
                className="px-4 py-2 rounded-lg bg-accent text-white font-bold text-xs"
              >
                Tambah
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
            <label className="text-xs font-bold px-1 uppercase tracking-wider block mb-3" style={{ color: 'var(--muted)' }}>
              Kategori Pengeluaran
            </label>
            
            <div className="space-y-2 mb-4">
              {localCats.map(cat => (
                <div key={cat} className="flex items-center gap-2 group">
                  <div className="flex-1 px-3 py-2 rounded-lg text-sm bg-black/5 dark:bg-white/5 border border-transparent">
                    {cat}
                  </div>
                  <button 
                    onClick={() => removeCategory(cat)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-red-500 opacity-40 group-hover:opacity-100 transition-all"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input 
                type="text"
                value={newCat}
                onChange={e => setNewCat(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addCategory()}
                placeholder="Kategori baru..."
                className="input-field py-2 text-sm"
              />
              <button 
                onClick={addCategory}
                className="px-4 py-2 rounded-lg bg-accent text-white font-bold text-xs"
              >
                Tambah
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
            <label className="text-xs font-bold px-1 uppercase tracking-wider block mb-3" style={{ color: 'var(--muted)' }}>
              Batas per Kategori (IDR)
            </label>
            
            <div className="space-y-3">
              {localCats.map(cat => (
                <div key={cat} className="space-y-1">
                  <div className="text-[10px] font-bold px-1 opacity-60" style={{ color: 'var(--text)' }}>
                    {cat}
                  </div>
                  <input 
                    type="number"
                    min="0"
                    value={localLimits[cat] || ''}
                    onChange={e => updateLimit(cat, e.target.value)}
                    placeholder="Tidak ada batas"
                    className="input-field py-1.5 text-xs"
                  />
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="mt-8 flex gap-3">
          <button 
            onClick={handleClose}
            className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)', background: 'var(--bg)' }}
          >
            Batal
          </button>
          <button 
            onClick={handleSave}
            className="flex-1 btn-primary"
          >
            Simpan ✨
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
          <p className="text-[10px] text-center italic" style={{ color: 'var(--muted)' }}>
            Gunakan angka saja tanpa titik/koma (contoh: 200000)
          </p>
        </div>
      </div>
    </div>
  );
});
