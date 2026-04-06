import {
  filterByPeriod,
  getTotalSpending,
  getMostFrequentExpense,
  getMostProductiveDay,
  getSpendingMessage,
  getProductivityMessage,
  formatCurrency,
} from '../utils/insights';

const periodLabel = { daily: 'Hari Ini', weekly: '7 Hari', monthly: '30 Hari' };

export default function InsightCard({ tasks, expenses, filter, settings }) {
  const filteredExpenses = filterByPeriod(expenses, filter);
  const filteredTasks    = filterByPeriod(tasks, filter);

  const totalSpending    = getTotalSpending(filteredExpenses);
  const completedCount   = filteredTasks.filter(t => t.status === 'done').length;
  const totalTasks       = filteredTasks.length;
  const mostExpense      = getMostFrequentExpense(filteredExpenses);
  const bestDay          = getMostProductiveDay(tasks); // all time for best day

  const spendMsg  = getSpendingMessage(totalSpending, filter, settings);
  const prodMsg   = getProductivityMessage(completedCount);

  const msgColor = {
    good:    '#7BAE7F',
    great:   '#7BAE7F',
    warn:    '#D98080',
    neutral: 'var(--muted)',
    idle:    'var(--muted)',
  };

  return (
    <div className="card p-6">
      <div className="section-title mb-6 flex items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <span className="text-lg font-bold">Insight Ringkasan</span>
        </div>
        <span
          className="ml-auto text-xs font-semibold px-3 py-1 rounded-full border border-accent-2"
          style={{ background: 'var(--accent)', color: 'var(--text)' }}
        >
          {periodLabel[filter]}
        </span>
      </div>

      {/* Mood messages - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div
          className="p-4 rounded-2xl flex flex-col gap-2 transition-transform hover:scale-[1.02]"
          style={{
            background: 'var(--bg)',
            border: `1.5px solid ${prodMsg.type === 'good' || prodMsg.type === 'great' ? 'var(--success)' : 'var(--border)'}`,
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wider opacity-60">Produktivitas</span>
          <p className="text-sm font-medium leading-relaxed" style={{ color: msgColor[prodMsg.type] }}>
            {prodMsg.text}
          </p>
        </div>
        <div
          className="p-4 rounded-2xl flex flex-col gap-2 transition-transform hover:scale-[1.02]"
          style={{
            background: 'var(--bg)',
            border: `1.5px solid ${spendMsg.type === 'good' || spendMsg.type === 'neutral' ? 'var(--border)' : 'var(--danger)'}`,
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wider opacity-60">Pengeluaran</span>
          <p className="text-sm font-medium leading-relaxed" style={{ color: msgColor[spendMsg.type] }}>
            {spendMsg.text}
          </p>
        </div>
      </div>

      {/* Stats - Proportional Grid */}
      <div className="insight-grid">
        <InsightTile
          icon="✅"
          label="Tugas Selesai"
          value={completedCount === 0 && totalTasks === 0 ? '0' : `${completedCount} / ${totalTasks}`}
          subText="Target tercapai"
        />
        <InsightTile
          icon="💸"
          label="Total Dana"
          value={formatCurrency(totalSpending)}
          subText="Periode ini"
        />
        {mostExpense ? (
          <InsightTile
            icon="🛍️"
            label="Sering Dibeli"
            value={mostExpense}
            capitalize
            subText="Kategori utama"
          />
        ) : (
          <InsightTile
            icon="✨"
            label="Status Belanja"
            value="Hemat!"
            subText="Belum ada jajan"
          />
        )}
        {bestDay ? (
          <InsightTile
            icon="📅"
            label="Hari Puncak"
            value={bestDay}
            subText="Paling rajin"
          />
        ) : (
          <InsightTile
            icon="🚀"
            label="Mulai Sekarang"
            value="Ayooo!"
            subText="Tunggu apa lagi"
          />
        )}
      </div>
    </div>
  );
}

function InsightTile({ icon, label, value, capitalize = false, subText }) {
  return (
    <div className="insight-tile">
      <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-xl shadow-sm border border-border/50">
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5">{label}</span>
        <span
          className={`text-base font-bold truncate max-w-full px-1 ${capitalize ? 'capitalize' : ''}`}
          style={{ color: 'var(--text)' }}
        >
          {value}
        </span>
        <span className="text-[9px] font-medium opacity-40">{subText}</span>
      </div>
    </div>
  );
}
