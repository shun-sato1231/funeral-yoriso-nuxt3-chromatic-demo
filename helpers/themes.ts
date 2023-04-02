import { ThemeDefinition } from 'vuetify';

// String that represents the name of the theme I am using
export const MAIN_THEME = 'mainTheme';
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#F3D45B',
    secondary: '#FBFAF6',
    darken: '#545458',
    darkest: '#757580',
    lighten: '#aaa',
    error: '#C25155',
    accent: '#CE7B4C',
    accent2: '#4071A1',
    anchor: '#006ada',
    primaryText: '#545458',
    formText: '#fcfbe9',
    discountBlue: '#21559b',
    accentLighten: '#F7F7F7',
    accentLighten2: '#e7e0ba',
    accentLighten3: '#f3f0e4',
    accentLighten4: '#fbfaf5',
    accentLighten5: '#F4F0E4',
    accentDarken: '#985253',
  },
};

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = 'mainDarkTheme';
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {},
};
