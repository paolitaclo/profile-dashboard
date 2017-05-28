import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App url='https://localhost:3001/api/users' pollInterval={200} />,
  document.getElementById('root'));
registerServiceWorker();
