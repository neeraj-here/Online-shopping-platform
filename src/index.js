import React from 'react';
import ReactDOM from 'react-dom';
import { BucketContextProvider } from "./BucketContext";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    
    <BucketContextProvider> <App /> </BucketContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


