/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fb5533',
        bg_page: '#f5f5f5',
        bg_header_t: '#ff6533',
        bg_header_b: '#f53f2d'
      },
      screens: {
        auth: '1175px'
      }
    }
  },
  plugins: []
}
