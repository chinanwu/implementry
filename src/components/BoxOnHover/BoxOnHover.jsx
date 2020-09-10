import React from 'react';
import PropTypes from 'prop-types';

import './BoxOnHover.less';

export const BoxOnHover = () => (
	<div className="Box__container">
		<div className="Box">Sample text 1</div>
		<div className="Box">Sample tex 2t</div>
	</div>
);

BoxOnHover.propTypes = {
	test: PropTypes.string,
};

export default BoxOnHover;
