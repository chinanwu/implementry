import React from 'react';

import selfie from '../../resources/photo.png';
import lowres_selfie from '../../resources/sm-photo.png';
import LowToHighResImg from '../LowToHighImg/LowToHighResImg.jsx';

import './SampleHome_0.less';

export const SampleHome_0 = () => (
	<div className="SampleHome_0">
		<div className="SampleHome_0--top">
			<div className="SampleHome_0__navBar">
				<button className="SampleHome_0__navBarBtn">Home</button>
				<button className="SampleHome_0__navBarBtn">Projects</button>
				<button className="SampleHome_0__navBarBtn">Work</button>
				<button className="SampleHome_0__navBarBtn">Contact</button>
			</div>
			<div className="SampleHome_0__hero">
				<LowToHighResImg
					className="SampleHome_0__img"
					lowRes={lowres_selfie}
					hiRes={selfie}
					alt="A photo of Salmon"
				/>
				<h1 className="SampleHome_0__name">Salmon Wu</h1>
			</div>
		</div>
		<div>post</div>
	</div>
);

export default SampleHome_0;
