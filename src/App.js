import React, { Component } from 'react';
import { Route , Routes } from 'react-router-dom';
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
                <Routes>
                    <Route path='/products' element={<Products products={this.state.products}/>} />
                    <Route path='/' element={<Landing />}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App