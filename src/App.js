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
import Payment from './Payment'
import { AuthProvider } from "./AuthContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BucketContextProvider, useBucketContext } from "./BucketContext";
import './App.css'
import PrivateRoute from "./PrivateRoute";
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { bucketItems, totalPrice } = useBucketContext()
  const totalItems = bucketItems.length
  const totalPieces = bucketItems.reduce((pieces, item) => Number(pieces) + Number(item.qty), 0)

  return (
    <AuthProvider>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'> <LandingPage /> </Route>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />         
            <PrivateRoute path='/products' component={Products} /> 
            <Route path='/about'> <About /> </Route>
            <Route path='/contact'> <Contact /> </Route>
            <PrivateRoute path='/bucket' component={Bucket} />
            <Route path='/payment'>
              <Payment totalItems={totalItems} totalPieces={totalPieces} totalPrice={totalPrice} />
            </Route>
            <Route path='*'> <Error /> </Route>
          </Switch>
          <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
