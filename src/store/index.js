import { createStore, applyMiddleware, compose } from 'redux';

//Middleware
import thunkMiddleware from 'redux-thunk';

// Import custom components
import rootReducer from './reducer';

/**
 * Create a Redux store that holds the app state.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware),
));

export default configureStore;