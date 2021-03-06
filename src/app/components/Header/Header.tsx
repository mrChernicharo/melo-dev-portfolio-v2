import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

// import Switch from 'react-switch'; breaks the app in prod due to commonjs/es6 confusions.
// The solution that works both in dev and prod is to import like this:
// @ts-ignore
import Switch from 'react-switch/dist/react-switch.dev.js';

import { useThemeContext } from '../../hooks/ThemeContext';
import Nav from '../Nav/Nav';
import { Styles } from './Styles';
import { checkBrowser } from '../../utils/helpers';

export default function Header(): JSX.Element {
	const { theme, toggleTheme } = useThemeContext();

	const [checked, setChecked] = useState(() => {
		const initialTheme = localStorage.getItem('theme');
		return initialTheme && initialTheme === 'dark' ? true : false;
	});
	const [scrollPos, setScrollPos] = useState(0);
	const [browser, setBrowser] = useState('');

	const htmlElement = document.querySelector('html');

	function handleThemeToggle() {
		setChecked(!checked);
		toggleTheme();
	}

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	useEffect(() => {
		console.log(browser);
	}, [browser]);

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setScrollPos(htmlElement?.scrollTop || 0);
		});
		setBrowser(checkBrowser());
	}, []);

	return (
		<Styles
			theme={theme}
			browser={browser}
			className={scrollPos > 120 ? 'whitdrawn' : 'expanded'}
		>
			<div>
				<FaCode size={36} />
			</div>

			<Link to="/">
				<div>Felipe Chernicharo</div>
			</Link>

			<section>
				<Switch
					id="theme"
					checked={checked}
					onChange={handleThemeToggle}
					checkedIcon={<FaSun size={18} />}
					uncheckedIcon={<FaMoon size={16} />}
					activeBoxShadow="0 0 2px 3px #ff8800"
					onColor="#ff8800"
					height={22}
					width={50}
					handleDiameter={18}
				/>
				<Nav scrollPos={scrollPos} />
			</section>
		</Styles>
	);
}
