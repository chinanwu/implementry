import React from 'react';
import PropTypes from 'prop-types';

import './BoxOnHover.less';

export const BoxOnHover = () => (
	<div className="Box__container">
		<div className="Box">
			<header className="Box__header">
				<h1>Delta</h1>
			</header>
			<p>A word game made with React, Redux, Golang, and love.</p>
		</div>
		<div className="Box">Sample tex 2t</div>
	</div>
);

BoxOnHover.propTypes = {
	test: PropTypes.string,
};

export default BoxOnHover;
