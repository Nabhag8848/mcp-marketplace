const { createTailwindConfig } = require('../../tailwind.config.helper.js');

/** @type {import('tailwindcss').Config} */
module.exports = createTailwindConfig(__dirname, {
  theme: {
    // Package-specific theme extensions
    extend: {
      // Add marketplace-ui specific customizations here
    },
  },
  plugins: [
    // Package-specific plugins
  ],
});
