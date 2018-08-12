import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Gowtham</strong>, a creative<br /> front-end developer from India,<br />
                    working at <a href="https://zoho.com" target="_blank">ZOHO</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
