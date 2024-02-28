import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import myFirstReducer from './reducer';
import mySaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const  rootReducer = combineReducers({myFirstReducer})

const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mySaga)   // method to start a redux saga
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
