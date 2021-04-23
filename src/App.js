import React from "react";
import LandingPage from "./LandingPage";
import Navbar from './Navbar'
import Bucket from "./Bucket";
import Error from './Error'
import SignUp from './SignUp'
import Login from './Login'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import { AuthProvider } from "./AuthContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BucketContextProvider } from "./BucketContext";
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Router>
        <BucketContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/'> <LandingPage /> </Route>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />         
            <Route path='/products'> <Products /> </Route>
            <Route path='/about'> <About /> </Route>
            <Route path='/contact'> <Contact /> </Route>
            <Route path='/bucket' component={Bucket} />
            <Route path='*'> <Error /> </Route>
          </Switch>
        </BucketContextProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
