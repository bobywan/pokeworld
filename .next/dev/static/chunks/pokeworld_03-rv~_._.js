(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Types Gen 1 uniquement — le type Fée (Fairy) n'existait pas dans Rouge/Bleu
__turbopack_context__.s([
    "COLOR_FR",
    ()=>COLOR_FR,
    "GEN1_TYPES",
    ()=>GEN1_TYPES,
    "GEN6_TYPES_TO_REMOVE",
    ()=>GEN6_TYPES_TO_REMOVE,
    "HABITAT_FR",
    ()=>HABITAT_FR,
    "KANTO_COUNT",
    ()=>KANTO_COUNT,
    "STAGE_FR",
    ()=>STAGE_FR,
    "STAT_FR",
    ()=>STAT_FR,
    "STAT_MAX",
    ()=>STAT_MAX,
    "TYPE_COLORS",
    ()=>TYPE_COLORS,
    "TYPE_FR",
    ()=>TYPE_FR
]);
const TYPE_COLORS = {
    normal: "#9FA19F",
    fire: "#E62829",
    water: "#2980EF",
    electric: "#FAC000",
    grass: "#3FA129",
    ice: "#3DCEF3",
    fighting: "#FF8000",
    poison: "#8F41CB",
    ground: "#915121",
    flying: "#81B9EF",
    psychic: "#EF4179",
    bug: "#91A119",
    rock: "#AFA981",
    ghost: "#704170",
    dragon: "#5060E1",
    dark: "#624D4E",
    steel: "#60A1B8"
};
const TYPE_FR = {
    normal: "Normal",
    fire: "Feu",
    water: "Eau",
    electric: "Électrik",
    grass: "Plante",
    ice: "Glace",
    fighting: "Combat",
    poison: "Poison",
    ground: "Sol",
    flying: "Vol",
    psychic: "Psy",
    bug: "Insecte",
    rock: "Roche",
    ghost: "Spectre",
    dragon: "Dragon",
    dark: "Ténèbres",
    steel: "Acier"
};
const GEN1_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel"
];
const STAT_FR = {
    hp: "PV",
    attack: "Atk",
    defense: "Déf",
    "special-attack": "Atk Spé",
    "special-defense": "Déf Spé",
    speed: "Vitesse"
};
const STAT_MAX = {
    hp: 255,
    attack: 190,
    defense: 230,
    "special-attack": 194,
    "special-defense": 230,
    speed: 200
};
const HABITAT_FR = {
    cave: "Grottes",
    forest: "Forêts",
    grassland: "Champs",
    mountain: "Montagnes",
    rare: "Rares",
    "rough-terrain": "Milieux hostiles",
    sea: "Mers",
    urban: "Urbains",
    "waters-edge": "Marécages"
};
const COLOR_FR = {
    black: "Noir",
    blue: "Bleu",
    brown: "Marron",
    gray: "Gris",
    green: "Vert",
    pink: "Rose",
    purple: "Violet",
    red: "Rouge",
    white: "Blanc",
    yellow: "Jaune"
};
const STAGE_FR = {
    1: "Forme de base",
    2: "1ère évolution",
    3: "2ème évolution"
};
const KANTO_COUNT = 151;
const GEN6_TYPES_TO_REMOVE = [
    "fairy"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/StatBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatBar",
    ()=>StatBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)");
;
;
function getBarColor(pct) {
    if (pct < 0.33) return "#ef4444";
    if (pct < 0.66) return "#f59e0b";
    return "#22c55e";
}
function StatBar({ name, rawName, value }) {
    const max = __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAT_MAX"][rawName] ?? 255;
    const pct = Math.min(value / max, 1);
    const color = getBarColor(pct);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-14 shrink-0 text-right text-[10px] font-medium text-text-muted",
                children: name
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/StatBar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-6 shrink-0 text-[10px] font-bold text-text-secondary",
                children: value
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/StatBar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 flex-1 rounded-full bg-surface-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full transition-all duration-500",
                    style: {
                        width: `${pct * 100}%`,
                        backgroundColor: color
                    }
                }, void 0, false, {
                    fileName: "[project]/pokeworld/components/StatBar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/StatBar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/StatBar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = StatBar;
var _c;
__turbopack_context__.k.register(_c, "StatBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/TypeBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeBadge",
    ()=>TypeBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)");
;
;
;
function TypeBadge({ type, small = false, className }) {
    const color = __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_COLORS"][type] ?? "#9FA19F";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block rounded-badge font-semibold uppercase tracking-wide text-white", small ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]", className),
        style: {
            backgroundColor: color
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_FR"][type] ?? type
    }, void 0, false, {
        fileName: "[project]/pokeworld/components/TypeBadge.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TypeBadge;
var _c;
__turbopack_context__.k.register(_c, "TypeBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/PokemonCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PokemonCard",
    ()=>PokemonCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$StatBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/components/StatBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/components/TypeBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}
function PokemonCard({ pokemon }) {
    _s();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const primaryColor = __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_COLORS"][pokemon.types[0] ?? ""] ?? "#9FA19F";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pokemon-card group relative overflow-hidden rounded-card bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-40 items-end justify-center pb-2",
                style: {
                    background: `linear-gradient(145deg, ${hexToRgba(primaryColor, 0.22)} 0%, ${hexToRgba(primaryColor, 0.08)} 100%)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-5 -top-5 h-28 w-28 rounded-full opacity-15",
                        style: {
                            backgroundColor: primaryColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-4 bottom-0 h-20 w-20 rounded-full opacity-10",
                        style: {
                            backgroundColor: primaryColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-3 font-mono text-[10px] font-bold text-text-muted",
                        children: [
                            "#",
                            String(pokemon.id).padStart(3, "0")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imgError ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` : pokemon.sprite,
                        alt: pokemon.name,
                        width: 128,
                        height: 128,
                        onError: ()=>setImgError(true),
                        className: "relative z-10 h-32 w-32 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2 text-sm font-bold leading-tight text-text-primary",
                        children: pokemon.name
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-wrap gap-1",
                        children: pokemon.types.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$TypeBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeBadge"], {
                                type: t,
                                small: true
                            }, t, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 grid grid-cols-2 gap-x-2 gap-y-1 rounded-lg bg-surface-subtle p-2 text-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Habitat",
                                value: pokemon.habitat ?? "Inconnu"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Couleur",
                                value: pokemon.color
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Taille",
                                value: `${(pokemon.height / 10).toFixed(1)} m`
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Poids",
                                value: `${(pokemon.weight / 10).toFixed(1)} kg`
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                    label: "Stade",
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_FR"][pokemon.stage] ?? ""
                                }, void 0, false, {
                                    fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: pokemon.stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$StatBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatBar"], {
                                name: s.name,
                                rawName: s.rawName,
                                value: s.value
                            }, s.rawName, false, {
                                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(PokemonCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c = PokemonCard;
function InfoRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-w-0 items-baseline gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 font-medium text-text-muted",
                children: [
                    label,
                    " :"
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate font-semibold text-text-secondary",
                children: value
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/PokemonCard.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/PokemonCard.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c1 = InfoRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "PokemonCard");
__turbopack_context__.k.register(_c1, "InfoRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/SearchHelpModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchHelpModal",
    ()=>SearchHelpModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TEXT_EXAMPLES = [
    {
        example: "bulbizarre",
        description: "Recherche par nom"
    },
    {
        example: "007",
        description: "Recherche par numéro"
    },
    {
        example: "forêt",
        description: "Par habitat (forêt, mer, caverne…)"
    },
    {
        example: "rouge",
        description: "Par couleur du Pokémon"
    },
    {
        example: "feu",
        description: "Par type (Feu, Eau, Plante…)"
    },
    {
        example: "base",
        description: "Par stade (base, évolution…)"
    }
];
const NUMERIC_EXAMPLES = [
    {
        example: "poids>50",
        description: "Poids supérieur à 50 kg"
    },
    {
        example: "poids<=10",
        description: "Poids inférieur ou égal à 10 kg"
    },
    {
        example: "taille<0.5",
        description: "Taille inférieure à 0,5 m"
    },
    {
        example: "taille>=2",
        description: "Taille de 2 m ou plus"
    },
    {
        example: "hp>100",
        description: "Points de vie supérieurs à 100"
    },
    {
        example: "atk>100",
        description: "Attaque supérieure à 100"
    },
    {
        example: "def>=100",
        description: "Défense supérieure ou égale à 100"
    },
    {
        example: "vit<50",
        description: "Vitesse inférieure à 50"
    }
];
const COMBO_EXAMPLES = [
    {
        example: "forêt poids>30",
        description: "Pokémon de forêt pesant plus de 30 kg"
    },
    {
        example: "base hp>80",
        description: "Formes de base avec plus de 80 PV"
    },
    {
        example: "taille<1 vit>80",
        description: "Petits Pokémon très rapides"
    }
];
function HelpTable({ rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "shrink-0 rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[11px] font-semibold text-brand",
                        children: row.example
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-text-secondary",
                        children: row.description
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, row.example, true, {
                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = HelpTable;
function SearchHelpModal({ isOpen, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchHelpModal.useEffect": ()=>{
            if (!isOpen) return;
            const handler = {
                "SearchHelpModal.useEffect.handler": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["SearchHelpModal.useEffect.handler"];
            document.addEventListener("keydown", handler);
            return ({
                "SearchHelpModal.useEffect": ()=>document.removeEventListener("keydown", handler)
            })["SearchHelpModal.useEffect"];
        }
    }["SearchHelpModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Aide à la recherche",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                onClick: onClose,
                "aria-label": "Fermer"
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 w-full max-w-lg rounded-card bg-surface shadow-card-hover", "max-h-[85vh] overflow-y-auto"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 flex items-center justify-between rounded-t-card border-b border-surface-border bg-surface px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-text-primary",
                                        children: "Aide à la recherche"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "flex h-7 w-7 items-center justify-center rounded-full text-text-muted transition hover:bg-surface-muted hover:text-text-primary",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 px-5 py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs leading-relaxed text-text-secondary",
                                children: [
                                    "La barre de recherche comprend ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "plusieurs mots simultanément"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 109,
                                        columnNumber: 44
                                    }, this),
                                    " — chaque mot est un filtre supplémentaire (logique ET). Vous pouvez combiner texte et opérateurs numériques librement."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-3 text-[11px] font-bold uppercase tracking-wider text-text-muted",
                                        children: "Recherche textuelle"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpTable, {
                                        rows: TEXT_EXAMPLES
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-1 text-[11px] font-bold uppercase tracking-wider text-text-muted",
                                        children: "Opérateurs numériques"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 text-[10px] text-text-muted",
                                        children: [
                                            "Opérateurs disponibles : ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "font-mono",
                                                children: "> < >= <= ="
                                            }, void 0, false, {
                                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                                lineNumber: 128,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpTable, {
                                        rows: NUMERIC_EXAMPLES
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-3 text-[11px] font-bold uppercase tracking-wider text-text-muted",
                                        children: "Combinaisons (séparer par un espace)"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpTable, {
                                        rows: COMBO_EXAMPLES
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "btn-primary w-full justify-center",
                                children: "Compris !"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/SearchHelpModal.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(SearchHelpModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = SearchHelpModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "HelpTable");
__turbopack_context__.k.register(_c1, "SearchHelpModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/TypeFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeFilters",
    ()=>TypeFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TypeFilters({ activeTypes, onToggle, onClear }) {
    const hasActive = activeTypes.size > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-surface/80 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClear,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex shrink-0 items-center gap-1.5 rounded-badge px-3 py-1.5 text-[11px] font-semibold transition-all duration-150 active:scale-95", !hasActive ? "bg-text-primary text-white shadow-sm" : "bg-surface-muted text-text-secondary hover:bg-surface-border"),
                                children: "Tous"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-0.5 my-1 w-px shrink-0 bg-surface-border"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GEN1_TYPES"].map((type)=>{
                                const isActive = activeTypes.has(type);
                                const color = __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_COLORS"][type] ?? "#9FA19F";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onToggle(type),
                                    style: isActive ? {
                                        backgroundColor: color
                                    } : undefined,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex shrink-0 items-center gap-1 rounded-badge px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-150 active:scale-95", isActive ? "scale-105 text-white shadow-sm" : "text-white/90 hover:scale-105 hover:opacity-100"),
                                    children: [
                                        !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 rounded-badge opacity-60",
                                            style: {
                                                backgroundColor: color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "relative z-10 h-2.5 w-2.5 shrink-0",
                                            viewBox: "0 0 10 10",
                                            fill: "none",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1.5 5l2.5 2.5 4.5-4.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_FR"][type] ?? type
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, type, true, {
                                    fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            hasActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            ...activeTypes
                        ].map((type)=>{
                            const color = __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_COLORS"][type] ?? "#9FA19F";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onToggle(type),
                                style: {
                                    borderColor: color,
                                    color
                                },
                                className: "flex items-center gap-1 rounded-badge border px-2 py-0.5 text-[10px] font-semibold transition hover:opacity-70",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_FR"][type] ?? type,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] opacity-70",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, type, true, {
                                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClear,
                        className: "ml-2 shrink-0 text-[10px] font-medium text-text-muted underline-offset-2 hover:text-brand hover:underline",
                        children: "Tout effacer"
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/TypeFilters.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/TypeFilters.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = TypeFilters;
var _c;
__turbopack_context__.k.register(_c, "TypeFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/lib/search.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSearchHint",
    ()=>getSearchHint,
    "matchesPokemon",
    ()=>matchesPokemon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/constants.ts [app-client] (ecmascript)");
;
function applyOperator(actual, op, value) {
    switch(op){
        case ">":
            return actual > value;
        case "<":
            return actual < value;
        case ">=":
            return actual >= value;
        case "<=":
            return actual <= value;
        case "=":
            return Math.abs(actual - value) < 0.01;
    }
}
// Regex pour capturer un opérateur numérique : ex. "poids>50", "taille<=1.5"
const NUMERIC_RE = /^(poids|taille|hp|atk|def|vit)(>=|<=|>|<|=)(\d+(?:\.\d+)?)$/i;
function matchesNumericToken(p, token) {
    const m = token.match(NUMERIC_RE);
    if (!m) return null;
    const [, field, rawOp, rawVal] = m;
    const op = rawOp;
    const val = parseFloat(rawVal ?? "0");
    switch(field?.toLowerCase()){
        case "poids":
            return applyOperator(p.weight / 10, op, val);
        case "taille":
            return applyOperator(p.height / 10, op, val);
        case "hp":
            {
                const stat = p.stats.find((s)=>s.rawName === "hp");
                return stat ? applyOperator(stat.value, op, val) : false;
            }
        case "atk":
            {
                const stat = p.stats.find((s)=>s.rawName === "attack");
                return stat ? applyOperator(stat.value, op, val) : false;
            }
        case "def":
            {
                const stat = p.stats.find((s)=>s.rawName === "defense");
                return stat ? applyOperator(stat.value, op, val) : false;
            }
        case "vit":
            {
                const stat = p.stats.find((s)=>s.rawName === "speed");
                return stat ? applyOperator(stat.value, op, val) : false;
            }
        default:
            return null;
    }
}
function textFields(p) {
    return [
        p.name,
        String(p.id).padStart(3, "0"),
        p.habitat ?? "",
        p.color,
        __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_FR"][p.stage] ?? "",
        ...p.types.map((t)=>__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_FR"][t] ?? t),
        `${(p.weight / 10).toFixed(1)}`,
        `${(p.height / 10).toFixed(1)}`
    ].map((s)=>s.toLowerCase());
}
function matchesToken(p, token) {
    const numResult = matchesNumericToken(p, token);
    if (numResult !== null) return numResult;
    return textFields(p).some((field)=>field.includes(token));
}
function matchesPokemon(p, query) {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return true;
    return tokens.every((token)=>matchesToken(p, token));
}
function getSearchHint(query) {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    if (/^poids/.test(q)) return "Ex : poids>50  poids<=10  poids=6.9";
    if (/^taille/.test(q)) return "Ex : taille>1.5  taille<0.5  taille=1";
    if (/^hp/.test(q)) return "Ex : hp>100  hp<=45";
    if (/^atk/.test(q)) return "Ex : atk>100  atk<=55";
    if (/^def/.test(q)) return "Ex : def>=100";
    if (/^vit/.test(q)) return "Ex : vit>100  vit<50";
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pokeworld/components/PokedexClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PokedexClient",
    ()=>PokedexClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$PokemonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/components/PokemonCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$SearchHelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/components/SearchHelpModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$TypeFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/components/TypeFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pokeworld/lib/search.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function PokedexClient({ pokemon }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTypes, setActiveTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [helpOpen, setHelpOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleType = (type)=>{
        setActiveTypes((prev)=>{
            const next = new Set(prev);
            if (next.has(type)) {
                next.delete(type);
            } else {
                next.add(type);
            }
            return next;
        });
    };
    const clearTypes = ()=>setActiveTypes(new Set());
    const searchHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PokedexClient.useMemo[searchHint]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSearchHint"])(search)
    }["PokedexClient.useMemo[searchHint]"], [
        search
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PokedexClient.useMemo[filtered]": ()=>{
            return pokemon.filter({
                "PokedexClient.useMemo[filtered]": (p)=>{
                    const matchSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$lib$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesPokemon"])(p, search);
                    // Logique ET : le Pokémon doit posséder TOUS les types sélectionnés
                    const matchType = activeTypes.size === 0 || [
                        ...activeTypes
                    ].every({
                        "PokedexClient.useMemo[filtered]": (t)=>p.types.includes(t)
                    }["PokedexClient.useMemo[filtered]"]);
                    return matchSearch && matchType;
                }
            }["PokedexClient.useMemo[filtered]"]);
        }
    }["PokedexClient.useMemo[filtered]"], [
        pokemon,
        search,
        activeTypes
    ]);
    const handlePrint = ()=>window.print();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-surface-subtle",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "no-print sticky top-0 z-20 border-b border-surface-border bg-surface/95 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
                                            alt: "Pokéball",
                                            width: 28,
                                            height: 28,
                                            className: "h-7 w-7 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "truncate text-base font-bold text-text-primary sm:text-lg",
                                                    children: "Le Pokédex de Boby & Fils"
                                                }, void 0, false, {
                                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-text-muted",
                                                    children: "Kanto — Gen 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex shrink-0 items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden text-xs text-text-muted sm:block",
                                            children: [
                                                filtered.length,
                                                filtered.length !== pokemon.length ? `/${pokemon.length}` : "",
                                                " Pokémon"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handlePrint,
                                            className: "btn-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden xs:inline",
                                                    children: "Imprimer"
                                                }, void 0, false, {
                                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "xs:hidden",
                                                    children: "🖨️"
                                                }, void 0, false, {
                                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "search",
                                            placeholder: "Nom, numéro, habitat, poids>50, taille<1…",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            className: "input-search"
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setHelpOpen(true),
                                            title: "Aide à la recherche",
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-input border border-surface-border bg-surface text-sm font-bold text-text-muted transition hover:border-brand hover:text-brand",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                searchHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 px-1 text-[10px] text-text-muted",
                                    children: [
                                        "💡 ",
                                        searchHint
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$TypeFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeFilters"], {
                            activeTypes: activeTypes,
                            onToggle: toggleType,
                            onClear: clearTypes
                        }, void 0, false, {
                            fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-7xl px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs text-text-muted sm:hidden",
                        children: [
                            filtered.length,
                            filtered.length !== pokemon.length ? `/${pokemon.length}` : "",
                            " Pokémon"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "print-grid grid grid-cols-2 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5",
                        children: filtered.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$PokemonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PokemonCard"], {
                                pokemon: p
                            }, p.id, false, {
                                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-5xl",
                                children: "😔"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base font-semibold text-text-primary",
                                children: "Aucun Pokémon trouvé"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-text-muted",
                                children: "Essayez un autre nom ou type"
                            }, void 0, false, {
                                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$components$2f$SearchHelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchHelpModal"], {
                isOpen: helpOpen,
                onClose: ()=>setHelpOpen(false)
            }, void 0, false, {
                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "no-print border-t border-surface-border py-6 text-center text-xs text-text-muted",
                children: [
                    "Données :",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pokeworld$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://pokeapi.co",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline hover:text-text-secondary",
                        children: "PokéAPI"
                    }, void 0, false, {
                        fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    " ",
                    "· Pokémon © Nintendo / Game Freak"
                ]
            }, void 0, true, {
                fileName: "[project]/pokeworld/components/PokedexClient.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pokeworld/components/PokedexClient.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(PokedexClient, "dYwQgGTbWeZLX6KhoBdN6x9QeBo=");
_c = PokedexClient;
var _c;
__turbopack_context__.k.register(_c, "PokedexClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=pokeworld_03-rv~_._.js.map