/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['nunito', 'Nunito'],
      helvetica: ['helvetica', 'sans-serif'],
      Arial: [ 'Arial', 'sans-serif'],
      europa: ['europa', 'sans-serif']
    },
  },
  plugins: [],
}

// nunito,helvetica,Arial,sans-serif
