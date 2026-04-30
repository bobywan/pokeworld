/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pokemon: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8f9fa',
          muted: '#f1f3f5',
          border: '#e9ecef',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#495057',
          muted: '#868e96',
          inverse: '#ffffff',
        },
        brand: {
          DEFAULT: '#e63946',
          hover: '#c1121f',
          light: '#fde8ea',
        },
      },
      borderRadius: {
        card: '1rem',
        badge: '9999px',
        input: '0.625rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
        input: '0 0 0 3px rgba(230,57,70,0.15)',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}
