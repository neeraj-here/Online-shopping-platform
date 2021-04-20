import React from 'react'
import Navbar from './Navbar'
import Bucket from './Bucket'
import Error from './Error'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import { Switch, Route } from 'react-router-dom'

function Home() {

    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/home/products'> <Products /> </Route>
                <Route path='/home/about'> <About /> </Route>
                <Route path='/home/contact'> <Contact /> </Route>
                <Route path='*'> <Error /> </Route>
            </Switch>
        </>
    )
}

export default Home