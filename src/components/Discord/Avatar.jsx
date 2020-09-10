import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import './Avatar.less';

export const Avatar = ({ avatar, children }) => {
	const [isClicked, setClicked] = useState(false);
	const [bounce, setBounce] = useState(false);

	const handleClick = useCallback(() => {
		setClicked(isClicked => !isClicked);
	}, [isClicked, setClicked]);

	const handleBounce = useCallback(() => {
		setBounce(bounce => !bounce);
	}, [bounce, setBounce]);

	return (
		<div className="Discord__avatar">
			<span
				className={
					'Discord__avatarNotification' +
					(isClicked ? ' Discord__avatarNotification--clicked' : '')
				}
			/>

			<button
				className={
					'Discord__avatarBtn' +
					(isClicked ? ' Discord__avatarBtn--clicked' : '') +
					(bounce ? ' Discord__avatarBtn--down' : '') +
					(avatar ? '' : ' Discord__avatarBtn--no-padding')
				}
				onClick={handleClick}
				onMouseDown={handleBounce}
				onMouseUp={handleBounce}
			>
				{avatar ? <strong>{avatar}</strong> : children}
			</button>
		</div>
	);
};

Avatar.propTypes = {
	avatar: PropTypes.string,
	children: PropTypes.any,
};

export default Avatar;
