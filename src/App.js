import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import './App.css';
import UnderDevelopment from './UnderDevelopment.js'
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Authentication from './Authentication'
import { AuthProvider } from "./AuthContext";
import Products from "./Products";
import Footer from "./Footer";
import Bucket from "./Bucket";
import { bucket } from './data'

function App() {
  const [bucketItems, setBucketItems] = React.useState(bucket)

  return (
    <AuthProvider>
      <Navbar />
      <Products setBucketItems={setBucketItems} />
      <Bucket bucketItems = {bucketItems} />
      <Footer />
    </AuthProvider> 
  );
}

export default App;
