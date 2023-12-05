import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const configs = {
  header: "Hello, world",
  description: "This is my react app"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App item={{configs: configs}}/>
  </React.StrictMode>
);

