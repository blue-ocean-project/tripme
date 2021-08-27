import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import Store from './state/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement,
);
