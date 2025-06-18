const { createTailwindConfig } = require('../../tailwind.config.helper.js');

/** @type {import('tailwindcss').Config} */
module.exports = createTailwindConfig(__dirname, {
  theme: {
    // Package-specific theme extensions go here
    // These will be merged with the preset configurations
  },
  plugins: [
    // Package-specific plugins go here
  ],
});
