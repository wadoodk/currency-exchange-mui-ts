import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#94c720',
    },
    text: {
      primary: '#404040',
      secondary: '#8d8d8d',
    },
    warning: {
      main: '#c70d38',
    },
    background: {
      default: '#e4f0e2',
    },
  },
  typography: {
    h1: {
      fontSize: 48,
    },
    h3: {
      fontWeight: 700,
      fontSize: 24,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 800,
    },
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 250,
          width: 250,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          // paddingLeft: 0
        },
      },
    },
  },
});

export default theme;
