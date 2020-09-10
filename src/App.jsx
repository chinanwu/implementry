import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import NavBar from './components/NavBar/NavBar.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<NavBar />
	</Provider>
);

export default App;
