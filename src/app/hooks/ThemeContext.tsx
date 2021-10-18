import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

export type IAppTheme = 'light' | 'dark';

export interface IThemeContextProviderProps {
	children: ReactNode;
}

export interface IThemeContext {
	theme: IAppTheme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
	theme: 'dark',
	toggleTheme: () => {},
});

export function ThemeContextProvider({
	children,
}: IThemeContextProviderProps): JSX.Element {
	const [theme, setTheme] = useState<IAppTheme>('dark');

	function handleToggleTheme() {
		const t = theme === 'dark' ? 'light' : 'dark';
		setTheme(t);
		setFavoriteTheme(t);
	}

	async function getFavoriteTheme() {
		const favorite = localStorage.getItem('theme');
		return favorite as IAppTheme;
	}

	async function setFavoriteTheme(theme: IAppTheme) {
		localStorage.setItem('theme', theme);
	}

	async function retrieveTheme() {
		const favorite = await getFavoriteTheme();
		setTheme(favorite);
		return favorite;
	}

	useEffect(() => {
		retrieveTheme();
	}, []);

	const context: IThemeContext = {
		theme,
		toggleTheme: handleToggleTheme,
	};

	return (
		<ThemeContext.Provider value={context}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext(): IThemeContext {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return { theme, toggleTheme };
}
