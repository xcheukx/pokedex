/*
* @Author: 卓圳宝
* @Date:   2017-08-30 14:03:30
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-30 14:06:37
*/

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from '../reducers'

export default function storeConfig(initialState = {}) {
	const middlewares = [thunkMiddleware];

	let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const loggerMiddleware = createLogger()
	middlewares.push(loggerMiddleware)
	
	return createStore(
    	todoApp,
    	initialState,
    	composeEnhancers(
    		applyMiddleware(...middlewares)
    	)
	)
}
