import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './RippleBtn.less';

export const RippleBtn = () => {
	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 1200);
		} else setIsRippling(false);
	}, [coords]);

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	return (
		<button
			className="ripple-button"
			onClick={e => {
				const rect = e.target.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				setCoords({ x, y });
			}}
		>
			{isRippling ? (
				<span
					className="ripple"
					style={{
						left: coords.x + 10,
						top: coords.y,
					}}
				/>
			) : (
				''
			)}
			<span className="content">Click me</span>
		</button>
	);
};

export default RippleBtn;
