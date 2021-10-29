import React from 'react';
import styles from './navbar.module.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header id={styles.navbar}>
            <div className={styles.navbarItems}>
                <ul>
                    <li><Link to='/'>Home page</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/aboutUs'>About us</Link></li>
                </ul>
            </div>
            <div id={styles.Logo}>
                <img src={logo} alt='logo'/>
            </div>
        </header>
    );
};

export default Navbar;