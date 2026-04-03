# 🌿 Daily Life Tracker

Teman produktif harian kamu — To-do list, Expense Tracker, EXP System, Streak, dan Insight dalam satu app yang cantik.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Buka http://localhost:5173

---

## 📦 Tech Stack

| Layer       | Tech                    |
|-------------|-------------------------|
| UI          | React 18 + Vite         |
| Styling     | Tailwind CSS v3         |
| Database    | Google Sheets (via Apps Script) |
| Fallback    | localStorage            |
| Sound FX    | Web Audio API           |
| Confetti    | canvas-confetti         |

---

## 🗄️ Setup Google Sheets (Opsional)

Tanpa ini, app tetap berfungsi penuh dengan **localStorage**.

### Langkah 1: Buat Google Sheet

1. Buka [sheets.new](https://sheets.new)
2. Beri nama sheet: **Daily Life Tracker**
3. Buat 2 tab (sheets):
   - `tasks` — kolom: `id | title | status | date`
   - `expenses` — kolom: `id | name | amount | date`

### Langkah 2: Deploy Apps Script

1. Di Google Sheet, klik **Extensions → Apps Script**
2. Hapus kode yang ada
3. Copy semua isi file `apps-script/Code.gs` → paste ke editor
4. Klik **Deploy → New Deployment**
5. Pilih:
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Klik **Deploy** → izinkan akses
7. Copy **Web App URL** yang muncul

### Langkah 3: Paste URL ke App

Buka file `src/config.js`:

```js
export const SHEETS_API_URL = 'PASTE_URL_DISINI';
```

Done! 🎉 Sekarang data tersimpan di Google Sheets.

---

## 🌙 Fitur

| Fitur                  | Detail                                          |
|------------------------|-------------------------------------------------|
| ✅ Daily Tasks         | Add, complete, delete · +10 EXP per task done  |
| 💸 Expense Tracker     | Catat pengeluaran · +5 EXP                     |
| ⭐ EXP & Level         | 10 level dengan judul unik                      |
| 🔥 Streak              | Akumulasi hari aktif berturut-turut             |
| 📊 Insights            | Spending & produktivitas harian/mingguan/bulanan |
| 🌙 Dark Mode           | Toggle, disimpan di localStorage               |
| 🎊 Confetti            | Muncul saat menyelesaikan task                 |
| 🔊 Sound FX            | Pop & chime via Web Audio API (no file)        |
| 💬 Fun Toast           | Pesan lucu dalam Bahasa Indonesia              |

---

## 📁 Struktur Folder

```
src/
├── config.js              ← Apps Script URL
├── App.jsx                ← Root component
├── main.jsx
├── index.css              ← Cream theme + dark mode
├── hooks/
│   ├── useLocalStorage.js
│   ├── useGameState.js    ← EXP, level, streak
│   └── useSheetsAPI.js    ← Sheets + localStorage fallback
├── utils/
│   ├── levels.js          ← Level system
│   ├── sounds.js          ← Web Audio pop/chime
│   ├── confetti.js        ← canvas-confetti helper
│   └── insights.js        ← Spending/productivity calcs
└── components/
    ├── Header.jsx          ← Greeting + EXP bar
    ├── FilterBar.jsx       ← Daily/Weekly/Monthly
    ├── TaskSection.jsx     ← Task list
    ├── ExpenseSection.jsx  ← Expense list
    ├── InsightCard.jsx     ← Auto insights
    └── FeedbackToast.jsx   ← Toast notifications

apps-script/
└── Code.gs                ← Google Apps Script (deploy ini)
```

---

## 🚀 Deploy ke GitHub Pages

```bash
npm run build
```

Upload folder `dist/` ke GitHub Pages, atau pakai [Vercel](https://vercel.com) / [Netlify](https://netlify.com) drag & drop.

---

## 🎨 EXP System

| Aksi                    | EXP         |
|-------------------------|-------------|
| Selesaikan task         | +10 EXP     |
| Catat pengeluaran       | +5 EXP      |
| Pengeluaran ≥ Rp200.000 | -2 EXP      |

### Level Titles

| Level | Title       | EXP Needed |
|-------|-------------|-------------|
| 1     | Newbie      | 0           |
| 2     | Curious     | 50          |
| 3     | Consistent  | 120         |
| 4     | Focused     | 220         |
| 5     | Productive  | 350         |
| 6     | Disciplined | 520         |
| 7     | Dedicated   | 730         |
| 8     | Efficient   | 980         |
| 9     | Master      | 1280        |
| 10    | Legend      | 1650        |

---

Made with 🌿
