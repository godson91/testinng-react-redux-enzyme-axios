import React from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';


const initialState = {};
const store = createStore(reducers,initialState,applyMiddleware(reduxPromise))


export default (props) => {
    return (
        <Provider store= {store}>
            {props.children}
        </Provider>
    );
};