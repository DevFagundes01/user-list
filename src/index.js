import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle'

const root = ReactDOM.render(
    <div> 
        <App /> 
        <GlobalStyle />
    </div>, 
    document.getElementById('root')); root.render(<App />);