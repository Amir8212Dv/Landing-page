import React, { Component } from 'react';

import styles from '../../styles/css/products.module.css'

import Cart from '../global-components/cart';


class Products extends Component {
    
    render() {
        return (
            <div className={styles.carts}>
                {this.props.products.map(product => <Cart name={product.title} price={product.price} image={product.image} key={product.id} />)}
            </div>
        );
    }
}

export default Products;