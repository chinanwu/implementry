import React, { useEffect, useState } from 'react';

import './NameHeader.less';

const getNextLetter = (name, isPreferred) => {
	const complete = isPreferred ? 'SALMON' : 'CHIN-AN';
	return complete.substring(name.length, name.length + 1);
};

export const NameHeader = () => {
	const [name, setName] = useState('SALMON');
	const [isPreferred, setIsPreferred] = useState(true);
	const [goBack, setGoBack] = useState(true);

	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			setName(name => {
				if (goBack) {
					if (name.length > 1) {
						return name.substring(0, name.length - 1);
					} else {
						setGoBack(false);
						setIsPreferred(isPreferred => !isPreferred);
						return '';
					}
				} else {
					const nameLen = isPreferred ? 6 : 7;

					if (name.length < nameLen) {
						return name + getNextLetter(name, isPreferred);
					} else {
						setGoBack(true);
						return name;
					}
				}
			});
		}, 500);

		return () => clearInterval(interval);
	}, [goBack, isPreferred, setName, setGoBack, setIsPreferred]);

	return (
		<h1 className="NameHeader">
			<div className="NameHeader__name">{name}</div>{' '}
			<span className="NameHeader__cursor">|</span>
		</h1>
	);
};

export default NameHeader;
