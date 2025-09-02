module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5016", // deep-forest-green
          50: "#F0F4ED", // light-forest-green
          100: "#D9E5CC", // pale-forest-green
          200: "#B8D199", // soft-forest-green
          300: "#96BD66", // medium-forest-green
          400: "#759A33", // forest-green
          500: "#2D5016", // deep-forest-green
          600: "#244012", // darker-forest-green
          700: "#1B300E", // darkest-forest-green
          800: "#12200A", // ultra-dark-forest-green
          900: "#091006", // near-black-forest-green
        },
        secondary: {
          DEFAULT: "#8B4513", // rich-earth-brown
          50: "#F5F0EB", // light-earth-brown
          100: "#E8D7C7", // pale-earth-brown
          200: "#D4B89F", // soft-earth-brown
          300: "#C09977", // medium-earth-brown
          400: "#AC7A4F", // earth-brown
          500: "#8B4513", // rich-earth-brown
          600: "#70370F", // darker-earth-brown
          700: "#54290B", // darkest-earth-brown
          800: "#381B07", // ultra-dark-earth-brown
          900: "#1C0D04", // near-black-earth-brown
        },
        accent: {
          DEFAULT: "#FF8C42", // warm-harvest-orange
          50: "#FFF4ED", // light-harvest-orange
          100: "#FFE4CC", // pale-harvest-orange
          200: "#FFC999", // soft-harvest-orange
          300: "#FFAE66", // medium-harvest-orange
          400: "#FF8C42", // warm-harvest-orange
          500: "#FF6A1F", // bright-harvest-orange
          600: "#E5551A", // darker-harvest-orange
          700: "#CC4015", // darkest-harvest-orange
          800: "#B32B10", // ultra-dark-harvest-orange
          900: "#99160B", // near-black-harvest-orange
        },
        background: "#FAFAF9", // warm-off-white
        surface: "#F5F5F4", // subtle-warm-gray
        text: {
          primary: "#1C1B1A", // near-black-warm
          secondary: "#6B7280", // medium-gray
        },
        success: {
          DEFAULT: "#16A34A", // fresh-growth-green
          50: "#ECFDF5", // light-success-green
          100: "#D1FAE5", // pale-success-green
          200: "#A7F3D0", // soft-success-green
          300: "#6EE7B7", // medium-success-green
          400: "#34D399", // success-green
          500: "#16A34A", // fresh-growth-green
          600: "#059669", // darker-success-green
          700: "#047857", // darkest-success-green
          800: "#065F46", // ultra-dark-success-green
          900: "#064E3B", // near-black-success-green
        },
        warning: {
          DEFAULT: "#EAB308", // attention-yellow
          50: "#FEFCE8", // light-warning-yellow
          100: "#FEF9C3", // pale-warning-yellow
          200: "#FEF08A", // soft-warning-yellow
          300: "#FDE047", // medium-warning-yellow
          400: "#FACC15", // warning-yellow
          500: "#EAB308", // attention-yellow
          600: "#CA8A04", // darker-warning-yellow
          700: "#A16207", // darkest-warning-yellow
          800: "#854D0E", // ultra-dark-warning-yellow
          900: "#713F12", // near-black-warning-yellow
        },
        error: {
          DEFAULT: "#DC2626", // critical-red
          50: "#FEF2F2", // light-error-red
          100: "#FEE2E2", // pale-error-red
          200: "#FECACA", // soft-error-red
          300: "#FCA5A5", // medium-error-red
          400: "#F87171", // error-red
          500: "#DC2626", // critical-red
          600: "#B91C1C", // darker-error-red
          700: "#991B1B", // darkest-error-red
          800: "#7F1D1D", // ultra-dark-error-red
          900: "#651818", // near-black-error-red
        },
        border: {
          DEFAULT: "#E5E7EB", // warm-gray-border
          light: "#F3F4F6", // light-warm-gray-border
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'agricultural': '0 1px 3px rgba(45, 80, 22, 0.1)',
        'agricultural-md': '0 4px 6px rgba(45, 80, 22, 0.1)',
        'agricultural-lg': '0 10px 15px rgba(45, 80, 22, 0.1)',
        'agricultural-light': '0 1px 3px rgba(45, 80, 22, 0.05)',
        'agricultural-medium': '0 4px 6px rgba(45, 80, 22, 0.15)',
      },
      borderRadius: {
        'agricultural': '4px',
        'sm': '2px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      transitionTimingFunction: {
        'agricultural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'agricultural': '200ms',
        'agricultural-slow': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'grow': 'grow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
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
        grow: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}