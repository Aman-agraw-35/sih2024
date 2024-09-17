/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-top': '#424040',
        'custom-bottom': '#202223',
              duration: {
        '6000': '6000ms',
      },
      },
    },
  },
  plugins: [],
}

