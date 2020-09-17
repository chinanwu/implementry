import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import AutoToast from './components/Toast/AutoToast.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<AutoToast />
	</Provider>
);

export default App;
