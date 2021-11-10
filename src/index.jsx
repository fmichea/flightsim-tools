import React from 'react';

import ReactDOM from 'react-dom';

import { App } from 'App';

import 'reset-css';
import 'antd/dist/antd.css';

const root = document.getElementById('root') || document.createElement('div');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root,
);
