import { YouTube } from '@material-ui/icons';
import React from 'react';
import SearchBar from './SearchBar';
import '../styles/components/navbar.css';

const NavBar = (props) => {
	return (
		<nav id="navbar" className="nav navbar app-navbar row">
			<div className="navbar-item brand-item">
				<h1 className="app-title">
					<span className="app-logo">
						<YouTube fontSize="inherit" />
					</span>{' '}
					PlayWatch
				</h1>
			</div>
			<div className="navbar-item search-item">
				<SearchBar {...props} />
			</div>
		</nav>
	);
};

export default NavBar;
