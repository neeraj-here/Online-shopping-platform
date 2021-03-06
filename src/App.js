import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import './App.css';
import UnderDevelopment from './UnderDevelopment.js'
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

function App() {
  const [isUnderDev, setIsUnderDev] = React.useState(false)
  if (isUnderDev) {
    return <UnderDevelopment />
  }
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
