import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/index';

const store = createStore(
  reducers,
  {}, // initial state is handled by the specific reducers
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
export default store;
