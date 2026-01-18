/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "slate-950": "#0a0c10",
                "slate-900": "#11141a",
                "slate-800": "#1e222b",
                "slate-700": "#334155",
                "accent-blue": "#7dd3fc",
                "accent-teal": "#5eead4",
                "terminal-text": "#cbd5e1",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"]
            }
        },
    },
    plugins: [],
}