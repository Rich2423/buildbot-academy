/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
        },
        accent: {
          50: '#fef3c7',
          100: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'kid-friendly': ['Fredoka One', 'Nunito', 'system-ui'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'colorful': '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)',
      }
    },
  },
  plugins: [],
}