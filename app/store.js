// Example of creating an initial store with no reducers, which can be
// lazily extended with reducers along with components that need them
import {createStore, compose as origCompose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

// Create basic store which can be extended with `addStore`
export const store = createStore(appReducer, applyMiddleware(thunk));
