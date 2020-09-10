import React from 'react';
import PropTypes from 'prop-types';

import './NavBar.less';

export const NavBar = () => (
	<div className="NavBar">
		<span>Icon</span>
		<div>
			<button className="NavBar__btn NavBar__btn--inset-boxshadow">Home</button>
			<button className="NavBar__btn NavBar__btn--inset-boxshadow">
				Projects
			</button>
			<button className="NavBar__btn NavBar__btn--underline">Work</button>
			<button className="NavBar__btn NavBar__btn--underline">Contact</button>
		</div>
	</div>
);

NavBar.propTypes = {
	test: PropTypes.string,
};

export default NavBar;
