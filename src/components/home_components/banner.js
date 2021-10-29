import React from 'react';

import styles from './banner.module.css'

import banner from '../../images/banner.jpg'


const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img id={styles.banner} src={banner} alt="Banner"/>  
            <div className={styles.text}>
                <h1>React</h1>
                <p>Basic landing page with <span>React.js</span></p>
            </div>
        </div>
    );
};

export default Banner;