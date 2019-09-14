import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Registration } from './RegistrationReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Registration 
         }),
        applyMiddleware(thunk, logger)
    );
    return store;
}