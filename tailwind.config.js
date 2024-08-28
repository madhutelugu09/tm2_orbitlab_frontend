module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',  // Adjust these paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        customBorder: '#3A3A3A',
        customSideBarText: '#707070',
        sidebar: {
          DEFAULT: '#000000', // Custom color for the sidebar background
        },
        header: {
          DEFAULT: '#000000', // Custom color for the header background
        },
        footer: {
          DEFAULT: '#000000', // Custom color for the footer background
        },
        bodyBg: {
          DEFAULT: '#000000', // Custom color for the body background
        },
      },
      spacing: {
        'header-height': '4rem', // Custom spacing for header height
        'footer-height': '3rem', // Custom spacing for footer height
        'sidebar-width': '16rem', // Custom spacing for sidebar width
      },
    },
  },
  plugins: [],
}
