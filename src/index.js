import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthContextProvider} from './context/auth-context';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('root'));
