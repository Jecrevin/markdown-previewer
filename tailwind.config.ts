import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      spacing: {
        header: '50px',
        hm: '70px' /* header margin */
      },
      boxShadow: {
        my: '0 0px 5px 2px'
      }
    }
  },
  plugins: []
}
export default config
