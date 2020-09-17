import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

export const LowToHighResImg = ({ className, alt, hiRes, lowRes }) => {
	const [img, setImg] = useState(lowRes);

	const handleOnLoad = useCallback(() => {
		setImg(hiRes);
	}, [setImg]);

	return (
		<img className={className} src={img} alt={alt} onLoad={handleOnLoad} />
	);
};

LowToHighResImg.propTypes = {
	hiRes: PropTypes.string,
	lowRes: PropTypes.string,
};

export default LowToHighResImg;
