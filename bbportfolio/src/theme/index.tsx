import { createTheme, type PaletteOptions, type Theme, } from "@mui/material/styles";

const lightPalette: PaletteOptions = {
  primary: {
    main: "#1a237e",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: '#651fff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828'
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00'
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1'
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c'
  },
  background: {
    default: "#F4F7FB",
    paper: "#FFFFFF",
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  }
}

const darkPalette: PaletteOptions = {
  primary: {
    main: "#9FA8DA",
    contrastText: "#101426",
  },
  secondary: {
    main: "#B39DDB",
    contrastText: "#1A1020",
  },
  error: { main: "#F28B82" },
  warning: { main: "#FFCC80" },
  info: { main: "#81D4FA" },
  success: { main: "#A5D6A7" },
  background: {
    default: "#101827",
    paper: "#182438",
  },
  text: {
    primary: "#F1F4FA",
    secondary: "#B7C2D3",
    disabled: "rgba(241, 244, 250, 0.38)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  action: {
    active: "#FFFFFF",
    hover: "rgba(255, 255, 255, 0.08)",
    selected: "rgba(255, 255, 255, 0.16)",
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
  },
  grey: {
    50: "#F5F5F5",
    100: "#E0E0E0",
    200: "#BDBDBD",
    300: "#9E9E9E",
    400: "#757575",
    500: "#616161",
    600: "#424242",
    700: "#303030",
    800: "#212121",
    900: "#121212",
  },
};

export const theme: Theme = createTheme({
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 500
    },
    button: {
      textTransform: 'capitalize'
    }
  },
  shape: {
    borderRadius: 4
  },
  transitions: {
    duration: {
      standard: 300
    }
  }
})
