<div align="center">

# 🍵 Daily Life Tracker

<br/>

![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-sync-34a853?style=flat-square&logo=googlesheets)

<br/>

*app ini dibuat khusus buat kamu, Sabrina 🌿*  
*biar tiap hari terasa lebih teratur, lebih ringan, dan ada yang nemenin* 🐱

<br/>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/reevr4y">
        <img src="https://github.com/reevr4y.png" width="80px" style="border-radius:50%"/><br/>
        <sub><b>reevr4y</b></sub>
      </a><br/>
      💻 yang bikin
    </td>
    <td align="center">
      <a href="https://github.com/heavensec">
        <img src="https://github.com/heavensec.png" width="80px" style="border-radius:50%"/><br/>
        <sub><b>heavensec</b></sub>
      </a><br/>
      🌸 yang dibuatin
    </td>
  </tr>
</table>

<br/>

</div>

---

## 🌸 Cerita di Balik App Ini

App ini bukan cuma project biasa.

Dibuat dari nol, dengan sabar, karena ingin ada sesuatu yang bisa nemenin hari-harimu — dari task paling kecil yang kadang terlupakan, sampai pengeluaran paling receh yang kalau dijumlah ternyata lumayan juga 😅

Namanya *Daily Life Tracker*, tapi sebenernya ini lebih dari sekadar tracker.  
Ini teman harian yang manis, yang selalu ada setiap kamu buka tab baru 🍃

---

## ✨ Apa Aja yang Ada di Dalamnya?

### 📝 Daily Tasks
Tulis semua yang mau kamu lakuin hari ini.  
Setiap task yang selesai = +10 EXP. Karena usaha sekecil apapun tetap layak diapresiasi 💛

### 💸 Expense Tracker
Catat pengeluaran lengkap dengan **kategori** — Makanan, Skincare, Transport, atau apapun yang kamu mau.  
Bisa set batas boros per kategori juga, biar keuangan tetap aman dan terkontrol 🧾

### 📊 Grafik Pengeluaran
Visualisasi pengeluaran harian yang bisa difilter per kategori.  
Biar kamu tahu, hari mana yang paling boros dan kenapa 👀

### ⭐ EXP & Level System
Dari **Newbie** sampai **Legend** — level naik seiring kamu makin rajin.  
Ada 10 level, masing-masing punya title sendiri yang lucu.

### 🔥 Streak Harian
Jangan sampai putus! Setiap hari aktif nambah streak.  
Karena konsistensi itu lebih penting dari kesempurnaan 🌱

### 💡 Insight Otomatis
Ringkasan produktivitas dan pengeluaran yang muncul sendiri —  
harian, mingguan, bulanan. Tinggal baca, tinggal refleksi.

### 🐱 Machii si Desk Buddy
Kucing kecil yang ngikutin mouse kamu ke mana-mana.  
Klik dia kalau lagi butuh teman 🐾

### 🌙 Dark Mode
Buat kamu yang suka kerja malem. Mata tetap aman, hati tetap tenang.

### 🎊 Confetti & Sound FX
Reward kecil setiap task selesai — karena merayakan hal kecil itu penting.

---

## 🏆 Level Titles

| Level | Title | EXP |
|:---:|---|:---:|
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

## 📁 Struktur Project

```
src/
├── App.jsx                 ← Root component
├── index.css               ← Tema cream + dark mode
├── hooks/
│   ├── useGameState.js     ← EXP, level, streak
│   ├── useSheetsAPI.js     ← Sync ke Google Sheets
│   └── useLocalStorage.js
├── utils/
│   ├── levels.js           ← Level system
│   ├── sounds.js           ← Sound effects
│   ├── confetti.js         ← Confetti 🎊
│   └── insights.js         ← Kalkulasi produktivitas
└── components/
    ├── DeskBuddy.jsx        ← Machii si kucing 🐱
    ├── TaskSection.jsx      ← Daftar tugas
    ├── ExpenseSection.jsx   ← Pengeluaran + warning batas
    ├── ExpenseChart.jsx     ← Grafik + filter kategori
    ├── InsightCard.jsx      ← Auto insights
    ├── SettingsModal.jsx    ← Pengaturan & kategori
    ├── HistoryModal.jsx     ← Riwayat lengkap
    └── WeeklyReport.jsx     ← Laporan mingguan
```

---

<div align="center">

*dibuat dengan 🍵 dan banyak sayang*  
*untuk Sabrina — semoga app ini nemenin harimu yang selalu sibuk itu* 🌿

</div>
