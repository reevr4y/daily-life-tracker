<div align="center">

# 🍵 Daily Life Tracker

*dibuat dengan cinta, untuk Sabrina ([@heavensec](https://github.com/heavensec)) —*
*semoga harimu selalu se-matcha ini* 🌿

<br/>

![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-sync-34a853?style=flat-square&logo=googlesheets)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=githubpages)

<br/>

> Teman produktif harian yang manis — catat tugas, lacak pengeluaran, kumpulkan EXP,  
> dan tumbuhkan streak-mu setiap hari. Karena hidup lebih menyenangkan kalau ada yang nyemangatin 🐱

<br/>

</div>

---

## ✨ Kenapa App Ini Dibuat?

Karena produktivitas itu bukan soal seberapa sibuk kamu,  
tapi soal seberapa *sadar* kamu menjalani harimu.

App ini hadir buat nemeni kamu — dari pagi sampai malam,  
dari task paling kecil sampai pengeluaran paling receh sekalipun 🍃

---

## 🌸 Fitur

| Fitur | Detail |
|---|---|
| ✅ **Daily Tasks** | Tambah, selesaikan, hapus · dapat +10 EXP tiap task |
| 💸 **Expense Tracker** | Catat pengeluaran lengkap dengan kategori & batas boros |
| 🏷️ **Kategori Pengeluaran** | Makanan, Skincare, Transport, dll — bisa kustom sendiri |
| ⚠️ **Warning Batas Boros** | Notif otomatis kalau pengeluaran kategori sudah melebihi batas |
| 📊 **Grafik Pengeluaran** | Visualisasi harian, bisa filter per kategori |
| ⭐ **EXP & Level System** | 10 level dengan title unik — dari Newbie sampai Legend |
| 🔥 **Streak Harian** | Akumulasi hari aktif berturut-turut, jangan sampai putus! |
| 💡 **Insight Otomatis** | Ringkasan produktivitas & pengeluaran harian/mingguan/bulanan |
| 🐱 **Machii si Desk Buddy** | Karakter kucing/human yang ngikutin mouse kamu |
| 🌙 **Dark Mode** | Buat yang suka kerja malem, mata tetap aman |
| 🎊 **Confetti & Sound FX** | Reward kecil setiap kali task selesai |
| 💬 **Toast Lucu** | Pesan-pesan semangat dalam Bahasa Indonesia |
| ☁️ **Sync Google Sheets** | Data tersimpan di cloud, bisa diakses dari mana saja |

---

## 🎮 EXP System

Setiap aksi dapat reward — karena usaha sekecil apapun tetap layak diapresiasi 💛

| Aksi | EXP |
|---|---|
| Selesaikan task | +10 EXP |
| Catat pengeluaran | +5 EXP |
| Pengeluaran ≥ Rp200.000 | -2 EXP |

### 🏆 Level Titles

| Level | Title | EXP |
|---|---|---|
| 1 | 🌱 Newbie | 0 |
| 2 | 🔍 Curious | 50 |
| 3 | 📅 Consistent | 120 |
| 4 | 🎯 Focused | 220 |
| 5 | ⚡ Productive | 350 |
| 6 | 🧘 Disciplined | 520 |
| 7 | 💪 Dedicated | 730 |
| 8 | ⚙️ Efficient | 980 |
| 9 | 🔮 Master | 1.280 |
| 10 | 👑 Legend | 1.650 |

---

## 🚀 Cara Pakai

```bash
# Install dependencies
npm install

# Jalankan di local
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) — dan selamat datang di harimu 🍵

---

## ☁️ Setup Google Sheets (Opsional)

Tanpa ini, app tetap berfungsi penuh dengan **localStorage**.  
Tapi kalau mau data tersimpan di cloud dan bisa sync antar device, ikuti langkah berikut:

### Langkah 1 — Buat Google Sheet

1. Buka [sheets.new](https://sheets.new)
2. Beri nama: **Daily Life Tracker**
3. Buat tab-tab berikut dengan kolom yang sesuai:
   - `tasks` → `id | title | status | date`
   - `expenses` → `id | name | amount | date | category`
   - `pap` → `id | date | status | timestamp | photo_url`
   - `streak` → `date | streak_count | pap_done`
   - `gameState` → `id | exp | streak | last_active | updated_at`
   - `categorySettings` → `key | value`

### Langkah 2 — Deploy Apps Script

1. Di Google Sheet, klik **Extensions → Apps Script**
2. Hapus kode yang ada, lalu paste semua isi `apps-script/Code.gs`
3. Klik **Deploy → New Deployment**
4. Pilih:
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Klik **Deploy** → izinkan akses → copy **Web App URL**

### Langkah 3 — Hubungkan ke App

Buka `src/config.js`:

```js
export const SHEETS_API_URL = 'PASTE_URL_DISINI';
```

Done! 🎉 Data sekarang tersimpan di Google Sheets-mu.

---

## 🚢 Deploy ke GitHub Pages

```bash
npm run deploy
```

Pastikan field `homepage` di `package.json` sudah diisi dengan URL GitHub Pages kamu.

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| UI Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v3 |
| Database | Google Sheets via Apps Script |
| Fallback | localStorage |
| Sound FX | Web Audio API |
| Animasi | CSS Animations |
| Confetti | canvas-confetti |

---

## 📁 Struktur Folder

```
src/
├── config.js               ← Apps Script URL
├── App.jsx                 ← Root component
├── index.css               ← Tema cream + dark mode
├── hooks/
│   ├── useLocalStorage.js
│   ├── useGameState.js     ← EXP, level, streak
│   ├── useSheetsAPI.js     ← Sheets + localStorage fallback
│   └── useDebouncedLocalStorage.js
├── utils/
│   ├── levels.js           ← Level system
│   ├── sounds.js           ← Web Audio pop/chime
│   ├── confetti.js         ← canvas-confetti helper
│   └── insights.js         ← Kalkulasi produktivitas
└── components/
    ├── Header.jsx           ← Greeting + EXP bar
    ├── DeskBuddy.jsx        ← Machii si kucing 🐱
    ├── TaskSection.jsx      ← Daftar tugas
    ├── ExpenseSection.jsx   ← Daftar pengeluaran + warning
    ├── ExpenseItem.jsx      ← Item pengeluaran + badge kategori
    ├── ExpenseChart.jsx     ← Grafik + filter kategori
    ├── InsightCard.jsx      ← Auto insights
    ├── SettingsModal.jsx    ← Pengaturan + kategori + batas boros
    ├── HistoryModal.jsx     ← Riwayat lengkap
    ├── WeeklyReport.jsx     ← Laporan mingguan
    └── FeedbackToast.jsx    ← Toast notifikasi

apps-script/
└── Code.gs                 ← Google Apps Script (deploy ini)
```

---

<div align="center">

Made with 🍵 oleh **reevr4y**

*untuk Sabrina — terima kasih sudah jadi alasan yang baik untuk jadi lebih produktif* 🌿

</div>
