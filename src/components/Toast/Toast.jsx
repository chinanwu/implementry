import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import './Toast.less';

export const Toast = ({ onClose }) => {
	const [visible, setVisible] = useState(true);
	let timer = null;

	useEffect(() => {
		setTimer();
	}, []);

	function setTimer() {
		if (timer != null) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			setVisible(!visible);
			timer = null;
			onClose();
		}, 6000);
	}

	return (
		<div className={'Toast' + (visible ? '' : '--hidden')}>
			<div className="Toast__content">
				<button className="Toast__close" aria-label="Close" onClick={onClose}>
					X
				</button>
				<div className="Toast__msg">I'm just a simple toast message!</div>
				<div className="Toast__countdown" />
			</div>
		</div>
	);
};

Toast.propTypes = {
	onClose: PropTypes.func,
};

export default Toast;
//https://stackoverflow.com/questions/24171226/removing-element-from-dom-after-set-amount-of-time
