/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['titulo', 'sans-serif'],
        texto: ["Lato", "sans-serif"],
      },
      colors: {
        verde: "#588157",
        verdeClaro: "#A3B18A",
        blancoHueso: "#F7EFDA",
        rosaPalo: "#E3BBBC",
        rosaSalmon: "#DE8780",
        marron: "#655D57",
        negro: "#2F2E2E",
      },
    },
  },
  plugins: [],
};
