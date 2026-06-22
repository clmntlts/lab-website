/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#1A1A2E',
        paper: '#F7F7F5',
        accent: {
          DEFAULT: '#2563EB',
          muted: '#DBEAFE',
          dark: '#1D4ED8',
        },
        margin: '#E53E3E',
        surface: '#FFFFFF',
        'ink-muted': '#4B5563',
        'ink-faint': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            fontFamily: theme('fontFamily.serif').join(', '),
            maxWidth: '72ch',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.paper'),
            '--tw-prose-headings': '#F9FAFB',
            '--tw-prose-links': '#93C5FD',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
