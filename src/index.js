import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux' 
import listsReducer from './reducers/listsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

const initialState = {lists: [{id: 1, name: "Leo"}, {id: 2, name: "Henry"}, {id: 3, name: "Harrison"}]}
const store = createStore(listsReducer, initialState, composeWithDevTools())
console.log(store)

ReactDOM.render(
  <Router >
    <Provider store={store}>
  <App/>
  </Provider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
new Router({children: [new App()]})