import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './RootReducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, composeEnhancers);
export const persistor = persistStore(store);
