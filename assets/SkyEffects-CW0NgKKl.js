import { a as __toESM } from "./rolldown-runtime-BjWfMKpL.js";
import { a as require_react, i as require_jsx_runtime } from "./vendor-bWiNkJjK.js";
//#region src/components/SkyEffects.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var THEME_AURORA_COLORS = {
	matcha: ["rgba(123, 174, 127, 0.7)", "rgba(230, 211, 179, 0.6)"],
	strawberry: ["rgba(255, 138, 161, 0.7)", "rgba(255, 212, 219, 0.6)"],
	peach: ["rgba(255, 179, 102, 0.7)", "rgba(255, 229, 204, 0.6)"],
	lavender: ["rgba(160, 132, 232, 0.7)", "rgba(232, 221, 255, 0.6)"]
};
function SkyEffects({ theme = "matcha" }) {
	const colors = THEME_AURORA_COLORS[theme] || THEME_AURORA_COLORS.matcha;
	const stars = (0, import_react.useMemo)(() => {
		return Array.from({ length: 6 }).map((_, i) => ({
			id: i,
			top: `${Math.random() * 50}%`,
			left: `${70 + Math.random() * 30}%`,
			duration: `${4 + Math.random() * 6}s`,
			delay: `${Math.random() * 15}s`,
			width: `${80 + Math.random() * 120}px`
		}));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sky-effects-container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob",
				style: {
					top: "-15%",
					left: "-10%",
					background: `radial-gradient(circle, ${colors[0]}, transparent 70%)`,
					animationDuration: "30s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob",
				style: {
					top: "10%",
					right: "-15%",
					background: `radial-gradient(circle, ${colors[1]}, transparent 70%)`,
					animationDuration: "25s",
					animationDelay: "-7s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob",
				style: {
					bottom: "-10%",
					left: "20%",
					width: "60vw",
					background: `radial-gradient(circle, ${colors[0]}, transparent 70%)`,
					animationDuration: "35s",
					animationDelay: "-12s",
					opacity: .1
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shooting-star-layer",
				children: stars.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shooting-star",
					style: {
						top: star.top,
						left: star.left,
						width: star.width,
						animation: `shooting-star-anim ${star.duration} ${star.delay} linear infinite`
					}
				}, star.id))
			})
		]
	});
}
//#endregion
export { SkyEffects as default };
