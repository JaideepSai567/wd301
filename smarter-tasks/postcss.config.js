const tailwindcss = require('@tailwindcss/postcss7-compat');  // Correct
const autoprefixer = require('autoprefixer');  // Correct

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
