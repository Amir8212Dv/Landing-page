import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/global-components/navbar';
import Footer from './components/global-components/footer';
import Landing from './components/home_components/Landing';
import Products from './components/products_components/products';

class App extends Component {

    constructor() {
        super()
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
        .then(Response => this.setState({products : Response.data}))
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/products' render={props => <Products products={this.state.products} {...props} />} />
                    <Route path='/' component={Landing}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App