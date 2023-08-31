import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        'card': '5 / 8'
      },
      backgroundColor: {
        'white01': 'rgba(255, 255, 255, 0.1)',
      },
      border: {
        '1': '1px',
      },
      colors: {
        'darkBg': '#FFC107',
        'darkPrimary': '#FF9800',
        'darkAccent': '#FF5722',
        'darkAccent2': '#FF5722',
      }, height: {
        '90': '22rem'
      }
    },
  },
  plugins: [],
}
export default config
