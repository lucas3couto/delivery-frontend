import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './container/Home'
import Category from './container/Category'
import Product from './container/Product'
import Cart from './container/Cart'

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:id" component={Category} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
    )
}

export default Routes