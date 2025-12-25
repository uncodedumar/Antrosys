// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // ... other config
    theme: {
      extend: {
        keyframes: {
          'slide-in': {
            '0%': { transform: 'translateX(100vw)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          // We use a CSS variable (--slide-delay) for the stagger
          'slide-in': 'slide-in 0.8s ease-out var(--slide-delay) forwards',
        },
      },
    },
    // ... other config
  };