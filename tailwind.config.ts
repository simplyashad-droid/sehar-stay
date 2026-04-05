import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafaf8',
        foreground: '#1a1a1a',
        primary: '#df6327',
        secondary: '#df6327',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        lora: ['var(--font-lora)'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-lora)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
