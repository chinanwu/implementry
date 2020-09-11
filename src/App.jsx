import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import ToastPage from './components/Toast/ToastPage.jsx';

import './App.less';

const App = () => (
	<Provider store={store}>
		<ToastPage />
	</Provider>
);

export default App;
