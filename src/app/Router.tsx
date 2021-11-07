import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useThemeContext } from './hooks/ThemeContext';
import { PageStyles } from './PageStyles';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';
import { checkBrowser } from './utils/helpers';

export default function Router(): JSX.Element {
	const { theme } = useThemeContext();

	useEffect(() => {
		console.log('%c...Content loaded', 'color:green');
	}, []);

	return (
		<BrowserRouter>
			<PageStyles theme={theme}>
				<Header />
				<Switch>
					<Route path="/projects" children={<Projects />} />
					<Route path="/contact" children={<Contact />} />
					<Route path="/about" children={<About />} />
					<Route path="/" children={<Home />} />
				</Switch>
			</PageStyles>
		</BrowserRouter>
	);
}
