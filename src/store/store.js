import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { generalReducer } from '../reducers/generalReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    global : generalReducer
});


export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);