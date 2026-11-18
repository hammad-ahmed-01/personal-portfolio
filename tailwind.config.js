module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#0b0e13',
        bone: '#ffffff',
        ash: '#9a9a9a',
        silver: '#bdbdbd',
        iris: '#8052ff',
        saffron: '#ffb829',
        verdant: '#15846e',
      },
      letterSpacing: {
        display: '-0.04em',
        nav: '0.025em',
      },
      borderRadius: {
        pill: '24px',
      },
      maxWidth: {
        page: '1280px',
      },
    },
  },
  plugins: [],
}
