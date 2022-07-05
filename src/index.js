import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/google-sans/ProductSans-Regular.woff'
import '@fortawesome/react-fontawesome';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

