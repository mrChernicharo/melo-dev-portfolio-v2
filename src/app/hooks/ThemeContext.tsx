import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type IAppTheme = 'light' | 'dark';

export interface IThemeContextProviderProps {
  children: ReactNode;
}

export interface IThemeContext {
  theme: IAppTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: IThemeContextProviderProps): JSX.Element {
  const [theme, setTheme] = useState<IAppTheme>('light');

  function handleToggleTheme() {
    const t = theme === 'dark' ? 'light' : 'dark';
    setTheme(t);
    // asyncStorageSetFavoriteTheme(t);
  }

  // async function retrieveTheme() {
  //     const favorite = await asyncStorageGetFavoriteTheme();
  //     console.log('retrieved theme: ', favorite);
  //     setTheme(favorite);
  // }

  // useEffect(() => {
  //     retrieveTheme();
  // }, []);

  const context: IThemeContext = {
    theme,
    toggleTheme: handleToggleTheme,
  };

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
}

export function useThemeContext(): IThemeContext {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const colors = AppColors(theme);
  return { theme, toggleTheme };
}
