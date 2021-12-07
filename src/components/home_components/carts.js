import React , {Component} from 'react';
import {v4} from 'uuid'

import styles from '../../styles/css/carts.module.css'

import Cart from '../global-components/cart'

import iphon11 from '../../images/iphone11.jpg'
import iphon12 from '../../images/iphone12.jpg'
import iphon13 from '../../images/iphone13.jpg'
import samsungS21 from '../../images/s21.jpg'

class Carts extends Component{

    constructor() {
        super()
        this.state = {
            products : [
                {name : 'iphone 11' , price : 1000 , image : iphon11},
                {name : 'iphone 12' , price : 1100 , image : iphon12},
                {name : 'iphone 13' , price : 1500 , image : iphon13},
                {name : 'samsung S21' , price : 1200 , image : samsungS21}
            ]
        }
    }
    
    render(){
        return (
            <div className={styles.carts}>
                {this.state.products.map(phone => {
                    return <Cart key={v4()} name={phone.name} price={phone.price} image={phone.image}/>    
                    })
                }
                </div>
    );}
};

export default Carts;