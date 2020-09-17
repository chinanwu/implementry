import React, { useCallback, useState } from 'react';

import './SampleHome_1.less';

export const SampleHome_1 = () => {
	const [show, setShow] = useState(false);

	const handleClick = useCallback(() => {
		setShow(show => !show);
	}, [show, setShow]);

	return (
		<div className="SampleHome_1">
			<div
				className={
					'SampleHome_1__btn' + (show ? ' SampleHome_1__btn--left' : '')
				}
			>
				<button onClick={handleClick}>Click</button>
			</div>
			<div
				className={'SampleHome_1__box' + (show ? ' Sample_1__box--show' : '')}
			>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum."
			</div>
		</div>
	);
};

export default SampleHome_1;
