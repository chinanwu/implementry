import React from 'react';
import PropTypes from 'prop-types';

import selfie from '../../resources/photo.png';
import lowres_selfie from '../../resources/sm-photo.png';

import LowToHighResImg from '../LowToHighImg/LowToHighResImg.jsx';
import NavBar from '../NavBar/NavBar.jsx';

import './Hero.less';

export const Hero = () => {
	return (
		<div className="Hero">
			<NavBar />
			<h1 className="Hero__header">
				SALM
				<span>
					<LowToHighResImg
						className="Hero__img"
						alt="A nice photo of Salmon"
						hiRes={selfie}
						lowRes={lowres_selfie}
					/>
				</span>
				N WU
			</h1>
		</div>
	);
};

Hero.propTypes = {
	test: PropTypes.string,
};

export default Hero;

//https://medium.com/front-end-weekly/how-to-optimize-image-loading-on-your-website-855020fb41ae
//https://medium.com/frontend-digest/progressively-loading-images-in-react-107cb075417a!!!
// But most importantly, the one that helped: https://www.javascriptstuff.com/detect-image-load/
