import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<App />);

/** Running on React 17 but not React 18 **/
// ReactDOM.render(<App />, document.querySelector('#root'));
