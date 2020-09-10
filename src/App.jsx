import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import Hero from './components/Hero/Hero.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<Hero />
		<div>Something after Hero</div>
	</Provider>
);

export default App;
