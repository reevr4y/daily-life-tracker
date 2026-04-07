import { i as require_jsx_runtime } from "./vendor-bWiNkJjK.js";
//#region src/components/FloatingDecorations.jsx
var import_jsx_runtime = require_jsx_runtime();
var THEME_ICONS = {
	matcha: [
		"🍃",
		"🌿",
		"🍵",
		"🍃",
		"🌱",
		"☘️"
	],
	strawberry: [
		"🍓",
		"🌸",
		"💖",
		"🍨",
		"🌷",
		"🎀"
	],
	peach: [
		"🍑",
		"🍑",
		"🧡",
		"🍑",
		"🍊",
		"🎐"
	],
	lavender: [
		"🍇",
		"🪻",
		"💜",
		"🌙",
		"🔮",
		"💤"
	]
};
function FloatingDecorations({ theme = "matcha" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 overflow-hidden pointer-events-none",
		style: { zIndex: 0 },
		children: (THEME_ICONS[theme] || THEME_ICONS.matcha).map((icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `floating-decoration decoration-${i + 1}`,
			children: icon
		}, i))
	});
}
//#endregion
export { FloatingDecorations as default };
