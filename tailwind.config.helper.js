const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/**
 * Creates a Tailwind CSS configuration for an Nx package
 * @param {string} packageDir - The package directory (__dirname)
 * @param {Object} options - Additional configuration options
 * @param {Object} options.theme - Package-specific theme extensions
 * @param {Array} options.plugins - Package-specific plugins
 * @param {Array} options.content - Additional content patterns
 * @returns {Object} Tailwind CSS configuration
 */
function createTailwindConfig(packageDir, options = {}) {
  const { theme = {}, plugins = [], content = [] } = options;

  return {
    content: [
      join(
        packageDir,
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
      ),
      ...createGlobPatternsForDependencies(packageDir),
      ...content,
    ],
    presets: [require('./tailwind.preset.js')],
    theme: {
      extend: {
        ...theme,
      },
    },
    plugins: [...plugins],
  };
}

module.exports = { createTailwindConfig };
