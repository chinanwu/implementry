// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import './AutoToast.less';

export const AutoToast = () => {
	return (
		<div className="AutoToast">
			<div className="AutoToast__content">
				<button className="AutoToast__close" aria-label="Close Toast">
					X
				</button>
				<span className="AutoToast__message">
					Did you know: There are 62 words that are impossible to win with?
					Luckily for y'all I've removed them from the word pool!
				</span>
			</div>
		</div>
	);
};

// AutoToast.propTypes = {
// 	onClose: PropTypes.func,
// };

export default AutoToast;

// · Line height (line spacing) to at least 1.5 times the font size;
// · Spacing following paragraphs to at least 2 times the font size;
// · Letter spacing (tracking) to at least 0.12 times the font size;
// · Word spacing to at least 0.16 times the font size.
// https://medium.com/@sheribyrnehaber/designing-toast-messages-for-accessibility-fb610ac364be
