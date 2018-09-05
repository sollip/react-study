import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

//리덕스 관련 
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

// store 생성
const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));