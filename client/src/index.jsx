/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Price from './components/Price';

console.log(window.location.href);

ReactDOM.render(<Price data={window.location.href} />, document.getElementById('app'));
