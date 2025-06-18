const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        chart: {
          1: 'var(--color-chart-1)',
          2: 'var(--color-chart-2)',
          3: 'var(--color-chart-3)',
          4: 'var(--color-chart-4)',
          5: 'var(--color-chart-5)',
        },
        sidebar: {
          DEFAULT: 'var(--color-sidebar)',
          foreground: 'var(--color-sidebar-foreground)',
          primary: 'var(--color-sidebar-primary)',
          'primary-foreground': 'var(--color-sidebar-primary-foreground)',
          accent: 'var(--color-sidebar-accent)',
          'accent-foreground': 'var(--color-sidebar-accent-foreground)',
          border: 'var(--color-sidebar-border)',
          ring: 'var(--color-sidebar-ring)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addVariant }) {
      // Add custom variant for dark mode
      addVariant('dark', '&:is(.dark *)');

      // Add CSS variables
      addBase({
        ':root': {
          // Base color variables
          '--background': 'oklch(1 0 0)',
          '--foreground': 'oklch(0.145 0 0)',
          '--card': 'oklch(1 0 0)',
          '--card-foreground': 'oklch(0.145 0 0)',
          '--popover': 'oklch(1 0 0)',
          '--popover-foreground': 'oklch(0.145 0 0)',
          '--primary': 'oklch(0.205 0 0)',
          '--primary-foreground': 'oklch(0.985 0 0)',
          '--secondary': 'oklch(0.97 0 0)',
          '--secondary-foreground': 'oklch(0.205 0 0)',
          '--muted': 'oklch(0.97 0 0)',
          '--muted-foreground': 'oklch(0.556 0 0)',
          '--accent': 'oklch(0.97 0 0)',
          '--accent-foreground': 'oklch(0.205 0 0)',
          '--destructive': 'oklch(0.577 0.245 27.325)',
          '--destructive-foreground': 'oklch(0.577 0.245 27.325)',
          '--border': 'oklch(0.922 0 0)',
          '--input': 'oklch(0.922 0 0)',
          '--ring': 'oklch(0.708 0 0)',
          '--chart-1': 'oklch(0.646 0.222 41.116)',
          '--chart-2': 'oklch(0.6 0.118 184.704)',
          '--chart-3': 'oklch(0.398 0.07 227.392)',
          '--chart-4': 'oklch(0.828 0.189 84.429)',
          '--chart-5': 'oklch(0.769 0.188 70.08)',
          '--radius': '0.625rem',
          '--sidebar': 'oklch(0.985 0 0)',
          '--sidebar-foreground': 'oklch(0.145 0 0)',
          '--sidebar-primary': 'oklch(0.205 0 0)',
          '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
          '--sidebar-accent': 'oklch(0.97 0 0)',
          '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
          '--sidebar-border': 'oklch(0.922 0 0)',
          '--sidebar-ring': 'oklch(0.708 0 0)',

          // Theme mapping variables
          '--color-background': 'var(--background)',
          '--color-foreground': 'var(--foreground)',
          '--color-card': 'var(--card)',
          '--color-card-foreground': 'var(--card-foreground)',
          '--color-popover': 'var(--popover)',
          '--color-popover-foreground': 'var(--popover-foreground)',
          '--color-primary': 'var(--primary)',
          '--color-primary-foreground': 'var(--primary-foreground)',
          '--color-secondary': 'var(--secondary)',
          '--color-secondary-foreground': 'var(--secondary-foreground)',
          '--color-muted': 'var(--muted)',
          '--color-muted-foreground': 'var(--muted-foreground)',
          '--color-accent': 'var(--accent)',
          '--color-accent-foreground': 'var(--accent-foreground)',
          '--color-destructive': 'var(--destructive)',
          '--color-destructive-foreground': 'var(--destructive-foreground)',
          '--color-border': 'var(--border)',
          '--color-input': 'var(--input)',
          '--color-ring': 'var(--ring)',
          '--color-chart-1': 'var(--chart-1)',
          '--color-chart-2': 'var(--chart-2)',
          '--color-chart-3': 'var(--chart-3)',
          '--color-chart-4': 'var(--chart-4)',
          '--color-chart-5': 'var(--chart-5)',
          '--radius-sm': 'calc(var(--radius) - 4px)',
          '--radius-md': 'calc(var(--radius) - 2px)',
          '--radius-lg': 'var(--radius)',
          '--radius-xl': 'calc(var(--radius) + 4px)',
          '--color-sidebar': 'var(--sidebar)',
          '--color-sidebar-foreground': 'var(--sidebar-foreground)',
          '--color-sidebar-primary': 'var(--sidebar-primary)',
          '--color-sidebar-primary-foreground':
            'var(--sidebar-primary-foreground)',
          '--color-sidebar-accent': 'var(--sidebar-accent)',
          '--color-sidebar-accent-foreground':
            'var(--sidebar-accent-foreground)',
          '--color-sidebar-border': 'var(--sidebar-border)',
          '--color-sidebar-ring': 'var(--sidebar-ring)',
        },
        '.dark': {
          // Dark mode color variables
          '--background': 'oklch(0.145 0 0)',
          '--foreground': 'oklch(0.985 0 0)',
          '--card': 'oklch(0.145 0 0)',
          '--card-foreground': 'oklch(0.985 0 0)',
          '--popover': 'oklch(0.145 0 0)',
          '--popover-foreground': 'oklch(0.985 0 0)',
          '--primary': 'oklch(0.985 0 0)',
          '--primary-foreground': 'oklch(0.205 0 0)',
          '--secondary': 'oklch(0.269 0 0)',
          '--secondary-foreground': 'oklch(0.985 0 0)',
          '--muted': 'oklch(0.269 0 0)',
          '--muted-foreground': 'oklch(0.708 0 0)',
          '--accent': 'oklch(0.269 0 0)',
          '--accent-foreground': 'oklch(0.985 0 0)',
          '--destructive': 'oklch(0.396 0.141 25.723)',
          '--destructive-foreground': 'oklch(0.637 0.237 25.331)',
          '--border': 'oklch(0.269 0 0)',
          '--input': 'oklch(0.269 0 0)',
          '--ring': 'oklch(0.439 0 0)',
          '--chart-1': 'oklch(0.488 0.243 264.376)',
          '--chart-2': 'oklch(0.696 0.17 162.48)',
          '--chart-3': 'oklch(0.769 0.188 70.08)',
          '--chart-4': 'oklch(0.627 0.265 303.9)',
          '--chart-5': 'oklch(0.645 0.246 16.439)',
          '--sidebar': 'oklch(0.205 0 0)',
          '--sidebar-foreground': 'oklch(0.985 0 0)',
          '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
          '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
          '--sidebar-accent': 'oklch(0.269 0 0)',
          '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
          '--sidebar-border': 'oklch(0.269 0 0)',
          '--sidebar-ring': 'oklch(0.439 0 0)',
        },
      });

      // Add base styles with proper CSS syntax
      addBase({
        '*': {
          borderColor: 'var(--color-border)',
        },
        '*:focus-visible': {
          outline: '2px solid hsl(from var(--color-ring) h s l / 0.5)',
          outlineOffset: '2px',
        },
        body: {
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
        },
      });
    }),
  ],
};
