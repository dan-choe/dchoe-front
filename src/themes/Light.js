export default {
    palette: {
        primary: {
            light: '#fca47e',
            main: '#ffffff',
            dark: '#242733',
        },
        secondary: {
            light: '#a6ddde',
            main: '#326bc6',
            dark: '#252838',
        },
        error: {
            light: '#f7f7b4',
            main: '#f0d600',
            dark: '#000000',
        },
        temp: {
            light: '#e6ecf0',
            main: '#326bc6',
            dark: '#252838',
        },
        orange: {
            light: '#fca47e',
            main: '#ff5a39',
            dark: '#e85a4f',
        },
        blue: {
            light: '#a6ddde',
            pastel: '#4775b4',
            main: '#326bc6',
            main2: '#2b66e3',
            dark: '#252838',
            darkGrey: '#242733',
        },
        yellow: {
            light: '#f7f7b4',
            main: '#f0d600',
            dark: '#f0d600',
        },
        red: {
            light: '#ed0d32',
            main: '#ed0d32',
            dark: '#ed0d32',
        },
        grey: {
            light: '#e6e6e6',
            main: '#e6e6e6',
            dark: '#e6e6e6',
        },
    },
    status: {
        danger: '#f0d600',
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        h6: {
            fontSize: '1.0rem',
            color: '#000',
        },
    },
    overrides: {
        MuiIconButton: {
          root: {
            padding: 0,
            '&:hover': {
              backgroundColor: "$labelcolor",
            }
          }
        }
    },
    
   
}