import React, { Component } from 'react';

import Banner  from './banner';
import Carts from './carts'
import Search from './search';
import Logos from './logos'

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Carts count={4} />
                <Search />
                <Logos />
            </div>
        );
    }
}

export default Landing;