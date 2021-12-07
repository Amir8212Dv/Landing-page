import React , { Component } from 'react';

import styles from '../../styles/css/cart.module.css'

import down from '../../images/down.svg'
import up from '../../images/up.svg'


class Cart extends Component {
    constructor () {
        super()
        this.state = {
            count : 0
        }
    }
    
    plusHandler = () => {
        this.setState (prevState => ({count : prevState.count + 1}))
    }

    subtractHandler = () => {
        if (this.state.count > 0) {
            this.setState (prevState => ({count : prevState.count - 1}))
        }
    }

    render() {
        const {name , price , image} = this.props
        let totalPrice = parseInt(price) * this.state.count || ''

        return (
            <div className={styles.cart}>
                <div className={styles.image}>
                    <img src={image} alt={name}/>
                </div>
                <div className={styles.name}>
                    <h3>{name}</h3>
                </div>

                <p className={styles.price}>{price} $</p>

                <div className={styles.counter}>
                    {totalPrice && <p className={styles.totalPrice}>{totalPrice} $</p>}

                    <div>
                        <img src={down} alt="down-sign" className={this.state.count ? styles.sign : styles.deactive} onClick={this.subtractHandler}/>
                        <span>{this.state.count}</span>
                        <img src={up} alt="up-sign" className={styles.sign} onClick={this.plusHandler}/>
                    </div>

                </div>

            </div>
    )}
};

export default Cart;