import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import mirageConfig from './mirage-config';

mirageConfig();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
