import { IAppTheme } from '../hooks/ThemeContext';

interface IColorScheme {
  mainBg: string;
  secondBg: string;
  thirdBg: string;

  heading: string;
  text: string;
  secondText: string;
  buttonText: string;

  base: string;
  secondBase: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

export const lightColors = {
  mainBg: '#eeeefe',
  secondBg: '#41424d',
  thirdBg: '#cdcdde',

  heading: '#0d0d0d',
  text: '#41424d',
  secondText: '#79788a',
  buttonText: '#41424d',

  base: '#eff0f3',
  secondBase: '#fffffe',
  primary: '#ff9900',
  secondary: '#ff8e3c',
  tertiary: '#d9376e',

  // primary" '#4fc4cf'
  // secondary: '#994ff3',
  // tertiary: '#fbdd74'
};

export const darkColors = {
  mainBg: '#282c34',
  secondBg: '#41424d',
  thirdBg: '#41424d',

  heading: '#fffffe',
  text: '#a7a9be',
  secondText: '#6878be',
  buttonText: '#fff',

  base: '#fffffe',
  secondBase: '#a7a9be',
  primary: '#ff8906',
  secondary: '#f25f4c',
  tertiary: '#e53170',
  // primary: '#ff9900',
};

export const AppColors = (theme: IAppTheme): IColorScheme => {
  const selectedTheme = theme === 'light' ? lightColors : darkColors;

  return selectedTheme;
};

// BACKGROUNDS
// mainBg
// secondBg
// thirdBg

// TEXT
// heading
// baseText
// secondText

// WIDGETS & ILLUSTRATIONS
// base
// secondBase
// primary
// secondary
// tertiary
