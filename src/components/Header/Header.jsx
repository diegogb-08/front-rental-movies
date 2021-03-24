import React from 'react'
import logo from '../../img/logo.png'

function Header(props) {
    return (
        <div className="headerComponent">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header
