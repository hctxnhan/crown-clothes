import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './RootReducer';
import logger from 'redux-logger';

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
const store = createStore(rootReducer, composeEnhancers);
export default store;
