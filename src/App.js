import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import './App.css';
import UnderDevelopment from './UnderDevelopment.js'
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Authentication from './Authentication'
import { AuthProvider } from "./AuthContext";
import Products from "./Products";

function App() {

  return (
      <AuthProvider>
        <Products />
      </AuthProvider> 
  );
}

export default App;
