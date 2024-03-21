import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdrertCart } from 'components/AdvertCart';
import './index.css';
import { GlobalStyles } from 'components/globalStyled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdrertCart />
    <GlobalStyles />
  </React.StrictMode>
);
