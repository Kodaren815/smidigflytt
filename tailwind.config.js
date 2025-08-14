/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'smidig-blue': "#3361AC",
        'smidig-lightgray': "#E7E6DD", 
        'smidig-lightyellow': "#E8C766",
        'smidig-yellow': "#E8AF30",
        'smidig-darkblue': "#162F65",
        'smidig-deepblue': "#0F2043",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3361AC 0%, #E8C766 100%)',
        'gradient-secondary': 'linear-gradient(120deg, #162F65 0%, #E7E6DD 100%)',
        'gradient-cta': 'linear-gradient(135deg, #E8AF30 0%, #E8C766 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
