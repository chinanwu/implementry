import React from 'react';
import PropTypes from 'prop-types';

import './BaymaxItem.less';

export const BaymaxItem = ({ title, buildNum, status, failedTests }) => (
	<div className="BaymaxItem">
		<header>
			{title} <span>{buildNum}</span>
		</header>
		{status}
		{failedTests}
	</div>
);

BaymaxItem.propTypes = {
	title: PropTypes.string,
	buildNum: PropTypes.number,
	status: PropTypes.string,
	failedTests: PropTypes.arrayOf(PropTypes.string),
};

export default BaymaxItem;
