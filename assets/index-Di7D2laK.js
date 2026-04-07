const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-bWiNkJjK.js","assets/rolldown-runtime-BjWfMKpL.js","assets/SkyEffects-CW0NgKKl.js","assets/FloatingDecorations-D7Xjl6DT.js"])))=>i.map(i=>d[i]);
import { a as __toESM } from "./rolldown-runtime-BjWfMKpL.js";
import { a as require_react, i as require_jsx_runtime, n as motion, r as AnimatePresence } from "./vendor-bWiNkJjK.js";
import { t as require_client } from "./vendor-react-BSMfzH4L.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/index.css
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
//#endregion
//#region src/hooks/useLocalStorage.js
function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch {
			return initialValue;
		}
	});
	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (e) {
			console.warn("localStorage error:", e);
		}
	};
	return [storedValue, setValue];
}
//#endregion
//#region src/components/ThemePicker.jsx
var import_jsx_runtime = require_jsx_runtime();
var THEMES = [
	{
		id: "matcha",
		color: "#7BAE7F",
		name: "Matcha 🍵"
	},
	{
		id: "strawberry",
		color: "#FF8AA1",
		name: "Strawberry 🍓"
	},
	{
		id: "peach",
		color: "#FFB366",
		name: "Peach 🍑"
	},
	{
		id: "lavender",
		color: "#A084E8",
		name: "Lavender 🍇"
	}
];
function ThemePicker({ currentTheme, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1.5 p-1 rounded-full bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/5 backdrop-blur-sm flex-shrink-0",
		children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(t.id),
			className: `w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center relative ${currentTheme === t.id ? "scale-110 shadow-lg" : "scale-90 hover:scale-100 opacity-60 hover:opacity-100"}`,
			style: { background: t.color },
			title: t.name,
			children: currentTheme === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-2 border-white scale-110 shadow-sm" })
		}, t.id))
	});
}
//#endregion
//#region src/components/Header.jsx
function Header({ levelInfo, exp, streak, darkMode, onToggleDark, onShowSettings, theme, onThemeChange }) {
	const [animate, setAnimate] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setTimeout(() => setAnimate(true), 100);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex-1 min-w-0 transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl md:text-2xl font-bold leading-tight truncate",
					style: { color: "var(--text)" },
					children: "Matchaaawwww 👋"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs md:text-sm mt-0.5",
					style: { color: "var(--muted)" },
					children: "Selamat datang di ruang produktifmu~"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 md:gap-3 flex-shrink-0 w-full sm:w-auto justify-between sm:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemePicker, {
					currentTheme: theme,
					onChange: onThemeChange
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						streak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "streak-badge flex-shrink-0 text-[10px] md:text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "streak-fire",
									children: "🔥"
								}),
								" ",
								streak,
								"d"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onShowSettings,
							className: "w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-accent border-[1.5px] border-accent-2 hover:scale-110 active:scale-95 transition-all text-sm md:text-base flex-shrink-0",
							title: "Pengaturan",
							"aria-label": "Open settings",
							children: "⚙️"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onToggleDark,
							className: "dark-toggle flex-shrink-0",
							title: darkMode ? "Switch to light mode" : "Switch to dark mode",
							"aria-label": "Toggle dark mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dark-toggle-knob flex items-center justify-center text-[10px] md:text-xs",
								children: darkMode ? "🌙" : "☀️"
							})
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `transition-all duration-700 delay-200 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "level-badge",
							children: ["⭐ Lv.", levelInfo.level]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							style: { color: "var(--muted)" },
							children: levelInfo.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs",
						style: { color: "var(--muted)" },
						children: levelInfo.isMax ? "✨ Max Level!" : `${levelInfo.currentExp} / ${levelInfo.expToNext} EXP`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "exp-bar-track",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "exp-bar-fill",
						style: { width: `${levelInfo.progress}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between mt-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs",
						style: { color: "var(--muted)" },
						children: [
							"Total: ",
							exp,
							" EXP"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs",
						style: { color: "var(--muted)" },
						children: [levelInfo.progress, "%"]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/FilterBar.jsx
var FILTERS = [
	{
		key: "daily",
		label: "Hari Ini"
	},
	{
		key: "weekly",
		label: "7 Hari"
	},
	{
		key: "monthly",
		label: "30 Hari"
	}
];
function FilterBar({ active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1.5 md:gap-2 flex-wrap",
		children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: `filter-pill text-[11px] md:text-sm py-1.5 px-3 md:px-4 ${active === f.key ? "active" : ""}`,
			onClick: () => onChange(f.key),
			children: f.label
		}, f.key))
	});
}
//#endregion
//#region src/utils/insights.js
function filterByPeriod(items, filter) {
	const now = /* @__PURE__ */ new Date();
	return items.filter((item) => {
		const itemDate = new Date(item.date);
		if (filter === "daily") return itemDate.toDateString() === now.toDateString();
		else if (filter === "weekly") return (now - itemDate) / (1e3 * 60 * 60 * 24) <= 7;
		else return (now - itemDate) / (1e3 * 60 * 60 * 24) <= 30;
	});
}
function getTotalSpending(expenses) {
	return expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
}
function getMostFrequentExpense(expenses) {
	if (!expenses.length) return null;
	const freq = {};
	expenses.forEach((e) => {
		const name = e.name?.toLowerCase() || "other";
		freq[name] = (freq[name] || 0) + 1;
	});
	return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}
function getMostProductiveDay(tasks) {
	const completed = tasks.filter((t) => t.status === "done");
	if (!completed.length) return null;
	const dayCount = {};
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	completed.forEach((t) => {
		const day = dayNames[new Date(t.date).getDay()];
		dayCount[day] = (dayCount[day] || 0) + 1;
	});
	return Object.entries(dayCount).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}
function getSpendingMessage(total, filter = "daily", settings = {
	daily: 1e5,
	weekly: 7e5,
	monthly: 2e6
}) {
	if (total === 0) return {
		text: "Hemat banget periode ini! 🌿",
		type: "good"
	};
	const limit = settings[filter] || 1e5;
	if (total > limit) return {
		text: "Dompet kamu nangis 😭",
		type: "warn"
	};
	if (total > limit * .8) return {
		text: "Hampir batas belanja nih 🧐",
		type: "neutral"
	};
	return {
		text: "Pengeluaran terkendali ✨",
		type: "neutral"
	};
}
function getProductivityMessage(completedCount) {
	if (completedCount === 0) return {
		text: "Hari ini belum ngapa-ngapain 😭",
		type: "idle"
	};
	if (completedCount >= 5) return {
		text: "Mantap, makin disiplin 😎",
		type: "great"
	};
	if (completedCount >= 3) return {
		text: "Kamu lagi rajin banget 🔥",
		type: "good"
	};
	return {
		text: "Lumayan, terus semangat! 💪",
		type: "neutral"
	};
}
function formatCurrency(amount) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0
	}).format(amount);
}
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/daily-life-tracker/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/utils/confetti.js
async function fireConfetti() {
	const confetti = (await __vitePreload(async () => {
		const { default: __vite_default__ } = await import("./vendor-bWiNkJjK.js").then((n) => n.t);
		return { default: __vite_default__ };
	}, __vite__mapDeps([0,1]))).default;
	confetti({
		particleCount: 60,
		spread: 70,
		origin: { y: .6 },
		colors: [
			"#E6D3B3",
			"#D6C2A1",
			"#C4A882",
			"#A88B64",
			"#7BAE7F",
			"#FFEAA7"
		],
		scalar: .9,
		ticks: 150,
		gravity: .8
	});
}
async function fireSmallConfetti(x, y) {
	const confetti = (await __vitePreload(async () => {
		const { default: __vite_default__ } = await import("./vendor-bWiNkJjK.js").then((n) => n.t);
		return { default: __vite_default__ };
	}, __vite__mapDeps([0,1]))).default;
	confetti({
		particleCount: 25,
		spread: 45,
		origin: {
			x,
			y
		},
		colors: [
			"#E6D3B3",
			"#D6C2A1",
			"#A88B64",
			"#7BAE7F"
		],
		scalar: .7,
		ticks: 100,
		gravity: 1
	});
}
//#endregion
//#region src/utils/sounds.js
var audioCtx = null;
function getAudioContext() {
	if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	return audioCtx;
}
function playPop() {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();
		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);
		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(600, ctx.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + .12);
		gainNode.gain.setValueAtTime(.18, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .18);
		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + .2);
	} catch (e) {}
}
function playChime() {
	try {
		const ctx = getAudioContext();
		[
			523,
			659,
			784
		].forEach((freq, i) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.type = "sine";
			osc.frequency.setValueAtTime(freq, ctx.currentTime + i * .1);
			gain.gain.setValueAtTime(.12, ctx.currentTime + i * .1);
			gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + i * .1 + .3);
			osc.start(ctx.currentTime + i * .1);
			osc.stop(ctx.currentTime + i * .1 + .35);
		});
	} catch (e) {}
}
function playMeow() {
	try {
		const audio = new Audio("/daily-life-tracker/assets/meow.mp3");
		audio.volume = .5;
		audio.play().catch((e) => console.warn("Meow blocked:", e));
	} catch (e) {
		console.error(e);
	}
}
function playMachiiSuara() {
	try {
		const audio = new Audio("/daily-life-tracker/assets/machii_suara.mp3");
		audio.volume = .5;
		audio.play().catch((e) => console.warn("Machii suara blocked:", e));
	} catch (e) {
		console.error(e);
	}
}
function playRandomEmoteSound() {
	try {
		const ctx = getAudioContext();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.connect(gain);
		gain.connect(ctx.destination);
		const type = Math.floor(Math.random() * 3);
		const now = ctx.currentTime;
		if (type === 0) {
			osc.type = "sine";
			osc.frequency.setValueAtTime(800, now);
			osc.frequency.exponentialRampToValueAtTime(300, now + .1);
			gain.gain.setValueAtTime(.2, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .1);
			osc.start(now);
			osc.stop(now + .15);
		} else if (type === 1) {
			osc.type = "sine";
			osc.frequency.setValueAtTime(400, now);
			osc.frequency.linearRampToValueAtTime(600, now + .05);
			gain.gain.setValueAtTime(.15, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .15);
			osc.start(now);
			osc.stop(now + .2);
		} else {
			osc.type = "triangle";
			osc.frequency.setValueAtTime(1200 + Math.random() * 400, now);
			gain.gain.setValueAtTime(.1, now);
			gain.gain.exponentialRampToValueAtTime(.001, now + .25);
			osc.start(now);
			osc.stop(now + .3);
		}
	} catch (e) {}
}
//#endregion
//#region src/components/TaskItem.jsx
var TaskItem = import_react.memo(({ task, today, onComplete, onDelete }) => {
	const isDone = task.status === "done";
	const isMissed = task.status === "missed" || task.status === "pending" && task.date < today;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `task-item ${isDone ? "completed" : ""} ${isMissed ? "missed" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: `custom-checkbox ${isDone ? "checked" : ""} ${isMissed ? "locked" : ""}`,
				onClick: (e) => onComplete(task, e),
				"aria-label": "Complete task",
				disabled: isDone || isMissed,
				children: [isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "11",
					height: "9",
					viewBox: "0 0 11 9",
					fill: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M1 4.5L4 7.5L10 1",
						stroke: "white",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), isMissed && !isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] transform -rotate-12",
					children: "❌"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 min-w-0 flex flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `task-text text-sm font-medium ${isDone || isMissed ? "struck" : ""}`,
						style: { color: isMissed ? "var(--muted)" : "var(--text)" },
						children: task.title
					}), isMissed && !isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 font-bold uppercase tracking-wider",
						children: "Missed"
					})]
				})
			}),
			!isDone && !isMissed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onDelete(task.id, isMissed),
				className: "flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110",
				style: { color: "var(--muted)" },
				"aria-label": "Delete task",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "14",
					height: "14",
					viewBox: "0 0 14 14",
					fill: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 2L12 12M12 2L2 12",
						stroke: "currentColor",
						strokeWidth: "1.8",
						strokeLinecap: "round"
					})
				})
			})
		]
	});
});
TaskItem.displayName = "TaskItem";
//#endregion
//#region src/components/TaskSection.jsx
var TaskSection_default = (0, import_react.memo)(function TaskSection({ tasks, filter, onAdd, onComplete, onDelete, onToast }) {
	const [input, setInput] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const today = (0, import_react.useMemo)(() => (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA"), []);
	const filtered = (0, import_react.useMemo)(() => filterByPeriod(tasks, filter), [tasks, filter]);
	const { pending, missed, done } = (0, import_react.useMemo)(() => ({
		pending: filtered.filter((t) => t.status === "pending" && t.date === today),
		missed: filtered.filter((t) => t.status === "missed" || t.status === "pending" && t.date < today),
		done: filtered.filter((t) => t.status === "done" && t.date === today)
	}), [filtered, today]);
	const handleAdd = async (e) => {
		e.preventDefault();
		const val = input.trim();
		if (!val) {
			inputRef.current?.focus();
			return;
		}
		setInput("");
		await onAdd(val, today);
		inputRef.current?.focus();
	};
	const handleCompleteInternal = (0, import_react.useCallback)((task, e) => {
		if (task.status === "done" || task.status === "missed") return;
		if (task.date < today) return;
		const rect = e.currentTarget.getBoundingClientRect();
		fireSmallConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
		playChime();
		onToast("Cie produktif 😏✨", "success");
		onComplete(task.id);
	}, [
		onComplete,
		onToast,
		today
	]);
	const handleDeleteInternal = (0, import_react.useCallback)(async (id, isLocked) => {
		if (isLocked) return;
		playPop();
		await onDelete(id);
	}, [onDelete]);
	const listConfig = {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95
		},
		transition: { duration: .2 }
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📋" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tugas Hari Ini" }),
					pending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-xs font-normal px-2 py-0.5 rounded-full",
						style: {
							background: "var(--accent)",
							color: "var(--text)"
						},
						children: [pending.length, " pending"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: handleAdd,
				className: "space-y-4 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Tambah tugas baru...",
						className: "input-field"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-primary flex-shrink-0 w-12",
						"aria-label": "Add task",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "20",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "12",
								y1: "5",
								x2: "12",
								y2: "19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "5",
								y1: "12",
								x2: "19",
								y2: "12"
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					pending.length === 0 && done.length === 0 && missed.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl mb-2",
							children: "✨"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Belum ada tugas.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Yuk tambahin sesuatu!"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						initial: false,
						children: pending.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							...listConfig,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskItem, {
								task,
								today,
								onComplete: handleCompleteInternal,
								onDelete: handleDeleteInternal
							})
						}, task.id))
					}),
					missed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold pt-4 pb-1 text-red-500 dark:text-red-400",
						style: { letterSpacing: "0.05em" },
						children: "LEWAT DEADLINE (MISSED) ❌"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: missed.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							...listConfig,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskItem, {
								task,
								today,
								onComplete: handleCompleteInternal,
								onDelete: handleDeleteInternal
							})
						}, task.id))
					})] }),
					done.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold pt-4 pb-1",
						style: { color: "var(--muted)" },
						children: [
							"SELESAI · ",
							done.length,
							" ✅"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: done.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							...listConfig,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskItem, {
								task,
								today,
								onComplete: handleCompleteInternal,
								onDelete: handleDeleteInternal
							})
						}, task.id))
					})] })
				]
			})
		]
	});
});
//#endregion
//#region src/components/ExpenseItem.jsx
var ExpenseItem = import_react.memo(({ expense, onDelete }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-300",
		style: {
			background: "var(--bg)",
			border: "1px solid var(--border)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-base flex-shrink-0",
				children: "🛍️"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium capitalize truncate",
				style: { color: "var(--text)" },
				children: expense.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 flex-shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold whitespace-nowrap",
				style: { color: "var(--exp-fill, #C4A882)" },
				children: formatCurrency(expense.amount)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onDelete(expense.id),
				className: "w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
				style: { color: "var(--muted)" },
				"aria-label": "Delete expense",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 14 14",
					fill: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M2 2L12 12M12 2L2 12",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round"
					})
				})
			})]
		})]
	});
});
ExpenseItem.displayName = "ExpenseItem";
//#endregion
//#region src/components/ExpenseSection.jsx
function useDebouncedValue(value, delay) {
	const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(handler);
	}, [value, delay]);
	return debouncedValue;
}
var ExpenseSection = (0, import_react.memo)(function ExpenseSection({ expenses, filter, onAdd, onDelete, onToast }) {
	const [name, setName] = (0, import_react.useState)("");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [showSuggestions, setShowSuggestions] = (0, import_react.useState)(false);
	const suggestionsRef = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => filterByPeriod(expenses, filter), [expenses, filter]);
	const total = (0, import_react.useMemo)(() => getTotalSpending(filtered), [filtered]);
	const debouncedName = useDebouncedValue(name, 150);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) setShowSuggestions(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const suggestionsData = (0, import_react.useMemo)(() => {
		if (!expenses || expenses.length === 0) return [];
		const freq = {};
		const canonicalNames = {};
		expenses.forEach((e) => {
			const n = e.name?.trim();
			if (!n) return;
			const lower = n.toLowerCase();
			freq[lower] = (freq[lower] || 0) + 1;
			if (!canonicalNames[lower] || freq[lower] > (freq[canonicalNames[lower].toLowerCase()] || 0)) canonicalNames[lower] = n;
		});
		return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).map((lower) => ({
			name: canonicalNames[lower],
			count: freq[lower]
		}));
	}, [expenses]);
	const filteredSuggestions = (0, import_react.useMemo)(() => {
		const search = debouncedName.trim().toLowerCase();
		if (!search) return suggestionsData.slice(0, 6);
		return suggestionsData.filter((s) => s.name.toLowerCase().includes(search)).slice(0, 6);
	}, [suggestionsData, debouncedName]);
	const handleSelectSuggestion = (suggestedName) => {
		setName(suggestedName);
		setShowSuggestions(false);
	};
	const handleAdd = async (e) => {
		e.preventDefault();
		const n = name.trim();
		const a = parseFloat(amount);
		if (!n || !a || a <= 0) return;
		setName("");
		setAmount("");
		playPop();
		onToast("Jajan lagi nih 👀", "warn");
		await onAdd(n, a);
	};
	const handleDeleteInternal = (0, import_react.useCallback)(async (id) => {
		playPop();
		await onDelete(id);
	}, [onDelete]);
	const itemConfig = {
		initial: {
			opacity: 0,
			x: -10
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: {
			opacity: 0,
			x: 10,
			scale: .95
		},
		transition: { duration: .2 }
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💸" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pengeluaran" }),
					filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
						style: {
							background: "var(--accent)",
							color: "var(--text)"
						},
						children: [filtered.length, " item"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleAdd,
				className: "space-y-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "suggestions-container",
					ref: suggestionsRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: name,
						onChange: (e) => setName(e.target.value),
						onFocus: () => setShowSuggestions(true),
						onClick: () => setShowSuggestions(true),
						placeholder: "Nama pengeluaran...",
						className: "input-field",
						autoComplete: "off"
					}), showSuggestions && filteredSuggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "suggestions-menu",
						children: filteredSuggestions.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "suggestion-item",
							onClick: () => handleSelectSuggestion(s.name),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "item-content",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "item-icon",
									children: "🛍️"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "item-name",
									children: s.name
								})]
							}), s.count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "item-freq",
								children: [s.count, "x"]
							})]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						value: amount,
						onChange: (e) => setAmount(e.target.value),
						placeholder: "Nominal (Rp)",
						className: "input-field",
						min: "0",
						step: "500"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-primary whitespace-nowrap",
						children: "+ Catat"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5 mb-4 max-h-56 overflow-y-auto overflow-x-hidden",
				children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "empty-state",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl mb-2",
						children: "💰"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Belum ada pengeluaran.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Hemat banget nih!"
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					initial: false,
					children: [...filtered].reverse().map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						...itemConfig,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseItem, {
							expense: e,
							onDelete: handleDeleteInternal
						})
					}, e.id))
				})]
			}),
			filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3 rounded-xl",
				style: {
					background: "var(--accent)",
					border: "1px solid var(--accent-2)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold",
					style: { color: "var(--text)" },
					children: "Total"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-bold",
					style: { color: "var(--text)" },
					children: formatCurrency(total)
				})]
			})
		]
	});
});
//#endregion
//#region src/components/InsightCard.jsx
var periodLabel = {
	daily: "Hari Ini",
	weekly: "7 Hari",
	monthly: "30 Hari"
};
function InsightCard({ tasks, expenses, filter, settings }) {
	const filteredExpenses = (0, import_react.useMemo)(() => filterByPeriod(expenses, filter), [expenses, filter]);
	const filteredTasks = (0, import_react.useMemo)(() => filterByPeriod(tasks, filter), [tasks, filter]);
	const totalSpending = (0, import_react.useMemo)(() => getTotalSpending(filteredExpenses), [filteredExpenses]);
	const { completedCount, totalTasks } = (0, import_react.useMemo)(() => ({
		completedCount: filteredTasks.filter((t) => t.status === "done").length,
		totalTasks: filteredTasks.length
	}), [filteredTasks]);
	const mostExpense = (0, import_react.useMemo)(() => getMostFrequentExpense(filteredExpenses), [filteredExpenses]);
	const bestDay = (0, import_react.useMemo)(() => getMostProductiveDay(tasks), [tasks]);
	const spendMsg = (0, import_react.useMemo)(() => getSpendingMessage(totalSpending, filter, settings), [
		totalSpending,
		filter,
		settings
	]);
	const prodMsg = (0, import_react.useMemo)(() => getProductivityMessage(completedCount), [completedCount]);
	const msgColor = {
		good: "#7BAE7F",
		great: "#7BAE7F",
		warn: "#D98080",
		neutral: "var(--muted)",
		idle: "var(--muted)"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title mb-6 flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "📊"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-bold",
						children: "Insight Ringkasan"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto text-xs font-semibold px-3 py-1 rounded-full border border-accent-2",
					style: {
						background: "var(--accent)",
						color: "var(--text)"
					},
					children: periodLabel[filter]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-2xl flex flex-col gap-2 transition-transform hover:scale-[1.02]",
					style: {
						background: "var(--bg)",
						border: `1.5px solid ${prodMsg.type === "good" || prodMsg.type === "great" ? "var(--success)" : "var(--border)"}`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider opacity-60",
						children: "Produktivitas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium leading-relaxed",
						style: { color: msgColor[prodMsg.type] },
						children: prodMsg.text
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-2xl flex flex-col gap-2 transition-transform hover:scale-[1.02]",
					style: {
						background: "var(--bg)",
						border: `1.5px solid ${spendMsg.type === "good" || spendMsg.type === "neutral" ? "var(--border)" : "var(--danger)"}`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider opacity-60",
						children: "Pengeluaran"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium leading-relaxed",
						style: { color: msgColor[spendMsg.type] },
						children: spendMsg.text
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "insight-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "✅",
						label: "Tugas Selesai",
						value: completedCount === 0 && totalTasks === 0 ? "0" : `${completedCount} / ${totalTasks}`,
						subText: "Target tercapai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "💸",
						label: "Total Dana",
						value: formatCurrency(totalSpending),
						subText: "Periode ini"
					}),
					mostExpense ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "🛍️",
						label: "Sering Dibeli",
						value: mostExpense,
						capitalize: true,
						subText: "Kategori utama"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "✨",
						label: "Status Belanja",
						value: "Hemat!",
						subText: "Belum ada jajan"
					}),
					bestDay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "📅",
						label: "Hari Puncak",
						value: bestDay,
						subText: "Paling rajin"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightTile, {
						icon: "🚀",
						label: "Mulai Sekarang",
						value: "Ayooo!",
						subText: "Tunggu apa lagi"
					})
				]
			})
		]
	});
}
function InsightTile({ icon, label, value, capitalize = false, subText }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "insight-tile",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-10 h-10 rounded-full bg-card flex items-center justify-center text-xl shadow-sm border border-border/50",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-base font-bold truncate max-w-full px-1 ${capitalize ? "capitalize" : ""}`,
					style: { color: "var(--text)" },
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-medium opacity-40",
					children: subText
				})
			]
		})]
	});
}
//#endregion
//#region src/components/DailyPhotoTask.jsx
var STORAGE_KEY = "dlt_daily_pap";
var IDLE_MESSAGES = [
	{
		text: "Hei cantik, belom absen nih 😤",
		sub: "Yuk foto dulu, aku pengen lihat wajah kamu!",
		emoji: "🥺"
	},
	{
		text: "Mana absen cantiknya? 👀",
		sub: "Streak bahaya kalau ga absen hari ini...",
		emoji: "😍"
	},
	{
		text: "Kangen liat mukamu 🥺",
		sub: "Absen sebentar dong, baru deh rebahan~",
		emoji: "💕"
	},
	{
		text: "Foto dong, pasti cantik banget hari ini 😏",
		sub: "Streak kamu sayang banget kalau putus gara-gara ini~",
		emoji: "😏"
	},
	{
		text: "Eh kamu lupa absen ya? 🤨",
		sub: "Jangan dong, aku pengen lihat kamu tiap hari!",
		emoji: "🤨"
	},
	{
		text: "Absen sekarang! Aku nunggu foto kamu 📣",
		sub: "Pasti cantik banget deh hari ini, buktiin!",
		emoji: "📣"
	},
	{
		text: "Belum absen nih~ ayo dong 🙃",
		sub: "Masih ada waktu! Aku mau lihat senyumu hari ini~",
		emoji: "🙃"
	},
	{
		text: "Absen dulu ya sayang 💖",
		sub: "Tiap hari aku nunggu foto kamu loh~",
		emoji: "💖"
	}
];
var DONE_MESSAGES = [
	{
		text: "Cantik banget sih kamu hari ini! 😍",
		sub: "Makin hari makin cakep deh~ +15 EXP!"
	},
	{
		text: "Makin cantik aja tiap hari 💕",
		sub: "Beneran deh, foto ini bikin senyum terus~"
	},
	{
		text: "Aduh, cantiknya keterlaluan 😭✨",
		sub: "Streak aman, hati aku makin klepek-klepek!"
	},
	{
		text: "Cantiknya konsisten, persis kayak streak-nya 🔥",
		sub: "Makasih udah absen hari ini, aku suka banget~"
	},
	{
		text: "Kamu makin glowing setiap harinya 🌟",
		sub: "Semangat terus ya! +15 EXP udah di kantong~"
	},
	{
		text: "Foto setiap hari karena emang selalu cakep 💖",
		sub: "Gatau deh kok bisa secantik itu tiap hari~"
	},
	{
		text: "Aduhai, cantik banget sih! 🥰",
		sub: "Aku lucky banget bisa lihat foto kamu tiap hari!"
	}
];
function getTodayKey() {
	return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
}
function loadPapState() {
	try {
		const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (raw && raw.date === getTodayKey()) return raw;
		return null;
	} catch {
		return null;
	}
}
function savePapState(data) {
	const { preview: _drop, ...safeData } = data;
	localStorage.setItem(STORAGE_KEY, JSON.stringify({
		date: getTodayKey(),
		...safeData
	}));
}
function DailyPhotoTask({ onExp, onToast, onAddPap, onSaveStreak, streak, onShowExpPopup }) {
	const [papState, setPapState] = (0, import_react.useState)(() => loadPapState());
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [reUploading, setReUploading] = (0, import_react.useState)(false);
	const [rePreview, setRePreview] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [shaking, setShaking] = (0, import_react.useState)(false);
	const [lightbox, setLightbox] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const reUploadRef = (0, import_react.useRef)(null);
	const savedPhotoUrl = papState?.photo_url || null;
	(0, import_react.useEffect)(() => {
		const onSync = () => {
			const synced = loadPapState();
			if (synced) setPapState(synced);
		};
		window.addEventListener("pap-synced", onSync);
		return () => window.removeEventListener("pap-synced", onSync);
	}, []);
	const idleMsg = IDLE_MESSAGES[(/* @__PURE__ */ new Date()).getDate() % IDLE_MESSAGES.length];
	const doneMsg = DONE_MESSAGES[(/* @__PURE__ */ new Date()).getDate() % DONE_MESSAGES.length];
	const isDone = Boolean(papState?.done);
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
		setUploading(true);
		onToast("Upload foto ke Drive...⏳", "info");
		const timestamp = (/* @__PURE__ */ new Date()).toISOString();
		let photo_url = "";
		if (onAddPap) try {
			photo_url = (await onAddPap({
				date: getTodayKey(),
				status: "done",
				timestamp,
				photoDataUrl: preview
			}))?.photo_url || "";
		} catch (e) {
			console.warn("[PAP] Upload failed:", e);
		}
		const state = {
			done: true,
			photo_url,
			timestamp
		};
		savePapState(state);
		setPapState({
			date: getTodayKey(),
			...state
		});
		setPreview(null);
		setUploading(false);
		playChime();
		fireConfetti();
		onExp(15);
		if (onShowExpPopup) onShowExpPopup(15, "exp");
		if (photo_url) onToast("Absen berhasil! Foto tersimpan di Drive ☁️ +15 EXP 📸✨", "success");
		else onToast("Absen tercatat! Tapi foto gagal simpan di Drive (cek console) ⚠️ +15 EXP", "warn");
		if (onSaveStreak) onSaveStreak({
			date: getTodayKey(),
			streak_count: streak ?? 0,
			pap_done: "YES"
		});
	};
	const handleCancel = () => {
		setPreview(null);
		if (fileRef.current) fileRef.current.value = "";
	};
	const handleReUploadChange = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (ev) => setRePreview(ev.target.result);
		reader.readAsDataURL(file);
	};
	const handleReUpload = async () => {
		if (!rePreview || reUploading) return;
		setReUploading(true);
		onToast("Re-upload foto ke Drive... ⏳", "info");
		let photo_url = "";
		let papResult = null;
		if (onAddPap) try {
			papResult = await onAddPap({
				date: getTodayKey(),
				status: "done",
				timestamp: papState?.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
				photoDataUrl: rePreview
			});
			photo_url = papResult?.photo_url || "";
		} catch (err) {
			console.warn("[PAP] Re-upload threw:", err);
		}
		if (photo_url) {
			const updated = {
				...papState,
				photo_url
			};
			savePapState(updated);
			setPapState({
				date: getTodayKey(),
				...updated
			});
			setRePreview(null);
			if (reUploadRef.current) reUploadRef.current.value = "";
			onToast("Foto berhasil di-upload ke Drive! ☁️📸", "success");
		} else {
			console.error("[PAP] Re-upload papResult:", papResult);
			onToast(papResult?.error ? `Upload gagal: ${String(papResult.error).slice(0, 60)}` : "Upload gagal 😭 Buka F12 > Console untuk lihat error detail", "warn");
		}
		setReUploading(false);
	};
	const cancelReUpload = () => {
		setRePreview(null);
		if (reUploadRef.current) reUploadRef.current.value = "";
	};
	const handleReset = () => {
		if (window.confirm("Hapus status Absen hari ini dari HP ini saja? (Bisa sinkron ulang lho!)")) {
			localStorage.removeItem(STORAGE_KEY);
			setPapState(null);
			setPreview(null);
			onToast("Status Absen di-reset! Silakan upload baru atau tunggu sinkron otomatis 🔄", "info");
			setTimeout(() => window.location.reload(), 800);
		}
	};
	const triggerShake = () => {
		setShaking(true);
		setTimeout(() => setShaking(false), 600);
		fileRef.current?.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-5 relative overflow-hidden",
		style: {
			border: isDone ? "1.5px solid var(--success)" : "1.5px solid var(--accent-2)",
			transition: "border-color 0.4s ease"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title mb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📸" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Absen Cantik Hari Ini" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold px-2 py-0.5 rounded-full opacity-60",
							style: {
								background: "var(--accent)",
								color: "var(--text)"
							},
							children: "+15 EXP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold px-2 py-0.5 rounded-full",
							style: {
								background: isDone ? "var(--success)" : "#f97316",
								color: "#fff"
							},
							children: isDone ? "✅ Done!" : "⚠️ Wajib Absen"
						})]
					})
				]
			}),
			!isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `px-4 py-3 rounded-2xl mb-4 text-center ${shaking ? "animate-shake" : ""}`,
					style: {
						background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.12))",
						border: "1.5px dashed #f97316"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl mb-1",
							children: idleMsg.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-sm",
							style: { color: "var(--text)" },
							children: idleMsg.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs mt-1",
							style: { color: "var(--muted)" },
							children: idleMsg.sub
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2 rounded-xl mb-3 text-xs font-medium",
					style: {
						background: "rgba(239,68,68,0.08)",
						border: "1px solid rgba(239,68,68,0.25)",
						color: "#ef4444"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base",
						children: "🔥"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: streak && streak > 0 ? `Streak kamu ${streak} hari! Jangan sampe putus gara-gara ga absen~` : "Mulai streak baru hari ini dengan absen! 🚀" })]
				}),
				preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-3 rounded-2xl overflow-hidden",
					style: {
						border: "2px solid var(--accent)",
						aspectRatio: "1 / 1",
						background: "rgba(0,0,0,0.03)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: preview,
							alt: "preview",
							className: "w-full h-full object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleCancel,
							className: "absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
							style: {
								background: "rgba(0,0,0,0.5)",
								color: "#fff",
								backdropFilter: "blur(4px)"
							},
							children: "✕"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-2 left-2 text-xs font-semibold px-2 py-1 rounded-full",
							style: {
								background: "rgba(0,0,0,0.45)",
								color: "#fff",
								backdropFilter: "blur(4px)"
							},
							children: "📷 Foto siap dikirim!"
						})
					]
				}),
				!preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: triggerShake,
					disabled: loading || uploading,
					className: "btn-primary w-full py-3 rounded-2xl flex items-center justify-center gap-2 font-bold",
					style: { fontSize: "0.95rem" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "📷"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loading ? "Loading foto..." : "Ambil / Upload Foto Sekarang!" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleCancel,
						disabled: uploading,
						className: "flex-1 py-2.5 rounded-2xl text-sm font-medium border transition-colors",
						style: {
							background: "var(--bg)",
							border: "1.5px solid var(--border)",
							color: "var(--muted)"
						},
						children: "🔄 Ganti Foto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSubmit,
						disabled: uploading,
						className: "flex-1 btn-primary py-2.5 rounded-2xl flex items-center justify-center gap-1.5 font-bold",
						children: uploading ? "⏳ Uploading..." : "✅ Setor Muka (+15 EXP)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileRef,
					type: "file",
					accept: "image/*",
					capture: "environment",
					className: "hidden",
					onChange: handleFileChange
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-3 rounded-2xl mb-3 text-center",
					style: {
						background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.12))",
						border: "1.5px solid var(--success)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl mb-1",
							children: "🎉"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-sm",
							style: { color: "var(--success)" },
							children: doneMsg.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs mt-1",
							style: { color: "var(--muted)" },
							children: doneMsg.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleReset,
							className: "mt-3 text-[10px] uppercase tracking-wider font-bold opacity-40 hover:opacity-100 transition-opacity",
							style: { color: "var(--muted)" },
							children: "🔄 Ulangi / Reset Absen Hari Ini"
						})
					]
				}),
				savedPhotoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl overflow-hidden mb-3 aspect-square w-full shrink-0",
					style: {
						border: "2px solid var(--success)",
						cursor: "zoom-in",
						background: "rgba(0,0,0,0.03)"
					},
					onClick: () => setLightbox(true),
					title: "Klik untuk lihat foto penuh",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: savedPhotoUrl,
						alt: "absen hari ini",
						style: {
							width: "100%",
							height: "100%",
							objectFit: "contain",
							background: "rgba(0,0,0,0.03)",
							display: "block"
						},
						onError: (e) => {
							e.target.style.display = "none";
						}
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl mb-3 overflow-hidden",
					style: { border: "1.5px dashed var(--success)" },
					children: [
						rePreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							style: {
								aspectRatio: "1 / 1",
								background: "rgba(0,0,0,0.03)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: rePreview,
								alt: "preview re-upload",
								className: "w-full h-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: cancelReUpload,
								disabled: reUploading,
								className: "absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
								style: {
									background: "rgba(0,0,0,0.5)",
									color: "#fff"
								},
								children: "✕"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center gap-1.5 py-4 text-xs",
							style: { color: "var(--muted)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: "📷"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Foto belum ter-upload ke Drive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { opacity: .7 },
									children: "Upload sekarang biar bisa dilihat di HP lain!"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => reUploadRef.current?.click(),
								disabled: reUploading,
								className: "flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1",
								style: {
									background: "var(--bg)",
									border: "1.5px solid var(--border)",
									color: "var(--text)",
									opacity: reUploading ? .5 : 1
								},
								children: ["🖼️ ", rePreview ? "Ganti" : "Pilih Foto"]
							}), rePreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleReUpload,
								disabled: reUploading,
								className: "flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1",
								style: {
									background: "var(--success)",
									color: "#fff",
									opacity: reUploading ? .6 : 1
								},
								children: reUploading ? "⏳ Uploading..." : "☁️ Upload ke Drive"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: reUploadRef,
							type: "file",
							accept: "image/*",
							capture: "environment",
							className: "hidden",
							onChange: handleReUploadChange
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-1.5 text-xs font-medium py-2 rounded-xl",
					style: {
						background: "rgba(34,197,94,0.1)",
						color: "var(--success)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: savedPhotoUrl ? "☁️" : "⚠️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: savedPhotoUrl ? "Foto tersimpan di Drive · Bisa dibuka di device lain!" : "Tercatat di Sheets · Upload foto supaya sync!" })]
				})
			] }),
			lightbox && savedPhotoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: () => setLightbox(false),
				style: {
					position: "fixed",
					inset: 0,
					zIndex: 99999,
					background: "rgba(0,0,0,0.92)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "zoom-out",
					padding: "1.5rem",
					animation: "fadeIn 0.2s ease"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: savedPhotoUrl,
						alt: "pap fullscreen",
						style: {
							maxWidth: "100%",
							maxHeight: "90vh",
							borderRadius: "1rem",
							boxShadow: "0 0 60px rgba(0,0,0,0.6)",
							objectFit: "contain"
						},
						onClick: (e) => e.stopPropagation()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLightbox(false),
						style: {
							position: "absolute",
							top: "1.25rem",
							right: "1.25rem",
							background: "rgba(255,255,255,0.15)",
							border: "none",
							color: "#fff",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							fontSize: "1.1rem",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backdropFilter: "blur(4px)"
						},
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							position: "absolute",
							bottom: "1.25rem",
							left: "50%",
							transform: "translateX(-50%)",
							color: "rgba(255,255,255,0.5)",
							fontSize: "0.75rem",
							whiteSpace: "nowrap"
						},
						children: "Klik di luar foto untuk tutup"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/HistoryModal.jsx
function isoToDisplay(iso) {
	if (!iso) return "";
	return (/* @__PURE__ */ new Date(iso + "T00:00:00")).toLocaleDateString("id-ID", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function getLast30Days() {
	const days = [];
	const today = /* @__PURE__ */ new Date();
	for (let i = 0; i < 30; i++) {
		const d = new Date(today);
		d.setDate(today.getDate() - i);
		days.push(d.toISOString().slice(0, 10));
	}
	return days;
}
function getDateKey$2(dateStr) {
	if (!dateStr) return "";
	if (/^\d{4}-\d{2}-\d{2}/.test(String(dateStr))) return String(dateStr).slice(0, 10);
	try {
		return new Date(dateStr).toISOString().slice(0, 10);
	} catch {
		return "";
	}
}
function getPapFromLocalHistory(dateKey) {
	try {
		return JSON.parse(localStorage.getItem("dlt_pap_history") || "[]").find((p) => getDateKey$2(p.date) === dateKey) || null;
	} catch {
		return null;
	}
}
function getTodayPapFromLocal(dateKey) {
	try {
		const raw = JSON.parse(localStorage.getItem("dlt_daily_pap") || "null");
		if (raw && raw.date === dateKey) return raw;
		return null;
	} catch {
		return null;
	}
}
function HistoryModal({ tasks, expenses, onClose }) {
	const days = (0, import_react.useMemo)(() => getLast30Days(), []);
	const [selectedDate, setSelectedDate] = (0, import_react.useState)(days[0]);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const overlayRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setVisible(true), 30);
		return () => clearTimeout(t);
	}, []);
	const handleClose = () => {
		setVisible(false);
		setTimeout(onClose, 350);
	};
	const tasksByDate = (0, import_react.useMemo)(() => {
		const map = {};
		tasks.forEach((t) => {
			const k = getDateKey$2(t.date);
			if (!k) return;
			if (!map[k]) map[k] = [];
			map[k].push(t);
		});
		return map;
	}, [tasks]);
	const expensesByDate = (0, import_react.useMemo)(() => {
		const map = {};
		expenses.forEach((e) => {
			const k = getDateKey$2(e.date);
			if (!k) return;
			if (!map[k]) map[k] = [];
			map[k].push(e);
		});
		return map;
	}, [expenses]);
	const dayTasks = tasksByDate[selectedDate] || [];
	const dayExpenses = expensesByDate[selectedDate] || [];
	const papRecord = (0, import_react.useMemo)(() => {
		if (selectedDate === days[0]) return getTodayPapFromLocal(selectedDate) || getPapFromLocalHistory(selectedDate);
		return getPapFromLocalHistory(selectedDate);
	}, [selectedDate, days]);
	const dayTotal = dayExpenses.reduce((s, e) => s + Number(e.amount || 0), 0);
	const doneTasks = dayTasks.filter((t) => t.status === "done");
	const pendingTasks = dayTasks.filter((t) => t.status !== "done");
	const hasDots = (iso) => {
		return {
			hasTask: Boolean(tasksByDate[iso]?.length),
			hasExp: Boolean(expensesByDate[iso]?.length)
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: overlayRef,
		className: `history-backdrop ${visible ? "show" : ""}`,
		onClick: handleClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `history-modal ${visible ? "show" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "history-modal-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl",
					children: "📅"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-base",
					style: { color: "var(--text)" },
					children: "Riwayat Harian"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "history-close-btn",
				onClick: handleClose,
				"aria-label": "Tutup",
				children: "✕"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "history-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "history-sidebar",
				children: days.map((iso) => {
					const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
					const dayNum = d.getDate();
					const month = [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"Mei",
						"Jun",
						"Jul",
						"Agu",
						"Sep",
						"Okt",
						"Nov",
						"Des"
					][d.getMonth()];
					const dayName = [
						"Min",
						"Sen",
						"Sel",
						"Rab",
						"Kam",
						"Jum",
						"Sab"
					][d.getDay()];
					const { hasTask, hasExp } = hasDots(iso);
					const isToday = iso === days[0];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `history-date-btn ${iso === selectedDate ? "active" : ""}`,
						onClick: () => setSelectedDate(iso),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "history-date-name",
								children: dayName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "history-date-num",
								children: dayNum
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "history-date-month",
								children: month
							}),
							isToday && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "history-today-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-dot-row",
								children: [hasTask && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "history-dot task-dot" }), hasExp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "history-dot expense-dot" })]
							})
						]
					}, iso);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "history-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-day-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium mb-0.5",
							style: { color: "var(--muted)" },
							children: selectedDate === days[0] ? "📍 Hari ini" : ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold leading-tight",
							style: { color: "var(--text)" },
							children: isoToDisplay(selectedDate)
						})]
					}),
					dayTasks.length === 0 && dayExpenses.length === 0 && !papRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl mb-3",
								children: "🌿"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-sm",
								style: { color: "var(--text)" },
								children: "Ga ada aktivitas nih"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs mt-1",
								style: { color: "var(--muted)" },
								children: "Hari ini santai kayaknya~ 😴"
							})
						]
					}),
					papRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-section-title",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📸" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Absen Cantik" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
										style: {
											background: "rgba(123,174,127,0.15)",
											color: "var(--success)"
										},
										children: "✅ Done"
									})
								]
							}),
							papRecord.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "history-pap-photo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: papRecord.photo_url,
									alt: `absen ${selectedDate}`,
									onError: (e) => {
										e.target.parentElement.innerHTML = "<div class=\"history-pap-fallback\">📷 Foto tidak bisa dimuat</div>";
									}
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "history-pap-fallback",
								children: "📷 Foto belum ter-sync ke Drive"
							}),
							papRecord.timestamp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs mt-2 text-center",
								style: { color: "var(--muted)" },
								children: ["⏰ ", new Date(papRecord.timestamp).toLocaleTimeString("id-ID", {
									hour: "2-digit",
									minute: "2-digit"
								})]
							})
						]
					}),
					dayTasks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-section-title",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📋" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tugas" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
									style: {
										background: "var(--accent)",
										color: "var(--text)"
									},
									children: [
										doneTasks.length,
										"/",
										dayTasks.length,
										" selesai"
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-task-list",
							children: [doneTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-task-item done",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "history-task-check",
									children: "✓"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "history-task-text done-text",
									children: task.title
								})]
							}, task.id)), pendingTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-task-item pending",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "history-task-check pending-check",
										children: "○"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "history-task-text",
										children: task.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs px-1.5 py-0.5 rounded-full",
										style: {
											background: "rgba(249,115,22,0.12)",
											color: "#f97316"
										},
										children: "pending"
									})
								]
							}, task.id))]
						})]
					}),
					dayExpenses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-section-title",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💸" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pengeluaran" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
									style: {
										background: "var(--accent)",
										color: "var(--text)"
									},
									children: [dayExpenses.length, " item"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "history-expense-list",
							children: [[...dayExpenses].reverse().map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-expense-item",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base",
										children: "🛍️"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-sm font-medium capitalize",
										style: { color: "var(--text)" },
										children: exp.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold",
										style: { color: "var(--exp-fill, #C4A882)" },
										children: formatCurrency(Number(exp.amount))
									})
								]
							}, exp.id || i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "history-expense-total",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									style: { color: "var(--text)" },
									children: "Total hari ini"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-bold",
									style: { color: "var(--text)" },
									children: formatCurrency(dayTotal)
								})]
							})]
						})]
					}),
					(dayTasks.length > 0 || dayExpenses.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "history-summary-chips",
						children: [
							dayTasks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `history-chip ${doneTasks.length === dayTasks.length ? "chip-green" : "chip-orange"}`,
								children: [
									doneTasks.length === dayTasks.length ? "🌟" : "⚡",
									" ",
									doneTasks.length,
									"/",
									dayTasks.length,
									" tasks"
								]
							}),
							dayExpenses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `history-chip ${dayTotal >= 2e5 ? "chip-red" : "chip-neutral"}`,
								children: ["💸 ", formatCurrency(dayTotal)]
							}),
							papRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "history-chip chip-green",
								children: "📸 Absen done!"
							})
						]
					})
				]
			})]
		})]
	})] });
}
//#endregion
//#region src/components/FeedbackToast.jsx
function useToast() {
	const [toasts, setToasts] = (0, import_react.useState)([]);
	return {
		toasts,
		addToast: (0, import_react.useCallback)((message, type = "neutral") => {
			const id = Date.now();
			setToasts((prev) => [...prev, {
				id,
				message,
				type,
				dismissing: false
			}]);
			setTimeout(() => {
				setToasts((prev) => prev.map((t) => t.id === id ? {
					...t,
					dismissing: true
				} : t));
				setTimeout(() => {
					setToasts((prev) => prev.filter((t) => t.id !== id));
				}, 350);
			}, 2800);
		}, [])
	};
}
var icons = {
	success: "✨",
	warn: "👀",
	info: "ℹ️",
	neutral: "💬"
};
function FeedbackToast({ toasts }) {
	if (!toasts.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "toast-container",
		children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `toast ${t.dismissing ? "dismissing" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-1.5",
				children: icons[t.type] || "💬"
			}), t.message]
		}, t.id))
	});
}
//#endregion
//#region src/components/WelcomeCard.jsx
var sweetMessages = [
	"Hari ini pasti seru, apalagi kalau kamu senyum terus ya matchaa~ 🥰",
	"Jangan lupa makan, minum, dan istirahat ya sayangku matchaa 💕",
	"Kamu tuh udah cantik, rajin pula. Sempurna deh matchaaku! ✨",
	"Setiap usaha kecil kamu itu berarti banget loh, matchaa 🌸",
	"Semangat hari ini! Aku selalu support kamu, matchaa 💪🩷",
	"Kamu itu kayak matcha latte—manis, elegant, dan bikin nagih 🍵💚",
	"Apapun yang kamu kerjain hari ini, pasti bisa! Percaya deh, matchaa~ 🌟",
	"Good vibes only buat matchaa hari ini! 🦋✨",
	"Kamu udah hebat banget, matchaa. Jangan terlalu keras sama diri sendiri ya 🤗",
	"Selamat pagi/siang/malam matchaa! Kamu selalu bikin hari aku lebih berwarna 🌈",
	"Fun fact: kamu itu sumber kebahagiaan terbesar aku, matchaa 🥹💗",
	"Ciee yang lagi buka daily tracker-nya~ Rajin banget matchaaku! 📋🩷",
	"Matchaa, kamu tahu ga? Kamu itu lebih manis dari gula 🍬💕",
	"Hari ini mau produktif atau rebahan? Dua-duanya valid kok, matchaa! 😴✨",
	"Kamu itu punya power yang ga kamu sadari, matchaa. Keep going! 💥🌸"
];
var greetingByTime = () => {
	const hour = (/* @__PURE__ */ new Date()).getHours();
	if (hour >= 5 && hour < 12) return {
		text: "Selamat Pagi",
		emoji: "🌅"
	};
	if (hour >= 12 && hour < 15) return {
		text: "Selamat Siang",
		emoji: "☀️"
	};
	if (hour >= 15 && hour < 18) return {
		text: "Selamat Sore",
		emoji: "🌇"
	};
	return {
		text: "Selamat Malam",
		emoji: "🌙"
	};
};
function WelcomeCard({ onDismiss }) {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [dismissing, setDismissing] = (0, import_react.useState)(false);
	const [message] = (0, import_react.useState)(() => sweetMessages[Math.floor(Math.random() * sweetMessages.length)]);
	const greeting = greetingByTime();
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setVisible(true), 150);
		return () => clearTimeout(timer);
	}, []);
	const handleDismiss = () => {
		setDismissing(true);
		setTimeout(() => {
			onDismiss?.();
		}, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `welcome-backdrop ${visible && !dismissing ? "show" : ""} ${dismissing ? "hide" : ""}`,
		onClick: handleDismiss
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `welcome-card-wrapper ${visible && !dismissing ? "show" : ""} ${dismissing ? "hide" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "welcome-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sparkle sparkle-1",
					children: "✦"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sparkle sparkle-2",
					children: "✧"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sparkle sparkle-3",
					children: "♡"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sparkle sparkle-4",
					children: "✦"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sparkle sparkle-5",
					children: "🌸"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "welcome-greeting",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "welcome-emoji",
						children: greeting.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [greeting.text, ","] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "welcome-name",
					children: "Dinda Sabrina Arianti"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "welcome-nickname",
					children: "~ matchaa ~"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "welcome-divider",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💌" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "welcome-message",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "welcome-btn",
					onClick: handleDismiss,
					children: "Makasih, sayang! 🩷"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "welcome-credit",
					children: [
						"— with love, from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hengky" }),
						" 💕"
					]
				})
			]
		})
	})] });
}
//#endregion
//#region src/components/TomorrowTaskSection.jsx
function TomorrowTaskSection({ tasks, onAdd, onDelete, onToast }) {
	const [input, setInput] = (0, import_react.useState)("");
	const [removingId, setRemovingId] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	const tomorrowObj = /* @__PURE__ */ new Date();
	tomorrowObj.setDate(tomorrowObj.getDate() + 1);
	const tomorrow = tomorrowObj.toLocaleDateString("en-CA");
	const planned = tasks.filter((t) => t.date === tomorrow && t.status === "pending");
	const handleAdd = async (e) => {
		e.preventDefault();
		const val = input.trim();
		if (!val) {
			inputRef.current?.focus();
			return;
		}
		setInput("");
		await onAdd(val, tomorrow);
		inputRef.current?.focus();
		onToast("Rencana besok dicatat! ✨", "success");
	};
	const handleDelete = async (id) => {
		setRemovingId(id);
		playPop();
		setTimeout(async () => {
			await onDelete(id);
			setRemovingId(null);
		}, 300);
	};
	const renderTask = (task) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `task-item ${removingId === task.id ? "removing" : ""}`,
			style: {
				background: "var(--glass)",
				backdropFilter: "blur(4px)",
				borderColor: "var(--border)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-accent-2 mr-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "task-text text-sm font-medium",
						style: { color: "var(--text)" },
						children: task.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleDelete(task.id),
					className: "flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110",
					style: { color: "var(--muted)" },
					"aria-label": "Delete task",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 14 14",
						fill: "none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M2 2L12 12M12 2L2 12",
							stroke: "currentColor",
							strokeWidth: "1.8",
							strokeLinecap: "round"
						})
					})
				})
			]
		}, task.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-5 mt-4",
		style: {
			background: "var(--glass)",
			backdropFilter: "blur(8px)",
			borderStyle: "dashed"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rencana Besok" }),
					planned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
						style: {
							background: "var(--accent-2)",
							color: "var(--text)"
						},
						children: [planned.length, " planned"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] mb-4 leading-relaxed",
				style: { color: "var(--muted)" },
				children: "Siapin apa yang mau kamu lakuin besok biar lebih semangat! Tugas ini bakal muncul otomatis di daftar harian pas besok tiba. ✨"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: handleAdd,
				className: "space-y-4 mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Ada rencana apa besok?..",
						className: "input-field",
						style: { fontSize: "0.85rem" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-primary flex-shrink-0 w-10 h-10 flex items-center justify-center p-0",
						"aria-label": "Add plan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "3",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "12",
								y1: "5",
								x2: "12",
								y2: "19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "5",
								y1: "12",
								x2: "19",
								y2: "12"
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: planned.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-4 text-center border border-dashed border-border rounded-xl opacity-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs italic",
						children: "Belum ada rencana nih.. 🌱"
					})
				}) : planned.map(renderTask)
			})
		]
	});
}
//#endregion
//#region src/components/ExpPopup.jsx
var EXP_QUOTES = [
	"Terus gasss matchaa! 🔥",
	"Keren banget! Keep going~ ✨",
	"EXP nambah! Semangat terus! 💪",
	"Ciee yang rajin banget 😍",
	"Satu langkah lebih dekat ke level up! 🚀",
	"Mantap jiwa matchaa! 🌟",
	"Gaskeun! Kamu amazing! 🎯",
	"Produktifnya overflow hari ini~ 📈",
	"On fire! Jangan berhenti! 🔥🔥",
	"Small wins, big impact! ⚡"
];
var LEVELUP_QUOTES = [
	"WOWWW LEVEL NAIK! Kamu memang the best, matchaa! 🏆",
	"LEVEL UP! Ga nyangka bisa secepet ini! 🎉🎉",
	"CONGRATULATIONS! Kamu terlalu keren, matchaa! 👑",
	"NAIK LEVEL! Api semangat kamu ga bisa dipadamkan! 🔥",
	"WOW LEVEL UP! Kamu ini bintang yang bersinar terang ya! ⭐",
	"AMAZING! Level baru, semangat baru, kamu makin keren! 🌈",
	"LEVEL UP BESTIE! Aku bangga sama kamu, matchaa! 🥰"
];
var LOSS_QUOTES = [
	"Oops... tapi gapapa, bangkit lagi! 💪",
	"Dih, minus... Yuk cari EXP lagi! 😤",
	"Tenang matchaa, ini cuma sementara~ 🌸",
	"EXP turun dikit, tapi kamu tetap hebat! 💕"
];
function useExpPopup() {
	const [popups, setPopups] = (0, import_react.useState)([]);
	const idRef = (0, import_react.useRef)(0);
	return {
		popups,
		showExpPopup: (0, import_react.useCallback)((amount, type = "exp", extraData = {}) => {
			const id = ++idRef.current;
			let quote, emoji, title;
			if (type === "levelup") {
				quote = LEVELUP_QUOTES[Math.floor(Math.random() * LEVELUP_QUOTES.length)];
				emoji = "🏆";
				title = `Level ${extraData.newLevel}!`;
			} else if (amount < 0) {
				quote = LOSS_QUOTES[Math.floor(Math.random() * LOSS_QUOTES.length)];
				emoji = "😢";
				title = `${amount} EXP`;
			} else {
				quote = EXP_QUOTES[Math.floor(Math.random() * EXP_QUOTES.length)];
				emoji = "🔥";
				title = `+${amount} EXP`;
			}
			const popup = {
				id,
				amount,
				type,
				quote,
				emoji,
				title,
				...extraData
			};
			setPopups((prev) => [...prev, popup]);
			setTimeout(() => {
				setPopups((prev) => prev.map((p) => p.id === id ? {
					...p,
					dismissing: true
				} : p));
				setTimeout(() => {
					setPopups((prev) => prev.filter((p) => p.id !== id));
				}, 500);
			}, type === "levelup" ? 4e3 : 2500);
			return id;
		}, [])
	};
}
function FireParticle({ delay, x, size, type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fire-particle ${type === "levelup" ? "fire-golden" : ""}`,
		style: {
			left: `${x}%`,
			animationDelay: `${delay}s`,
			width: `${size}px`,
			height: `${size}px`
		}
	});
}
function FloatingEmoji({ emoji, delay, x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "floating-emoji",
		style: {
			left: `${x}%`,
			animationDelay: `${delay}s`
		},
		children: emoji
	});
}
function ExpPopupCard({ popup }) {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const isLevelUp = popup.type === "levelup";
	const isLoss = popup.amount < 0;
	(0, import_react.useEffect)(() => {
		requestAnimationFrame(() => setEntered(true));
	}, []);
	const fireParticles = Array.from({ length: isLevelUp ? 14 : 8 }, (_, i) => ({
		delay: Math.random() * .8,
		x: 10 + Math.random() * 80,
		size: 4 + Math.random() * (isLevelUp ? 10 : 6)
	}));
	const floatingEmojis = isLevelUp ? [
		"🔥",
		"⭐",
		"🎉",
		"✨",
		"👑",
		"💥",
		"🌟",
		"🏆"
	] : isLoss ? ["💸", "😭"] : [
		"🔥",
		"⚡",
		"✨",
		"💪"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `exp-popup-overlay ${entered && !popup.dismissing ? "show" : ""} ${popup.dismissing ? "hide" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `exp-popup-card ${isLevelUp ? "level-up" : isLoss ? "loss" : "gain"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fire-container",
					children: fireParticles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FireParticle, {
						...p,
						type: popup.type
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "floating-emojis-container",
					children: floatingEmojis.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingEmoji, {
						emoji: e,
						delay: i * .15,
						x: 5 + i * (90 / floatingEmojis.length)
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `exp-popup-icon ${isLevelUp ? "mega-bounce" : "bounce-in"}`,
					children: popup.amount > 0 && !isLevelUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "semangat.svg",
						alt: "semangat",
						className: "w-20 h-20 mx-auto object-contain pointer-events-none drop-shadow-lg"
					}) : popup.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `exp-popup-title ${isLevelUp ? "golden-text" : isLoss ? "loss-text" : "fire-text"}`,
					children: popup.title
				}),
				isLevelUp && popup.levelTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "exp-popup-level-title",
					children: [
						"「 ",
						popup.levelTitle,
						" 」"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "exp-popup-quote",
					children: popup.quote
				}),
				isLevelUp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "exp-popup-progress",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "exp-popup-progress-fill" })
				})
			]
		})
	});
}
function ExpPopup({ popups }) {
	if (popups.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "exp-popup-container",
		children: popups.map((popup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpPopupCard, { popup }, popup.id))
	});
}
//#endregion
//#region src/hooks/useDebouncedLocalStorage.js
function useDebouncedLocalStorage(key, initialValue, delay = 500) {
	const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.warn(`Error reading localStorage key "${key}":`, error);
			return initialValue;
		}
	});
	const timeoutRef = (0, import_react.useRef)(null);
	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}, delay);
		} catch (e) {
			console.warn(`Error setting localStorage key "${key}":`, e);
		}
	};
	(0, import_react.useEffect)(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);
	return [storedValue, setValue];
}
//#endregion
//#region src/utils/levels.js
var TITLES = [
	"Newbie",
	"Curious",
	"Consistent",
	"Focused",
	"Productive",
	"Disciplined",
	"Dedicated",
	"Efficient",
	"Master",
	"Legend",
	"Elite",
	"Grandmaster",
	"Unstoppable",
	"Godlike",
	"Transcendent"
];
function getTitle(level) {
	return TITLES[Math.min(Math.floor((level - 1) / 5), TITLES.length - 1)];
}
var LEVELS = Array.from({ length: 100 }, (_, i) => {
	const level = i + 1;
	const minExp = i === 0 ? 0 : Math.round(i * 60 + Math.pow(i, 2.1) * 12);
	return {
		level,
		title: getTitle(level),
		minExp
	};
});
function getLevelInfo(exp) {
	let current = LEVELS[0];
	let next = LEVELS[1];
	for (let i = 0; i < LEVELS.length; i++) if (exp >= LEVELS[i].minExp) {
		current = LEVELS[i];
		next = LEVELS[i + 1] || null;
	} else break;
	const progress = next ? (exp - current.minExp) / (next.minExp - current.minExp) * 100 : 100;
	return {
		level: current.level,
		title: current.title,
		progress: Math.min(Math.round(progress), 100),
		currentExp: exp - current.minExp,
		expToNext: next ? next.minExp - current.minExp : 0,
		isMax: !next
	};
}
//#endregion
//#region src/hooks/useGameState.js
var PAP_KEY = "dlt_daily_pap";
var todayIso$1 = () => (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
function getYesterdayIso() {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() - 1);
	return d.toLocaleDateString("en-CA");
}
function didPapYesterday() {
	try {
		const raw = JSON.parse(localStorage.getItem(PAP_KEY));
		return raw?.date === getYesterdayIso() && raw?.done === true;
	} catch {
		return false;
	}
}
function didPapToday() {
	try {
		const raw = JSON.parse(localStorage.getItem(PAP_KEY));
		return raw?.date === todayIso$1() && raw?.done === true;
	} catch {
		return false;
	}
}
function useGameState() {
	const [exp, setExp] = useDebouncedLocalStorage("dlt_exp", 0, 300);
	const [streak, setStreak] = useDebouncedLocalStorage("dlt_streak", 0, 300);
	const [lastActive, setLastActive] = useDebouncedLocalStorage("dlt_lastActive", "", 300);
	const [streakBroke, setStreakBroke] = useLocalStorage("dlt_streakBroke", false);
	const levelInfo = getLevelInfo(exp);
	(0, import_react.useEffect)(() => {
		if (lastActive === todayIso$1()) return;
		if (lastActive === getYesterdayIso() && !didPapYesterday()) {
			setStreak(0);
			setStreakBroke(true);
		}
	}, []);
	const recordActivity = (0, import_react.useCallback)(() => {
		const today = todayIso$1();
		if (lastActive === today) return;
		if (lastActive === getYesterdayIso()) setStreak((s) => s + 1);
		else if (lastActive !== today) setStreak(1);
		setLastActive(today);
		setStreakBroke(false);
	}, [
		lastActive,
		setStreak,
		setLastActive,
		setStreakBroke
	]);
	return {
		exp,
		streak,
		levelInfo,
		addExp: (0, import_react.useCallback)((amount) => {
			setExp((e) => Math.max(0, Number(e) + amount));
			recordActivity();
		}, [setExp, recordActivity]),
		recordActivity,
		streakBroke,
		didPapToday,
		setExp,
		setStreak,
		setLastActive
	};
}
//#endregion
//#region src/config.js
var SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbw8-2AbmGPoBfgydESY6y4eR4ZPnIe3guHNwjYrEOeohwJdoIEbQ4I8lxAI2XOP-Aji1Q/exec";
//#endregion
//#region src/hooks/useSheetsAPI.js
var LS_TASKS = "dlt_tasks";
var LS_EXPENSES = "dlt_expenses";
var LS_PAP = "dlt_pap_history";
function lsGet(key) {
	try {
		return JSON.parse(localStorage.getItem(key)) || [];
	} catch {
		return [];
	}
}
function lsSet(key, val) {
	try {
		localStorage.setItem(key, JSON.stringify(val));
	} catch {}
}
function makeId() {
	return `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
function todayIso() {
	return (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
}
function compressImage(dataUrl, maxWidth = 600, quality = .6) {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () => {
			const canvas = document.createElement("canvas");
			const ratio = Math.min(maxWidth / img.width, maxWidth / img.height, 1);
			canvas.width = img.width * ratio;
			canvas.height = img.height * ratio;
			canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
			resolve(canvas.toDataURL("image/jpeg", quality));
		};
		img.src = dataUrl;
	});
}
async function sheetsRead(sheet) {
	const url = `${SHEETS_API_URL}?action=read&sheet=${sheet}&_t=${Date.now()}`;
	const text = await (await fetch(url)).text();
	return JSON.parse(text);
}
async function sheetsWrite(action, sheet, data) {
	const payload = {
		action,
		sheet,
		data
	};
	const text = await (await fetch(SHEETS_API_URL, {
		method: "POST",
		headers: { "Content-Type": "text/plain" },
		body: JSON.stringify(payload),
		redirect: "follow"
	})).text();
	return JSON.parse(text);
}
async function uploadPhotoToDrive(base64DataUrl, date) {
	const base64 = base64DataUrl.split(",")[1];
	const mimeMatch = base64DataUrl.match(/data:(.+?);/);
	const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
	console.log("[Drive] Starting upload, base64 length:", base64?.length ?? 0);
	try {
		const payload = {
			action: "upload_photo",
			photo: base64,
			date,
			mime
		};
		const res = await fetch(SHEETS_API_URL, {
			method: "POST",
			headers: { "Content-Type": "text/plain" },
			body: JSON.stringify(payload),
			redirect: "follow"
		});
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
		const text = await res.text();
		console.log("[Drive] Upload response:", text.slice(0, 300));
		try {
			const json = JSON.parse(text);
			if (json.photo_url) return json;
			if (json.error) return json;
			return { error: "Unknown response format from server" };
		} catch (e) {
			return { error: "Failed to parse server response: " + text.slice(0, 50) };
		}
	} catch (e) {
		console.error("[Drive] Upload failed:", e);
		return { error: "Connection failed: " + e.message };
	}
}
function useSheetsAPI() {
	const useSheets = Boolean(SHEETS_API_URL);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const fetchTasks = (0, import_react.useCallback)(async () => {
		const cached = lsGet(LS_TASKS);
		if (useSheets) try {
			setLoading(true);
			const remote = await sheetsRead("tasks");
			if (Array.isArray(remote) && remote.length > 0) {
				lsSet(LS_TASKS, remote);
				return remote;
			}
		} catch (e) {
			console.warn("[Sheets] fetchTasks failed, using localStorage:", e);
		} finally {
			setLoading(false);
		}
		return cached;
	}, [useSheets]);
	const addTask = (0, import_react.useCallback)(async (title, date) => {
		const taskDate = date || todayIso();
		const task = {
			id: makeId(),
			title,
			status: "pending",
			date: taskDate
		};
		lsSet(LS_TASKS, [task, ...lsGet(LS_TASKS)]);
		if (useSheets) sheetsWrite("insert", "tasks", task).catch((e) => console.warn("[Sheets] addTask failed:", e));
		return task;
	}, [useSheets]);
	const updateTask = (0, import_react.useCallback)(async (id, status) => {
		lsSet(LS_TASKS, lsGet(LS_TASKS).map((t) => t.id === id ? {
			...t,
			status
		} : t));
		if (useSheets) sheetsWrite("update", "tasks", {
			id,
			status
		}).catch((e) => console.warn("[Sheets] updateTask failed:", e));
	}, [useSheets]);
	const deleteTask = (0, import_react.useCallback)(async (id) => {
		lsSet(LS_TASKS, lsGet(LS_TASKS).filter((t) => t.id !== id));
		if (useSheets) sheetsWrite("delete", "tasks", { id }).catch((e) => console.warn("[Sheets] deleteTask failed:", e));
	}, [useSheets]);
	const fetchExpenses = (0, import_react.useCallback)(async () => {
		const cached = lsGet(LS_EXPENSES);
		if (useSheets) try {
			const remote = await sheetsRead("expenses");
			if (Array.isArray(remote) && remote.length > 0) {
				lsSet(LS_EXPENSES, remote);
				return remote;
			}
		} catch (e) {
			console.warn("[Sheets] fetchExpenses failed, using localStorage:", e);
		}
		return cached;
	}, [useSheets]);
	const addExpense = (0, import_react.useCallback)(async (name, amount) => {
		const expense = {
			id: makeId(),
			name,
			amount: Number(amount),
			date: todayIso()
		};
		lsSet(LS_EXPENSES, [expense, ...lsGet(LS_EXPENSES)]);
		if (useSheets) sheetsWrite("insert", "expenses", expense).catch((e) => console.warn("[Sheets] addExpense failed:", e));
		return expense;
	}, [useSheets]);
	const deleteExpense = (0, import_react.useCallback)(async (id) => {
		lsSet(LS_EXPENSES, lsGet(LS_EXPENSES).filter((e) => e.id !== id));
		if (useSheets) sheetsWrite("delete", "expenses", { id }).catch((e) => console.warn("[Sheets] deleteExpense failed:", e));
	}, [useSheets]);
	const addPapRecord = (0, import_react.useCallback)(async ({ date, status, timestamp, photoDataUrl }) => {
		const record = {
			id: makeId(),
			date,
			status,
			timestamp: timestamp || (/* @__PURE__ */ new Date()).toISOString(),
			photo_url: ""
		};
		const history = lsGet(LS_PAP);
		if (!history.find((p) => p.date === date)) lsSet(LS_PAP, [record, ...history]);
		if (useSheets && photoDataUrl) try {
			const uploadResult = await uploadPhotoToDrive(await compressImage(photoDataUrl, 600, .6), date);
			if (uploadResult.photo_url) {
				record.photo_url = uploadResult.photo_url;
				lsSet(LS_PAP, lsGet(LS_PAP).map((p) => p.date === date ? {
					...p,
					photo_url: record.photo_url
				} : p));
			}
		} catch (e) {
			console.warn("[Drive] Photo upload failed:", e);
		}
		if (useSheets) try {
			await sheetsWrite("insert", "pap", record);
			console.log("[Sheets] PAP record saved to cloud");
		} catch (e) {
			console.warn("[Sheets] addPapRecord failed:", e);
		}
		return record;
	}, [useSheets]);
	const fetchPapHistory = (0, import_react.useCallback)(async () => {
		if (!useSheets) return lsGet(LS_PAP);
		try {
			const remote = await sheetsRead("pap");
			if (Array.isArray(remote)) {
				const local = lsGet(LS_PAP);
				const map = /* @__PURE__ */ new Map();
				local.forEach((p) => map.set(p.date, p));
				remote.forEach((p) => {
					if (p.status === "done" && p.photo_url) map.set(p.date, p);
				});
				const merged = Array.from(map.values()).sort((a, b) => new Date(b.date) - new Date(a.date));
				lsSet(LS_PAP, merged);
				return merged;
			}
		} catch (e) {
			console.warn("[Sheets] fetchPapHistory failed:", e);
		}
		return lsGet(LS_PAP);
	}, [useSheets]);
	return {
		loading,
		fetchTasks,
		addTask,
		updateTask,
		deleteTask,
		fetchExpenses,
		addExpense,
		deleteExpense,
		addPapRecord,
		fetchTodayPap: (0, import_react.useCallback)(async () => {
			if (!useSheets) return null;
			try {
				const remote = await sheetsRead("pap");
				if (!Array.isArray(remote)) return null;
				const today = todayIso();
				const todayPap = [...remote].reverse().find((p) => p.date === today && p.status === "done" && p.photo_url && p.photo_url.length > 5);
				if (todayPap) {
					const history = lsGet(LS_PAP);
					if (!history.find((p) => p.date === today && p.photo_url)) lsSet(LS_PAP, [todayPap, ...history.filter((h) => h.date !== today)]);
					return todayPap;
				}
				return null;
			} catch (e) {
				console.warn("[Sheets] fetchTodayPap failed:", e);
				return null;
			}
		}, [useSheets]),
		fetchPapHistory,
		saveStreakToSheets: (0, import_react.useCallback)(async ({ date, streak_count, pap_done }) => {
			if (!useSheets) return;
			await sheetsWrite("insert", "streak", {
				date,
				streak_count,
				pap_done
			}).catch((e) => console.warn("[Sheets] saveStreak failed:", e));
		}, [useSheets]),
		fetchGameState: (0, import_react.useCallback)(async () => {
			if (!useSheets) return null;
			try {
				const remote = await sheetsRead("gameState");
				if (Array.isArray(remote) && remote.length > 0) {
					const result = [...remote].filter((r) => r.updated_at && !isNaN(new Date(r.updated_at).getTime())).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())[0] || remote[remote.length - 1];
					if (result && result.settings_json) try {
						result.settings = JSON.parse(result.settings_json);
					} catch (e) {
						console.warn("[Sheets] Failed to parse settings_json");
					}
					return result;
				}
			} catch (e) {
				console.warn("[Sheets] fetchGameState failed:", e);
			}
			return null;
		}, [useSheets]),
		updateGameState: (0, import_react.useCallback)(async ({ exp, streak, last_active, settings }) => {
			if (!useSheets) return;
			try {
				await sheetsWrite("insert", "gameState", {
					id: "user_state",
					exp,
					streak,
					last_active,
					settings_json: settings ? JSON.stringify(settings) : "",
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				});
			} catch (e) {
				console.warn("[Sheets] updateGameState failed:", e);
			}
		}, [useSheets])
	};
}
//#endregion
//#region src/hooks/useCurrentDate.js
/**
* useCurrentDate Hook
* 
* Memoize date calculations untuk menghindari recalculation setiap render.
* Update otomatis setiap menit.
* 
* BEFORE: 6x new Date() calls per render
* AFTER:  1x new Date() per minute
* 
* Performance Impact: ~40% reduction in date-related calculations
*/
function useCurrentDate() {
	const [date, setDate] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setDate(/* @__PURE__ */ new Date());
		}, 6e4);
		return () => clearInterval(interval);
	}, []);
	return (0, import_react.useMemo)(() => ({
		weekday: date.toLocaleDateString("id-ID", { weekday: "long" }),
		day: date.getDate(),
		month: date.toLocaleDateString("id-ID", { month: "long" }),
		monthYear: date.toLocaleDateString("id-ID", {
			month: "long",
			year: "numeric"
		}),
		isoDate: date.toLocaleDateString("en-CA"),
		timestamp: date.getTime(),
		raw: date
	}), [date]);
}
//#endregion
//#region src/components/ExpenseChart.jsx
function getDaysInMonth() {
	const now = /* @__PURE__ */ new Date();
	const year = now.getFullYear();
	const month = now.getMonth();
	const count = new Date(year, month + 1, 0).getDate();
	const days = [];
	for (let d = 1; d <= count; d++) {
		const day = String(d).padStart(2, "0");
		const mon = String(month + 1).padStart(2, "0");
		days.push(`${year}-${mon}-${day}`);
	}
	return days;
}
function getDateKey$1(dateStr) {
	if (!dateStr) return "";
	if (/^\d{4}-\d{2}-\d{2}/.test(String(dateStr))) return String(dateStr).slice(0, 10);
	try {
		return new Date(dateStr).toLocaleDateString("en-CA");
	} catch {
		return "";
	}
}
var MONTH_ID = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember"
];
function ExpenseChart({ expenses }) {
	const days = (0, import_react.useMemo)(() => getDaysInMonth(), []);
	const daily = (0, import_react.useMemo)(() => {
		const map = {};
		expenses.forEach((e) => {
			const k = getDateKey$1(e.date);
			if (!map[k]) map[k] = 0;
			map[k] += Number(e.amount || 0);
		});
		return days.map((d) => ({
			date: d,
			amount: map[d] || 0
		}));
	}, [expenses, days]);
	const maxAmount = Math.max(...daily.map((d) => d.amount), 1);
	const totalMonth = daily.reduce((s, d) => s + d.amount, 0);
	const avgDay = totalMonth / (daily.filter((d) => d.amount > 0).length || 1);
	const todayKey = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
	const todayIdx = days.indexOf(todayKey);
	const now = /* @__PURE__ */ new Date();
	const monthLabel = `${MONTH_ID[now.getMonth()]} ${now.getFullYear()}`;
	const chartH = 120;
	100 / days.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title mb-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📊" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grafik Pengeluaran" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-xs font-semibold px-2 py-0.5 rounded-full",
						style: {
							background: "var(--accent)",
							color: "var(--text)"
						},
						children: monthLabel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 mb-4 mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 rounded-xl px-3 py-2 text-center",
						style: {
							background: "var(--bg)",
							border: "1px solid var(--border)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-wider",
							style: { color: "var(--muted)" },
							children: "Total Bulan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold mt-0.5",
							style: { color: "var(--text)" },
							children: formatCurrency(totalMonth)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 rounded-xl px-3 py-2 text-center",
						style: {
							background: "var(--bg)",
							border: "1px solid var(--border)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-wider",
							style: { color: "var(--muted)" },
							children: "Rata-rata/Hari"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold mt-0.5",
							style: { color: "var(--text)" },
							children: formatCurrency(Math.round(avgDay))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 rounded-xl px-3 py-2 text-center",
						style: {
							background: "var(--bg)",
							border: "1px solid var(--border)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-wider",
							style: { color: "var(--muted)" },
							children: "Hari Boros"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-bold mt-0.5",
							style: { color: "#ef4444" },
							children: [daily.filter((d) => d.amount > avgDay && d.amount > 0).length, " hari"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					overflowX: "auto",
					overflowY: "visible"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						minWidth: `${days.length * 22}px`,
						position: "relative"
					},
					children: [avgDay > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						top: `${chartH - avgDay / maxAmount * chartH - 1}px`,
						left: 0,
						right: 0,
						borderTop: "1.5px dashed rgba(239,68,68,0.45)",
						zIndex: 1
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							alignItems: "flex-end",
							height: `${chartH}px`,
							gap: "2px",
							paddingBottom: "0"
						},
						children: daily.map((d, i) => {
							const h = d.amount > 0 ? Math.max(d.amount / maxAmount * chartH, 6) : 0;
							const isAbove = d.amount > avgDay && d.amount > 0;
							const isToday = i === todayIdx;
							const dayNum = parseInt(d.date.slice(8), 10);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									flex: "1",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "flex-end",
									height: `${chartH}px`,
									position: "relative",
									cursor: d.amount > 0 ? "pointer" : "default"
								},
								title: d.amount > 0 ? `${d.date}: ${formatCurrency(d.amount)}` : "",
								children: [
									d.amount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											position: "absolute",
											bottom: `${h + 4}px`,
											fontSize: "7px",
											fontWeight: "700",
											color: isAbove ? "#ef4444" : "var(--muted)",
											whiteSpace: "nowrap",
											lineHeight: 1
										},
										children: d.amount >= 1e6 ? `${(d.amount / 1e6).toFixed(1)}jt` : d.amount >= 1e3 ? `${Math.round(d.amount / 1e3)}k` : d.amount
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
										width: "100%",
										height: `${h}px`,
										borderRadius: "4px 4px 2px 2px",
										background: isToday ? "var(--success)" : isAbove ? "linear-gradient(180deg,#ef4444,#f97316)" : "linear-gradient(180deg, var(--accent-2), var(--accent))",
										transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
										boxShadow: isToday ? "0 0 8px rgba(34,197,94,0.4)" : "none"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "8px",
											fontWeight: isToday ? "800" : "500",
											color: isToday ? "var(--success)" : "var(--muted)",
											marginTop: "3px",
											lineHeight: 1
										},
										children: dayNum
									})
								]
							}, d.date);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mt-3 text-[10px]",
				style: { color: "var(--muted)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 10,
							height: 10,
							borderRadius: 3,
							background: "var(--accent-2)"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Normal" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 10,
							height: 10,
							borderRadius: 3,
							background: "#ef4444"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Di atas rata-rata" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 10,
							height: 10,
							borderRadius: 3,
							background: "var(--success)"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hari ini" })]
					})
				]
			}),
			totalMonth === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "empty-state mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl mb-2",
					children: "💸"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Belum ada pengeluaran bulan ini!",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Hemat banget nih 🎉"
				] })]
			})
		]
	});
}
//#endregion
//#region src/components/WeeklyReport.jsx
var WEEKLY_REPORT_KEY = "dlt_weekly_report_shown";
function getDateKey(dateStr) {
	if (!dateStr) return "";
	if (/^\d{4}-\d{2}-\d{2}/.test(String(dateStr))) return String(dateStr).slice(0, 10);
	try {
		return new Date(dateStr).toLocaleDateString("en-CA");
	} catch {
		return "";
	}
}
function getLast7Days() {
	const days = [];
	for (let i = 0; i < 7; i++) {
		const d = /* @__PURE__ */ new Date();
		d.setDate(d.getDate() - i);
		days.push(d.toLocaleDateString("en-CA"));
	}
	return days;
}
function useWeeklyReportTrigger() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if ((/* @__PURE__ */ new Date()).getDay() !== 1) return;
		if (localStorage.getItem(WEEKLY_REPORT_KEY) === (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA")) return;
		const t = setTimeout(() => setShow(true), 2e3);
		return () => clearTimeout(t);
	}, []);
	const dismiss = () => {
		const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
		localStorage.setItem(WEEKLY_REPORT_KEY, today);
		setShow(false);
	};
	return {
		show,
		setShow,
		dismiss
	};
}
function WeeklyReport({ tasks, expenses, streak, exp, onClose }) {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const overlayRef = (0, import_react.useRef)(null);
	const last7 = (0, import_react.useMemo)(() => getLast7Days(), []);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setVisible(true), 30);
		return () => clearTimeout(t);
	}, []);
	const handleClose = () => {
		setVisible(false);
		setTimeout(onClose, 350);
	};
	const weekTasks = (0, import_react.useMemo)(() => tasks.filter((t) => last7.includes(getDateKey(t.date))), [tasks, last7]);
	const doneTasks = weekTasks.filter((t) => t.status === "done");
	const totalSpend = (0, import_react.useMemo)(() => expenses.filter((e) => last7.includes(getDateKey(e.date))), [expenses, last7]).reduce((s, e) => s + Number(e.amount || 0), 0);
	const papDays = (0, import_react.useMemo)(() => {
		try {
			const history = JSON.parse(localStorage.getItem("dlt_pap_history") || "[]");
			return last7.filter((d) => history.some((p) => getDateKey(p.date) === d && p.status === "done")).length;
		} catch {
			return 0;
		}
	}, [last7]);
	const taskRate = weekTasks.length > 0 ? Math.round(doneTasks.length / weekTasks.length * 100) : 0;
	const stats = [
		{
			icon: "📋",
			label: "Task Selesai",
			value: `${doneTasks.length}/${weekTasks.length}`,
			sub: taskRate === 100 ? "Sempurna! 🌟" : taskRate > 50 ? "Lumayan nih!" : "Ayo semangat!",
			color: taskRate === 100 ? "var(--success)" : taskRate > 50 ? "#f97316" : "#ef4444"
		},
		{
			icon: "💸",
			label: "Total Belanja",
			value: formatCurrency(totalSpend),
			sub: totalSpend > 5e5 ? "Agak boros nih~ 😬" : "Cukup hemat! 💪",
			color: totalSpend > 5e5 ? "#ef4444" : "var(--success)"
		},
		{
			icon: "📸",
			label: "PAP Konsisten",
			value: `${papDays}/7 hari`,
			sub: papDays === 7 ? "Streak queen! 👑" : papDays >= 5 ? "Bagus banget!" : "Tambahin lagi ya~",
			color: papDays === 7 ? "var(--success)" : papDays >= 5 ? "#f97316" : "#ef4444"
		},
		{
			icon: "⚡",
			label: "Total EXP",
			value: `${exp} EXP`,
			sub: "Keep it up! 🔥",
			color: "var(--accent-2)"
		}
	];
	const from = /* @__PURE__ */ new Date();
	from.setDate(from.getDate() - 7);
	const to = /* @__PURE__ */ new Date();
	to.setDate(to.getDate() - 1);
	const fmt = (d) => d.toLocaleDateString("id-ID", {
		day: "numeric",
		month: "short"
	});
	const rangeLabel = `${fmt(from)} – ${fmt(to)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: overlayRef,
		className: `history-backdrop ${visible ? "show" : ""}`,
		onClick: handleClose,
		style: { zIndex: 200 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `history-modal ${visible ? "show" : ""}`,
		style: {
			maxWidth: 600,
			width: "95%",
			zIndex: 201
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "history-modal-header",
			style: { padding: "20px 24px" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl",
					children: "📊"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-sm",
					style: { color: "var(--text)" },
					children: "Laporan Mingguan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] mt-0.5",
					style: { color: "var(--muted)" },
					children: rangeLabel
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "history-close-btn",
				onClick: handleClose,
				"aria-label": "Tutup",
				children: "✕"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				padding: "16px",
				overflowY: "auto",
				maxHeight: "70vh"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl px-4 py-3 mb-4 text-center",
					style: {
						background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(99,102,241,0.1))",
						border: "1.5px solid var(--border)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl mb-1",
							children: papDays === 7 ? "👑" : taskRate === 100 ? "🌟" : "🌿"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-sm",
							style: { color: "var(--text)" },
							children: papDays === 7 ? "Luar biasa! Konsisten banget minggu ini!" : doneTasks.length > 0 ? "Minggu yang produktif!" : "Yuk lebih semangat minggu depannya!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs mt-1",
							style: { color: "var(--muted)" },
							children: "Rekap 7 hari terakhir kamu~"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 mb-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-3",
						style: {
							background: "var(--bg)",
							border: "1px solid var(--border)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl mb-1",
								children: s.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-wider",
								style: { color: "var(--muted)" },
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-bold mt-0.5",
								style: { color: s.color },
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] mt-0.5",
								style: { color: "var(--muted)" },
								children: s.sub
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-wider mb-2",
						style: { color: "var(--muted)" },
						children: "Progres 7 Hari Terakhir"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-between gap-1 h-32 bg-accent/10 rounded-2xl p-4 border border-border",
						children: [...last7].reverse().map((day, idx) => {
							const dayTasks = tasks.filter((t) => getDateKey(t.date) === day);
							const dayDone = dayTasks.filter((t) => t.status === "done").length;
							const height = dayTasks.length > 0 ? dayDone / Math.max(...last7.map((d) => tasks.filter((t) => getDateKey(t.date) === d).length || 1)) * 100 : 0;
							const isToday = day === (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center group relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full rounded-t-lg transition-all duration-500",
										style: {
											height: `${Math.max(height, 5)}%`,
											background: isToday ? "var(--success)" : "var(--accent-2)",
											opacity: dayTasks.length > 0 ? 1 : .2
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] mt-2 font-bold",
										style: { color: isToday ? "var(--success)" : "var(--muted)" },
										children: new Date(day).toLocaleDateString("id-ID", { weekday: "narrow" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-full mb-2 bg-text text-bg text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10",
										children: [dayDone, " Task Selesai"]
									})
								]
							}, day);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl px-4 py-4 text-center shadow-sm",
					style: {
						background: "var(--accent)",
						border: "1.5px solid var(--accent-2)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						style: { color: "var(--text)" },
						children: streak > 0 ? `🔥 Streak kamu ${streak} hari! Jangan putus ya~` : "💪 Mulai streak baru minggu ini, pasti bisa!"
					})
				})
			]
		})]
	})] });
}
//#endregion
//#region src/components/SettingsModal.jsx
var SettingsModal_default = (0, import_react.memo)(function SettingsModal({ settings, setSettings, onClose, onToast }) {
	const [localSettings, setLocalSettings] = (0, import_react.useState)(settings);
	const [animate, setAnimate] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setAnimate(true), 10);
		return () => clearTimeout(timer);
	}, []);
	const handleSave = () => {
		setSettings(localSettings);
		playPop();
		onToast("Pengaturan disimpan! ✨", "success");
		handleClose();
	};
	const handleClose = () => {
		setAnimate(false);
		setTimeout(onClose, 300);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[12000] flex items-center justify-center p-4 transition-all duration-300 ${animate ? "opacity-100" : "opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
			onClick: handleClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative w-full max-w-sm card p-6 transition-all duration-500 transform ${animate ? "translate-y-0 scale-100" : "translate-y-12 scale-90"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-title mb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚙️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pengaturan" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleClose,
						className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
						style: { color: "var(--muted)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 14 14",
							fill: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M2 2L12 12M12 2L2 12",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold px-1 uppercase tracking-wider",
								style: { color: "var(--muted)" },
								children: "Batas Harian (IDR)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								value: localSettings.daily || 0,
								onChange: (e) => {
									const v = parseInt(e.target.value) || 0;
									setLocalSettings({
										...localSettings,
										daily: Math.max(0, v)
									});
								},
								className: "input-field",
								placeholder: "100000"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold px-1 uppercase tracking-wider",
								style: { color: "var(--muted)" },
								children: "Batas Mingguan (IDR)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								value: localSettings.weekly || 0,
								onChange: (e) => {
									const v = parseInt(e.target.value) || 0;
									setLocalSettings({
										...localSettings,
										weekly: Math.max(0, v)
									});
								},
								className: "input-field",
								placeholder: "700000"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold px-1 uppercase tracking-wider",
								style: { color: "var(--muted)" },
								children: "Batas Bulanan (IDR)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								value: localSettings.monthly || 0,
								onChange: (e) => {
									const v = parseInt(e.target.value) || 0;
									setLocalSettings({
										...localSettings,
										monthly: Math.max(0, v)
									});
								},
								className: "input-field"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleClose,
						className: "flex-1 py-3 rounded-xl font-semibold text-sm transition-all",
						style: {
							border: "1px solid var(--border)",
							color: "var(--muted)",
							background: "var(--bg)"
						},
						children: "Batal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSave,
						className: "flex-1 btn-primary",
						children: "Simpan ✨"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 pt-4 border-t border-dashed",
					style: { borderColor: "var(--border)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-center italic",
						style: { color: "var(--muted)" },
						children: "Gunakan angka saja tanpa titik/koma (contoh: 200000)"
					})
				})
			]
		})]
	});
});
//#endregion
//#region src/components/DeskBuddy.jsx
var MESSAGES = [
	"Hallo Matchaaawww 😆💖",
	"Matcha lagi ngapain nih? 👀",
	"Semangat ya hari ini Matcha 💪✨",
	"Jangan lupa makan yaa 🍽️",
	"Machii kangen Matcha 😽"
];
var BASE = "/daily-life-tracker/";
/**
* Throttle helper function
* Limits function calls to once per specified delay
*/
function throttle(func, delay) {
	let lastCall = 0;
	return function(...args) {
		const now = Date.now();
		if (now - lastCall < delay) return;
		lastCall = now;
		func(...args);
	};
}
var CHARACTER_CONFIG = {
	cat: {
		id: "cat",
		name: "Machii",
		actions: {
			idle: {
				type: "gif",
				src: `${BASE}assets/machii_diem.gif`,
				size: 100
			},
			walk: {
				type: "gif",
				src: `${BASE}assets/machii_jalan.gif`,
				size: 100
			},
			interact: {
				type: "gif",
				src: `${BASE}assets/machii_happy.gif`,
				size: 100
			}
		}
	},
	human: {
		id: "human",
		name: "Machii",
		actions: {
			idle: {
				type: "gif",
				src: `${BASE}assets/machii_game.gif`,
				size: 100
			},
			walk: {
				type: "gif",
				src: `${BASE}assets/machii_gerak.gif`,
				size: 100
			},
			interact: {
				type: "gif",
				src: `${BASE}assets/machii_hai.gif`,
				size: 100
			}
		}
	}
};
function DeskBuddy({ tasksCompletedToday = 0, darkMode = false, currentCharacter = "cat" }) {
	const [currentAction, setCurrentAction] = (0, import_react.useState)("idle");
	const [activeMessage, setActiveMessage] = (0, import_react.useState)(null);
	const [offsetX, setOffsetX] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const [lookAt, setLookAt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const isWalkingRef = (0, import_react.useRef)(false);
	const containerRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	const lastMsgIdxRef = (0, import_react.useRef)(-1);
	const messageTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (tasksCompletedToday > 0) triggerInteract();
	}, [tasksCompletedToday]);
	(0, import_react.useEffect)(() => {
		let mouseX = 0;
		let mouseY = 0;
		const handleMouseMove = throttle((e) => {
			if (isWalkingRef.current) return;
			mouseX = e.clientX;
			mouseY = e.clientY;
		}, 33);
		const updateEyes = () => {
			if (!containerRef.current || isWalkingRef.current) {
				rafRef.current = requestAnimationFrame(updateEyes);
				return;
			}
			const rect = containerRef.current.getBoundingClientRect();
			const catX = rect.left + rect.width / 2;
			const catY = rect.top + rect.height / 2;
			const angleX = (mouseX - catX) / 100;
			const angleY = (mouseY - catY) / 100;
			const newX = Math.max(-8, Math.min(8, angleX * 5));
			const newY = Math.max(-5, Math.min(5, angleY * 5));
			setLookAt((prev) => {
				if (Math.abs(prev.x - newX) > .5 || Math.abs(prev.y - newY) > .5) return {
					x: newX,
					y: newY
				};
				return prev;
			});
			rafRef.current = requestAnimationFrame(updateEyes);
		};
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		rafRef.current = requestAnimationFrame(updateEyes);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);
	const triggerInteract = (0, import_react.useCallback)((isClick = false) => {
		setCurrentAction("interact");
		if (currentCharacter === "cat") playMeow();
		else playMachiiSuara();
		if (isClick) {
			let nextIdx = Math.floor(Math.random() * MESSAGES.length);
			if (nextIdx === lastMsgIdxRef.current) nextIdx = (nextIdx + 1) % MESSAGES.length;
			lastMsgIdxRef.current = nextIdx;
			setActiveMessage(MESSAGES[nextIdx]);
			if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
			messageTimeoutRef.current = setTimeout(() => {
				setActiveMessage(null);
			}, 3e3);
		}
		const duration = CHARACTER_CONFIG[currentCharacter].actions.interact.type === "sprite" ? 600 : 1200;
		setTimeout(() => {
			if (!isWalkingRef.current) setCurrentAction("idle");
			else setCurrentAction("walk");
		}, duration);
	}, [currentCharacter]);
	(0, import_react.useEffect)(() => {
		const paceTimer = setInterval(() => {
			if (Math.random() > .6 && currentAction === "idle" && !isWalkingRef.current) startPacing();
		}, 12e3);
		return () => clearInterval(paceTimer);
	}, [currentAction]);
	const startPacing = () => {
		if (isWalkingRef.current) return;
		isWalkingRef.current = true;
		setLookAt({
			x: 0,
			y: 0
		});
		const walkRight = Math.random() > .5;
		const dist = window.innerWidth < 640 ? 60 : 350;
		const targetX = walkRight ? dist : -dist;
		setDirection(walkRight ? 1 : -1);
		setCurrentAction("walk");
		setTimeout(() => {
			setOffsetX(targetX);
		}, 50);
		setTimeout(() => {
			setDirection(walkRight ? -1 : 1);
			setTimeout(() => {
				setOffsetX(0);
				setTimeout(() => {
					isWalkingRef.current = false;
					setCurrentAction("idle");
					setDirection(1);
				}, 5e3);
			}, 100);
		}, 6e3);
	};
	const currentConfig = CHARACTER_CONFIG[currentCharacter];
	let actionConfig = currentConfig.actions[currentAction];
	if (currentCharacter === "cat" && currentAction === "idle" && darkMode) actionConfig = {
		...actionConfig,
		src: `${BASE}assets/machii_tidur.gif`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "flex flex-col items-center pointer-events-auto relative z-[100] mt-4 mb-2 md:mt-8 md:mb-4 transition-all duration-300 scale-90 md:scale-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative transition-transform",
			style: {
				transform: `translateX(${offsetX}px)`,
				transitionDuration: currentAction === "walk" ? "5s" : "0.4s",
				transitionTimingFunction: "linear"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { transform: `scaleX(${direction})` },
				children: [
					activeMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "machii-chat-bubble",
						style: { transform: `scaleX(${direction})` },
						children: activeMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "machii-name-tag absolute -top-4 flex justify-center w-full z-10 pointer-events-none transition-transform duration-200",
						style: { transform: `scaleX(${direction}) translate(${lookAt.x * .5}px, ${lookAt.y * .5}px)` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "machii-name-text",
							children: currentConfig.name
						})
					}),
					actionConfig.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						className: `machii-sprite dynamic filter drop-shadow-md cursor-pointer transition-all duration-300 ${currentAction === "interact" ? "scale-110" : ""}`,
						style: {
							transform: `translate(${lookAt.x}px, ${lookAt.y}px)`,
							width: actionConfig.size || 100,
							height: actionConfig.size || 100,
							objectFit: "contain"
						},
						onClick: () => triggerInteract(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: actionConfig.src,
							type: "video/mp4"
						})
					}, `${currentCharacter}-${currentAction}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `machii-sprite dynamic filter drop-shadow-md cursor-pointer transition-all duration-300 ${currentAction === "interact" ? "scale-110" : ""}`,
						style: {
							transform: `translate(${lookAt.x}px, ${lookAt.y}px)`,
							backgroundImage: `url(${actionConfig.src})`,
							width: actionConfig.sizeX || actionConfig.size || 100,
							height: actionConfig.sizeY || actionConfig.size || 100,
							backgroundSize: actionConfig.type === "sprite" ? `${(actionConfig.sizeX || 100) * actionConfig.frames}px ${actionConfig.sizeY || 100}px` : "contain",
							backgroundPosition: "center bottom",
							animation: actionConfig.type === "sprite" ? `sprite${currentAction} ${actionConfig.duration} steps(${actionConfig.frames}) infinite` : "none"
						},
						onClick: () => triggerInteract(true)
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes spriteinteract {
          from { background-position-x: 0; }
          to { background-position-x: -${(actionConfig.sizeX || 100) * (actionConfig.frames || 1)}px; }
        }
      ` })]
	});
}
//#endregion
//#region src/components/AuraEffect.jsx
function AuraEffect({ level = 1 }) {
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setActive(true);
		const timer = setTimeout(() => setActive(false), 3e3);
		return () => clearTimeout(timer);
	}, [level]);
	let auraClass = "";
	if (level >= 20) auraClass = "aura-level-20";
	else if (level >= 10) auraClass = "aura-level-10";
	else if (level >= 5) auraClass = "aura-level-5";
	if (!auraClass) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `aura-container ${active ? "opacity-100" : "opacity-40"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `aura-glow ${auraClass}` })
	});
}
//#endregion
//#region src/components/ScrapbookModal.jsx
function ScrapbookModal({ onClose, papRecords = [], onRefresh }) {
	const [animate, setAnimate] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setAnimate(true), 10);
		return () => clearTimeout(timer);
	}, []);
	const handleClose = () => {
		setAnimate(false);
		setTimeout(onClose, 300);
	};
	const handleRefresh = async () => {
		if (!onRefresh || refreshing) return;
		setRefreshing(true);
		await onRefresh();
		setRefreshing(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[12000] flex items-center justify-center p-4 transition-all duration-300 ${animate ? "opacity-100" : "opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/60 backdrop-blur-md",
			onClick: handleClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative w-full max-w-4xl bg-white dark:bg-[#252320] rounded-[2rem] p-5 md:p-8 shadow-2xl overflow-hidden transition-all duration-500 transform ${animate ? "translate-y-0 scale-100" : "translate-y-12 scale-90"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6 md:mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl md:text-3xl font-black italic tracking-tighter truncate",
							style: { color: "var(--text)" },
							children: "BUKU KENANGAN 📒"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] md:text-sm font-medium truncate",
							style: { color: "var(--muted)" },
							children: "Koleksi momen cantik Matchaa harian~"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 md:gap-3 ml-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleRefresh,
							disabled: refreshing,
							className: `w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:scale-110 transition-all ${refreshing ? "animate-spin" : ""}`,
							style: { color: "var(--text)" },
							title: "Refresh / Sinkronisasi Ulang",
							children: "🔄"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleClose,
							className: "w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:scale-110 transition-all",
							style: { color: "var(--text)" },
							children: "✕"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 max-h-[60vh] md:max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar",
					children: papRecords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full py-12 md:py-20 text-center text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl md:text-4xl mb-4 block",
								children: "📸"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm md:text-base",
								children: "Belum ada foto yang tersimpan nih~"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] md:text-xs mt-1",
								children: "Ayo absen hari ini buat mulai koleksi!"
							})
						]
					}) : papRecords.map((rc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-[#F8F5F0] dark:bg-[#1C1A17] p-2 pb-8 rounded-lg shadow-lg rotate-[-2deg] transition-all hover:rotate-0 hover:scale-105 hover:z-10",
						style: { border: "1px solid var(--border)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square bg-black/5 rounded-sm overflow-hidden mb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: rc.photo_url,
									alt: `Absen ${rc.date}`,
									className: "w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold text-center uppercase tracking-widest leading-none opacity-60",
								children: new Date(rc.date).toLocaleDateString("id-ID", {
									day: "numeric",
									month: "short"
								})
							}),
							idx % 3 === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-2 -right-2 text-2xl rotate-12 drop-shadow-md",
								children: "✨"
							}),
							idx % 4 === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-1 -left-1 text-2xl -rotate-12 drop-shadow-md",
								children: "🏎️"
							})
						]
					}, idx))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 pt-6 border-t border-dashed",
					style: { borderColor: "var(--border)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-center italic",
						style: { color: "var(--muted)" },
						children: "\"Setiap foto adalah bukti kamu semangat hari ini!\" — Machii 🐱"
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/InteractiveTrails.jsx
var PARTICLE_LIFETIME = 1500;
var MAX_PARTICLES = 15;
function InteractiveTrails() {
	const [particles, setParticles] = (0, import_react.useState)([]);
	const lastPos = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const handleMove = (e) => {
			const x = e.clientX || e.touches && e.touches[0].clientX;
			const y = e.clientY || e.touches && e.touches[0].clientY;
			if (!x || !y) return;
			if (Math.sqrt(Math.pow(x - lastPos.current.x, 2) + Math.pow(y - lastPos.current.y, 2)) > 30) {
				lastPos.current = {
					x,
					y
				};
				const id = Math.random().toString(36).substring(2, 9);
				const newParticle = {
					id,
					x,
					y,
					type: Math.random() > .5 ? "leaf" : "flower",
					size: Math.random() * 15 + 10,
					rotation: Math.random() * 360,
					birth: Date.now()
				};
				setParticles((prev) => {
					const updated = [...prev, newParticle];
					if (updated.length > MAX_PARTICLES) return updated.slice(1);
					return updated;
				});
				setTimeout(() => {
					setParticles((prev) => prev.filter((p) => p.id !== id));
				}, PARTICLE_LIFETIME);
			}
		};
		window.addEventListener("mousemove", handleMove);
		window.addEventListener("touchmove", handleMove);
		return () => {
			window.removeEventListener("mousemove", handleMove);
			window.removeEventListener("touchmove", handleMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none z-[9999] overflow-hidden",
		children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute transition-opacity duration-1000 ease-out animate-trail-float",
			style: {
				left: p.x,
				top: p.y,
				width: p.size,
				height: p.size,
				transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
				opacity: 1,
				"--tx": `${(Math.random() - .5) * 40}px`,
				"--ty": `${20 + Math.random() * 40}px`
			},
			children: p.type === "leaf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "var(--success)",
				opacity: "0.6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm opacity-60",
				children: "🌸"
			})
		}, p.id))
	});
}
//#endregion
//#region src/components/EmoteReaction.jsx
var EMOTES = [
	"💖",
	"😆",
	"🎉",
	"😺",
	"✨",
	"💅",
	"😭",
	"🔥",
	"🌈",
	"🦄"
];
function EmoteReaction({ onAddExp }) {
	const [activeEmotes, setActiveEmotes] = (0, import_react.useState)([]);
	const lastClickRef = (0, import_react.useRef)(0);
	const handleSpam = (0, import_react.useCallback)(() => {
		const now = Date.now();
		if (now - lastClickRef.current < 100) return;
		lastClickRef.current = now;
		playRandomEmoteSound();
		if (onAddExp) onAddExp(1);
		const id = Math.random().toString(36).substr(2, 9);
		const emoji = EMOTES[Math.floor(Math.random() * EMOTES.length)];
		const driftX = (Math.random() - .5) * 80;
		const angle = (Math.random() - .5) * 40;
		const duration = 1 + Math.random();
		const newEmote = {
			id,
			emoji,
			driftX,
			angle,
			duration
		};
		setActiveEmotes((prev) => [...prev, newEmote]);
		setTimeout(() => {
			setActiveEmotes((prev) => prev.filter((e) => e.id !== id));
		}, duration * 1e3);
	}, [onAddExp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "action-dock-item emote-dock",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "emote-layer",
			children: activeEmotes.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "floating-emote",
				style: {
					"--drift-x": `${e.driftX}px`,
					"--angle": `${e.angle}`,
					"--anim-duration": `${e.duration}s`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "floating-emote-exp",
					children: "+1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.emoji })]
			}, e.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: handleSpam,
			className: "dock-btn",
			"aria-label": "Send Emote Reaction",
			title: "Spam for +1 EXP!",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hover:scale-125 transition-transform duration-300",
				children: "😆"
			})
		})]
	});
}
//#endregion
//#region src/components/StickerManager.jsx
var STICKER_ASSETS = [
	{
		id: "matcha_leaf",
		src: "assets/stickers/matcha_leaf.png",
		label: "Matcha Leaf"
	},
	{
		id: "pink_heart",
		src: "assets/stickers/pink_heart.png",
		label: "Pink Heart"
	},
	{
		id: "cat_head",
		src: "assets/stickers/cat_head.png",
		label: "Cat Head"
	},
	{
		id: "matcha_cup",
		src: "assets/stickers/matcha_cup.png",
		label: "Matcha Cup"
	},
	{
		id: "yellow_star",
		src: "assets/stickers/yellow_star.png",
		label: "Star"
	},
	{
		id: "bunga",
		src: "assets/stickers/bunga.png",
		label: "Bunga"
	},
	{
		id: "cantik",
		src: "assets/stickers/cantik.jpeg",
		label: "Cantik"
	},
	{
		id: "favorit",
		src: "assets/stickers/favorit.jpeg",
		label: "Favorit"
	},
	{
		id: "gemes",
		src: "assets/stickers/gemes.png",
		label: "Gemes"
	},
	{
		id: "hadiah",
		src: "assets/stickers/hadiah.png",
		label: "Hadiah"
	},
	{
		id: "hah",
		src: "assets/stickers/hah.png",
		label: "Hah"
	},
	{
		id: "hati",
		src: "assets/stickers/hati.png",
		label: "Hati"
	},
	{
		id: "hmph",
		src: "assets/stickers/hmph.png",
		label: "Hmph"
	},
	{
		id: "keren",
		src: "assets/stickers/keren.png",
		label: "Keren"
	},
	{
		id: "makan",
		src: "assets/stickers/makan.png",
		label: "Makan"
	},
	{
		id: "matcha",
		src: "assets/stickers/matcha.png",
		label: "Matcha"
	},
	{
		id: "miaw",
		src: "assets/stickers/miaw.png",
		label: "Miaw"
	},
	{
		id: "oke",
		src: "assets/stickers/oke.png",
		label: "Oke"
	},
	{
		id: "sedih",
		src: "assets/stickers/sedih.png",
		label: "Sedih"
	},
	{
		id: "semangat2",
		src: "assets/stickers/semangat2.png",
		label: "Semangat"
	}
];
function StickerManager({ stickers = [], setStickers }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [draggingId, setDraggingId] = (0, import_react.useState)(null);
	const dragOffset = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const addSticker = (asset) => {
		const newSticker = {
			id: Date.now().toString(),
			assetId: asset.id,
			src: asset.src,
			x: window.innerWidth / 2 + window.scrollX - 40 + (Math.random() * 40 - 20),
			y: window.innerHeight / 2 + window.scrollY - 40 + (Math.random() * 40 - 20),
			scale: 1,
			rotation: Math.random() * 20 - 10
		};
		setStickers((prev) => [...prev, newSticker]);
		setIsOpen(false);
	};
	const handleDragStart = (e, id) => {
		e.preventDefault();
		const touch = e.touches ? e.touches[0] : e;
		const sticker = stickers.find((s) => s.id === id);
		if (!sticker) return;
		dragOffset.current = {
			x: touch.pageX - sticker.x,
			y: touch.pageY - sticker.y
		};
		setDraggingId(id);
	};
	const handleMove = (0, import_react.useCallback)((e) => {
		if (!draggingId) return;
		const touch = e.touches ? e.touches[0] : e;
		setStickers((prev) => prev.map((s) => {
			if (s.id === draggingId) return {
				...s,
				x: touch.pageX - dragOffset.current.x,
				y: touch.pageY - dragOffset.current.y
			};
			return s;
		}));
	}, [draggingId]);
	const handleEnd = (0, import_react.useCallback)(() => {
		setDraggingId(null);
	}, []);
	(0, import_react.useEffect)(() => {
		if (draggingId) {
			window.addEventListener("mousemove", handleMove);
			window.addEventListener("mouseup", handleEnd);
			window.addEventListener("touchmove", handleMove);
			window.addEventListener("touchend", handleEnd);
		}
		return () => {
			window.removeEventListener("mousemove", handleMove);
			window.removeEventListener("mouseup", handleEnd);
			window.removeEventListener("touchmove", handleMove);
			window.removeEventListener("touchend", handleEnd);
		};
	}, [
		draggingId,
		handleMove,
		handleEnd
	]);
	const removeSticker = (id) => {
		setStickers((prev) => prev.filter((s) => s.id !== id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 left-0 w-full h-full pointer-events-none z-[110] overflow-hidden",
			style: { minHeight: "100vh" },
			children: stickers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute pointer-events-auto cursor-move group",
				style: {
					left: s.x,
					top: s.y,
					transform: `rotate(${s.rotation}deg) scale(${s.scale})`,
					width: "80px",
					height: "80px",
					userSelect: "none",
					touchAction: "none"
				},
				onMouseDown: (e) => handleDragStart(e, s.id),
				onTouchStart: (e) => handleDragStart(e, s.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.src,
					alt: "sticker",
					className: "w-full h-full object-contain pointer-events-none drop-shadow-sm select-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10",
					onClick: (e) => {
						e.stopPropagation();
						removeSticker(s.id);
					},
					children: "❌"
				})]
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "action-dock-item sticker-dock",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "dock-btn",
				onClick: () => setIsOpen(!isOpen),
				"aria-label": "Buka Buku Stiker",
				title: "Buka Buku Stiker",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hover:scale-125 transition-transform duration-300",
					children: "🎨"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `fixed bottom-24 left-6 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 z-[120] transition-all duration-300 w-48 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`,
			style: {
				background: "var(--card)",
				borderColor: "var(--border)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold mb-3 text-center uppercase tracking-widest",
				style: { color: "var(--muted)" },
				children: "Sticker Book"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1",
				children: STICKER_ASSETS.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "p-2 border border-transparent hover:border-accent rounded-xl hover:bg-accent/10 transition-all flex flex-col items-center gap-1",
					onClick: () => addSticker(asset),
					title: asset.label,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: asset.src,
						alt: asset.label,
						className: "w-12 h-12 object-contain"
					})
				}, asset.id))
			})]
		})
	] });
}
//#endregion
//#region src/App.jsx
var SkyEffects = (0, import_react.lazy)(() => __vitePreload(() => import("./SkyEffects-CW0NgKKl.js"), __vite__mapDeps([2,1,0])));
var FloatingDecorations = (0, import_react.lazy)(() => __vitePreload(() => import("./FloatingDecorations-D7Xjl6DT.js"), __vite__mapDeps([3,0,1])));
function App() {
	console.log("🚀 App initializing...");
	const [darkMode, setDarkMode] = useDebouncedLocalStorage("dlt_dark", false, 1e3);
	const [theme, setTheme] = useDebouncedLocalStorage("dlt_theme", "matcha", 1e3);
	const [currentCharacter, setCurrentCharacter] = useDebouncedLocalStorage("dlt_character", "cat", 1e3);
	const handleSwitchCharacter = (0, import_react.useCallback)(() => {
		setCurrentCharacter((prev) => prev === "cat" ? "human" : "cat");
	}, [setCurrentCharacter]);
	const currentDate = useCurrentDate();
	const [showWelcome, setShowWelcome] = (0, import_react.useState)(true);
	const [showHistory, setShowHistory] = (0, import_react.useState)(false);
	const [showSettings, setShowSettings] = (0, import_react.useState)(false);
	const [showScrapbook, setShowScrapbook] = (0, import_react.useState)(false);
	const [settings, setSettings] = useDebouncedLocalStorage("dlt_settings", {
		daily: 1e5,
		weekly: 7e5,
		monthly: 2e6,
		stickers: []
	}, 1e3);
	const handleUpdateStickers = (0, import_react.useCallback)((updater) => {
		setSettings((prev) => ({
			...prev,
			stickers: typeof updater === "function" ? updater(prev.stickers || []) : updater
		}));
	}, [setSettings]);
	const { show: showWeeklyReport, setShow: setShowWeeklyReport, dismiss: dismissWeekly } = useWeeklyReportTrigger();
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		document.documentElement.setAttribute("data-theme", theme);
	}, [darkMode, theme]);
	const [filter, setFilter] = (0, import_react.useState)("daily");
	const { exp, streak, levelInfo, addExp, streakBroke, setExp, setStreak } = useGameState();
	const [tasks, setTasks] = (0, import_react.useState)([]);
	const [expenses, setExpenses] = (0, import_react.useState)([]);
	const [papHistory, setPapHistory] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const { loading, fetchTasks, addTask: apiAddTask, updateTask: apiUpdateTask, deleteTask: apiDeleteTask, fetchExpenses, addExpense: apiAddExpense, deleteExpense: apiDeleteExpense, addPapRecord: apiAddPap, fetchTodayPap, fetchPapHistory, saveStreakToSheets, fetchGameState, updateGameState } = useSheetsAPI();
	const isSyncingRef = (0, import_react.useRef)(false);
	const syncTimeoutRef = (0, import_react.useRef)(null);
	const { toasts, addToast } = useToast();
	const { popups: expPopups, showExpPopup } = useExpPopup();
	(0, import_react.useEffect)(() => {
		if (streakBroke) setTimeout(() => {
			addToast("Aduh! Streak kemarin putus gara-gara ga absen 😭 Mulai lagi ya!", "warn");
		}, 1500);
	}, [streakBroke]);
	(0, import_react.useEffect)(() => {
		console.log("🔄 Initial useEffect starting...");
		(async () => {
			const [t, e] = await Promise.all([fetchTasks(), fetchExpenses()]);
			setTasks(t || []);
			setExpenses(e || []);
			try {
				const remoteState = await fetchGameState();
				if (remoteState) {
					const localStored = localStorage.getItem("dlt_exp");
					const localExp = localStored ? Number(JSON.parse(localStored)) : 0;
					const remoteExp = Number(remoteState.exp || 0);
					const remoteStreak = Number(remoteState.streak || 0);
					const remoteSettings = remoteState.settings;
					if (remoteExp > localExp + 5 || remoteSettings) {
						isSyncingRef.current = true;
						localStorage.setItem("dlt_exp", JSON.stringify(remoteExp));
						localStorage.setItem("dlt_streak", JSON.stringify(remoteStreak));
						localStorage.setItem("dlt_lastActive", JSON.stringify(remoteState.last_active || ""));
						if (remoteSettings) {
							localStorage.setItem("dlt_settings", JSON.stringify(remoteSettings));
							setSettings(remoteSettings);
						}
						setExp(remoteExp);
						setStreak(remoteStreak);
						setTimeout(() => {
							isSyncingRef.current = false;
						}, 1e3);
					}
				}
			} catch (err) {
				console.warn("[Sync] Game state sync failed:", err);
			}
			try {
				const todayKey = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
				const localPapString = localStorage.getItem("dlt_daily_pap");
				const localPap = localPapString ? JSON.parse(localPapString) : null;
				const hasTodayLocal = localPap?.date === todayKey && localPap?.done === true;
				const hasPhotoUrl = !!localPap?.photo_url && localPap?.photo_url.length > 5;
				if (!hasTodayLocal || !hasPhotoUrl) {
					const remotePap = await fetchTodayPap();
					if (remotePap && remotePap.status === "done" && remotePap.photo_url) {
						localStorage.setItem("dlt_daily_pap", JSON.stringify({
							date: todayKey,
							done: true,
							photo_url: remotePap.photo_url,
							timestamp: remotePap.timestamp || ""
						}));
						window.dispatchEvent(new Event("pap-synced"));
					}
				}
			} catch (e) {
				console.warn("[PAP Sync] Failed to sync from Sheets:", e);
			}
			try {
				setPapHistory(await fetchPapHistory() || []);
			} catch (e) {
				console.warn("[PAP History] Failed to fetch full history:", e);
			}
			console.log("✅ App marked as ready!");
			setReady(true);
		})();
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready && exp > 0 && !isSyncingRef.current) {
			if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
			syncTimeoutRef.current = setTimeout(() => {
				updateGameState({
					exp,
					streak,
					settings,
					last_active: localStorage.getItem("dlt_lastActive")?.replace(/"/g, "") || ""
				});
			}, 2e3);
		}
		return () => {
			if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
		};
	}, [
		exp,
		streak,
		ready,
		updateGameState,
		settings
	]);
	(0, import_react.useEffect)(() => {
		if (ready && exp > 5e3) {
			setExp(150);
			updateGameState({
				exp: 150,
				streak,
				last_active: localStorage.getItem("dlt_lastActive")?.replace(/"/g, "") || ""
			});
			addToast("EXP sudah aku reset ke 150 sesuai permintaanmu ya! ✨", "success");
		}
	}, [ready]);
	(0, import_react.useEffect)(() => {
		if (ready && Number(exp) > 1e6) {
			const resetValue = 150;
			setExp(resetValue);
			updateGameState({
				exp: resetValue,
				streak,
				last_active: localStorage.getItem("dlt_lastActive")?.replace(/"/g, "") || ""
			});
			addToast("Waduh, EXP kamu tadi sempat error (kebanyakan). Sudah aku rapihin lagi ke 150 ya! ✨", "success");
		}
	}, [
		ready,
		exp,
		setExp,
		streak,
		updateGameState,
		addToast
	]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const today = currentDate.isoDate;
		if (localStorage.getItem("dlt_lastTaskCheck") !== today) {
			const pendingOldCount = tasks.filter((t) => t.status === "pending" && t.date < today).length;
			if (pendingOldCount > 0) {
				const penalty = pendingOldCount * 5;
				addExp(-penalty);
				const updatedTasks = tasks.map((t) => t.status === "pending" && t.date < today ? {
					...t,
					status: "missed"
				} : t);
				setTasks(updatedTasks);
				updatedTasks.forEach((t) => {
					if (t.status === "missed") apiUpdateTask(t.id, "missed").catch(() => {});
				});
				setTimeout(() => {
					addToast(`Kamu melewatkan ${pendingOldCount} task kemarin 😢 EXP -${penalty}`, "warn");
				}, 2e3);
			}
			localStorage.setItem("dlt_lastTaskCheck", today);
		}
	}, [
		ready,
		tasks,
		addExp,
		addToast,
		apiUpdateTask
	]);
	const handleAddTask = (0, import_react.useCallback)(async (title, date) => {
		const tempId = "temp-" + Date.now();
		const tempTask = {
			id: tempId,
			title,
			date,
			status: "pending"
		};
		const prevTasks = [...tasks];
		setTasks((prev) => [tempTask, ...prev]);
		try {
			const task = await apiAddTask(title, date);
			setTasks((prev) => prev.map((t) => t.id === tempId ? task : t));
		} catch (err) {
			setTasks(prevTasks);
			addToast("Gagal nambah tugas 😭 Coba lagi ya!", "error");
		}
	}, [
		apiAddTask,
		tasks,
		addToast
	]);
	const handleCompleteTask = (0, import_react.useCallback)(async (id) => {
		const prevTasks = [...tasks];
		const prevExp = exp;
		const prevLevel = levelInfo.level;
		setTasks((prev) => prev.map((t) => t.id === id ? {
			...t,
			status: "done"
		} : t));
		addExp(10);
		showExpPopup(10, "exp");
		try {
			await apiUpdateTask(id, "done");
			setTimeout(() => {
				const next = JSON.parse(localStorage.getItem("dlt_exp") || "0");
				__vitePreload(async () => {
					const { getLevelInfo } = await import("./levels-BT3FIsMh.js");
					return { getLevelInfo };
				}, []).then(({ getLevelInfo }) => {
					const info = getLevelInfo(next);
					if (info.level > prevLevel) {
						fireConfetti();
						showExpPopup(0, "levelup", {
							newLevel: info.level,
							levelTitle: info.title
						});
					}
				});
			}, 100);
		} catch (err) {
			setTasks(prevTasks);
			setExp(prevExp);
			addToast("Gagal update tugas 😭", "error");
		}
	}, [
		apiUpdateTask,
		addExp,
		levelInfo,
		showExpPopup,
		tasks,
		exp,
		setExp,
		addToast
	]);
	const handleDeleteTask = (0, import_react.useCallback)(async (id) => {
		const prevTasks = [...tasks];
		setTasks((prev) => prev.filter((t) => t.id !== id));
		try {
			await apiDeleteTask(id);
		} catch (err) {
			setTasks(prevTasks);
			addToast("Gagal hapus tugas 😭", "error");
		}
	}, [
		apiDeleteTask,
		tasks,
		addToast
	]);
	const handleAddExpense = (0, import_react.useCallback)(async (name, amount) => {
		const tempId = "temp-" + Date.now();
		const tempExpense = {
			id: tempId,
			name,
			amount,
			date: currentDate.isoDate
		};
		const prevExpenses = [...expenses];
		const prevExp = exp;
		setExpenses((prev) => [tempExpense, ...prev]);
		if (amount >= 2e5) {
			addExp(-2);
			showExpPopup(-2, "exp");
			addToast("Dompet kamu nangis 😭 (-2 EXP)", "warn");
		} else {
			addExp(5);
			showExpPopup(5, "exp");
		}
		try {
			const expense = await apiAddExpense(name, amount);
			setExpenses((prev) => prev.map((e) => e.id === tempId ? expense : e));
		} catch (err) {
			setExpenses(prevExpenses);
			setExp(prevExp);
			addToast("Gagal catat pengeluaran 😭", "error");
		}
	}, [
		apiAddExpense,
		addExp,
		addToast,
		showExpPopup,
		expenses,
		exp,
		setExp
	]);
	const handleDeleteExpense = (0, import_react.useCallback)(async (id) => {
		const prevExpenses = [...expenses];
		setExpenses((prev) => prev.filter((e) => e.id !== id));
		try {
			await apiDeleteExpense(id);
		} catch (err) {
			setExpenses(prevExpenses);
			addToast("Gagal hapus pengeluaran 😭", "error");
		}
	}, [
		apiDeleteExpense,
		expenses,
		addToast
	]);
	const handleAddPap = (0, import_react.useCallback)(async (data) => {
		const record = await apiAddPap(data);
		if (record) setPapHistory(await fetchPapHistory() || []);
		return record;
	}, [apiAddPap, fetchPapHistory]);
	console.log("🧐 Current state - ready:", ready, "tasks:", tasks.length);
	if (!ready) {
		console.log("⏳ Rendering loading screen...");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-screen flex items-center justify-center p-6",
			style: { background: "var(--bg)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center max-w-sm w-full text-center space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-110 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "cis.svg",
							alt: "loading",
							className: "relative w-40 h-40 object-contain animate-bounce-slow drop-shadow-2xl"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							style: { color: "var(--text)" },
							children: "Sabar ya matchaa... 🍵"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							style: { color: "var(--muted)" },
							children: "Lagi nyiapin data buat kamu~"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full space-y-3 opacity-50 px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "skeleton-line mx-auto",
							style: { width: "80%" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "skeleton-line mx-auto",
							style: { width: "60%" }
						})]
					})
				]
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		style: {
			background: "var(--bg)",
			transition: "background 0.3s ease",
			position: "relative",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyEffects, { theme })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDecorations, { theme })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deco-blob deco-blob-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deco-blob deco-blob-2",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deco-blob deco-blob-3",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "app-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "header-main card p-4 md:p-5 flex flex-col justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
								levelInfo,
								exp,
								streak,
								darkMode,
								onToggleDark: () => setDarkMode((d) => !d),
								onShowSettings: () => setShowSettings(true),
								theme,
								onThemeChange: setTheme
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "header-date-card card p-3.5 md:p-5 flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] border-none shadow-sm relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-0.5 md:mb-1 opacity-70",
									style: { color: "var(--text)" },
									children: currentDate.weekday
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl md:text-3xl font-black leading-none mb-0.5 md:mb-1",
									style: { color: "var(--accent)" },
									children: currentDate.day
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] md:text-xs font-bold opacity-80",
									style: { color: "var(--text)" },
									children: currentDate.monthYear
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "action-bar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
							active: filter,
							onChange: setFilter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "action-bar-buttons",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "history-btn",
									onClick: () => setShowHistory(true),
									"aria-label": "Buka riwayat harian",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📅" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Riwayat" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "history-btn",
									onClick: () => setShowWeeklyReport(true),
									"aria-label": "Buka laporan mingguan",
									style: {
										background: "var(--accent-2)",
										color: "var(--text)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📊" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Laporan" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "history-btn",
									onClick: () => setShowScrapbook(true),
									"aria-label": "Buka buku kenangan",
									style: {
										background: "var(--accent)",
										color: "var(--text)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📒" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scrapbook" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center z-10 relative pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskBuddy, {
							levelInfo,
							darkMode,
							currentCharacter,
							tasksCompletedToday: tasks.filter((t) => t.status === "done" && t.date === currentDate.isoDate).length
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "main-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyPhotoTask, {
									onExp: addExp,
									onToast: addToast,
									onAddPap: handleAddPap,
									onSaveStreak: saveStreakToSheets,
									streak,
									onShowExpPopup: showExpPopup
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskSection_default, {
									tasks,
									filter,
									onAdd: handleAddTask,
									onComplete: handleCompleteTask,
									onDelete: handleDeleteTask,
									onToast: addToast
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-right",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseSection, {
										expenses,
										filter,
										onAdd: handleAddExpense,
										onDelete: handleDeleteExpense,
										onToast: addToast
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseChart, { expenses }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TomorrowTaskSection, {
										tasks,
										onAdd: handleAddTask,
										onDelete: handleDeleteTask,
										onToast: addToast
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card p-4 md:p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "section-title mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
													icon: "📋",
													label: "Tasks",
													value: tasks.filter((t) => {
														const today = currentDate.isoDate;
														return t.date === today;
													}).length
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
													icon: "✅",
													label: "Selesai",
													value: tasks.filter((t) => {
														const today = currentDate.isoDate;
														return t.status === "done" && t.date === today;
													}).length
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
													icon: "🔥",
													label: "Streak",
													value: `${streak}d`
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "insight-container",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, {
									tasks,
									expenses,
									filter,
									settings
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-credit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "heart",
								children: "❤️"
							}),
							" by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "creator-name",
								children: "Hengky"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: { marginTop: "0.25rem" },
							children: [
								"specially for ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "for-name",
									children: "matchaa"
								}),
								" 🍵"
							]
						})]
					})
				]
			}),
			showWelcome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeCard, { onDismiss: () => setShowWelcome(false) }),
			showWeeklyReport && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyReport, {
				tasks,
				expenses,
				streak,
				exp,
				onClose: dismissWeekly
			}),
			showHistory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryModal, {
				tasks,
				expenses,
				onClose: () => setShowHistory(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpPopup, { popups: expPopups }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackToast, { toasts }),
			showSettings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsModal_default, {
				settings,
				setSettings,
				onClose: () => setShowSettings(false),
				onToast: addToast
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuraEffect, { level: levelInfo.level }),
			showScrapbook && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrapbookModal, {
				onClose: () => setShowScrapbook(false),
				papRecords: papHistory,
				onRefresh: async () => {
					setPapHistory(await fetchPapHistory() || []);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerManager, {
				stickers: settings?.stickers || [],
				setStickers: handleUpdateStickers
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveTrails, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmoteReaction, { onAddExp: addExp }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "action-dock-item character-dock",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleSwitchCharacter,
					className: "dock-btn group",
					"aria-label": "Switch Character",
					title: `Magically transform to ${currentCharacter === "cat" ? "Human" : "Cat"} ✨`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm absolute -top-4 -right-4 animate-pulse",
							children: "✨"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-500 text-2xl",
							children: currentCharacter === "cat" ? "🪄" : "🎀"
						})]
					})
				})
			})
		]
	});
}
function StatTile({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center p-3 rounded-xl text-center",
		style: {
			background: "var(--bg)",
			border: "1px solid var(--border)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl mb-1",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-lg font-bold leading-none",
				style: { color: "var(--text)" },
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs mt-1",
				style: { color: "var(--muted)" },
				children: label
			})
		]
	});
}
//#endregion
//#region src/main.jsx
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
export { getLevelInfo as n, LEVELS as t };
