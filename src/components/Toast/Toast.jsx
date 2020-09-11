import React, { useEffect, useState } from 'react';

import './Toast.less';

export const Toast = () => {
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
		}, 11000);
	}

	return (
		<div className={'Toast' + (visible ? '' : '--hidden')}>
			<div className="Toast__content">
				<div className="Toast__msg">I'm just a simple toast message!</div>
				<div className="Toast__countdown" />
			</div>
		</div>
	);
};

export default Toast;
//https://stackoverflow.com/questions/24171226/removing-element-from-dom-after-set-amount-of-time
