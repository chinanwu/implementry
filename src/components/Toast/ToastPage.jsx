import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import Toast from './Toast.jsx';

import './ToastPage.less';

export const ToastPage = () => {
	const [showToast, setShowToast] = useState(false);

	const handleClick = useCallback(() => {
		setShowToast(true);
	}, [setShowToast]);

	return (
		<div className="ToastPage">
			<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum."
			</p>

			<button className="ToastPage__btn" onClick={handleClick}>
				Click me for Toast
			</button>

			{showToast && createPortal(<Toast />, document.body)}
		</div>
	);
};

export default ToastPage;
