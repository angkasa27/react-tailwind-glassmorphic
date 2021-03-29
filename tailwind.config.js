module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      height: {
        screen90: '90vh',
        screen80: '80vh',
        screen70: '70vh',
        screen60: '60vh',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translate(0, -1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        bgUp: {
          '0%, 100%': { transform: 'translate(0, 0rem)' },
          '50%': { transform: 'translate(0, 1rem)' },
        },
        up: {
          from: { transform: 'translate(0, 2rem)', opacity: '0%' },
          to: { transform: 'translate(0, 0rem)', opacity: '100%' },
        },
        down: {
          from: { transform: 'translate(0, -2em)', opacity: '0%' },
          to: { transform: 'translate(0, 0rem)', opacity: '100%' },
        },
        left: {
          from: { transform: 'translate(2rem, 0)', opacity: '0%' },
          to: { transform: 'translate(0, 0rem)', opacity: '100%' },
        },
        right: {
          from: { transform: 'translate(-2em, 0)', opacity: '0%' },
          to: { transform: 'translate(0, 0rem)', opacity: '100%' },
        },
        scaleUp: {
          from: { transform: 'scale(.7,.7)', opacity: '0%' },
          to: { transform: 'scale(1,1)', opacity: '100%' },
        },
        modalDown: {
          '0%': { transform: 'translate(-50%, -40%)', opacity: '0%' },
          '100%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
        },
      },
      animation: {
        upDown: 'upDown 5s ease-in-out infinite',
        itemUp: 'up 0.5s ease-in-out',
        itemDown: 'down 0.5s ease-in-out',
        itemLeft: 'left 0.5s ease-in-out',
        itemRight: 'right 0.5s ease-in-out',
        scale: 'scaleUp 0.5s ease-in-out',
        modalDown: 'modalDown .3s ease-out',
      },
      scale: {
        165: '1.65',
        170: '1.70',
        175: '1.75',
        200: '2',
      },
      fontSize: {
        '12xl': '12rem',
        '15xl': '15rem',
        '20xl': '20rem',
      },
      inset: {
        '1/6': '16.666667%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/10': '10%',
        '5/100': '5%',
        '7/100': '7%',
        '11/12': '91.666667%',
        '5/6': '83.333333%',
        '85/100': '85%',
        '87/100': '87%',
      },
    },
  },
  variants: {},
  plugins: [],
};
