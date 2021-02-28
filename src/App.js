import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import './App.css';
import UnderDevelopment from './UnderDevelopment.js'
import LandingPage from "./LandingPage";

function App() {
  const [isUnderDev, setIsUnderDev] = React.useState(false)
  if (isUnderDev) {
    return <UnderDevelopment />
  }
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
