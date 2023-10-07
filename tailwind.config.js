/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'assets/js/*',
    'components/**/*'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

