import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages//*.{ts,tsx,jsx}",
    "./components//*.{ts,tsx,jsx}",
    "./app//*.{ts,tsx,jsx}",
    "./src//*.{ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
