export default {
    palette: {
        primary: {
            light: '#fca47e',
            main: '#242733',
            dark: '#4775b4',
            constrastText: '#cc0000'
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
        }
    },
    status: {
        danger: '#2b66e3',
    },
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiButton: {
            text: {
                background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 24,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
        },
    }
}

// red: ed0d32
// grey e6e6e6

// light yellow f7f7b4
// yellow f0d600

// blue1 326bc6
// blue2 2b66e3
// lightblue a6ddde
// pastelblue 4775b4
// darkblue 252838
// darkgreyblue 242733