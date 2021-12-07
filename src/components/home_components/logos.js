import React from 'react';

import styles from '../../styles/css/logos.module.css'

import Apple from '../../images/apple.jpg'
import Samsung from '../../images/samsung.jpg'
import Xiaomi from '../../images/xiaomi.png'



const Logos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>Who Support Us ?</p>
            </div>
            <div className={styles.images}>
                <img src={Apple} alt="apple"/>
                <img src={Samsung} alt="samsung"/>
                <img src={Xiaomi} alt="xiaomi"/>
            </div>
        </div>
    );
};

export default Logos;