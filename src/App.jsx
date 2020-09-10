import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import Discord from './components/Discord.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<Discord />
	</Provider>
);

export default App;
