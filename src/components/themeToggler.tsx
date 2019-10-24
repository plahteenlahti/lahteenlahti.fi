import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
import Toggle from 'react-toggle';
import './themeToggler.css';

const ToggleTheme = () => {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }: any) => (
				<label>
					<Toggle
						defaultChecked={theme === 'dark'}
						onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
					/>
				</label>
			)}
		</ThemeToggler>
	);
};

export default ToggleTheme;
