import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import BoxOnHover from './components/BoxOnHover/BoxOnHover.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<BoxOnHover />
	</Provider>
);

export default App;
