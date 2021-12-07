import React , {Component} from 'react';

import styles from '../../styles/css/search.module.css'

import searchIcon from '../../images/search.png'

class Search extends Component {
    constructor () {
        super()
        this.state = {
            text : ''
        }
    }

    searchHandler = event => {
        this.setState ({
            text : event.target.value
        })
    }

    render () {
        const {text} = this.state
        return (
            <div className={styles.container}>
                <p>Search What You Want</p>
                <div>
                    <input type="text" value={text} onChange={this.searchHandler} placeholder="Search ..." />
                    <img className={styles.searchIcon} src={searchIcon} alt ="search-Icon" />
                </div>
            </div>
        );
    }
};

export default Search;