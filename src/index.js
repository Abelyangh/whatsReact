import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './components/welcome';

import './style.scss';
const Index = () => {
    return <div > Welcome to React! < /div>;
};

export default hot(ReactDOM.render( < Welcome friendName = "nijia" / > , document.getElementById('root')));