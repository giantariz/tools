export default {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#6366f1',
              dark: '#4f46e5'
            },
            secondary: {
              DEFAULT: '#ec4899',
              dark: '#db2777'
            }
          },
          backgroundImage: {
            'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            'gradient-secondary': 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)'
          }
        }
      },
      plugins: []
    }
