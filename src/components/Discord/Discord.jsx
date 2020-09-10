import React from 'react';

import github from '../../resources/github.png';

import Avatar from './Avatar.jsx';

import './Discord.less';

export const Discord = () => {
	return (
		<div className="Discord">
			<Avatar avatar="SW" />
			<Avatar>
				<img className="Discord__img" src={github} alt="Photo of github icon" />
			</Avatar>
		</div>
	);
};

export default Discord;
