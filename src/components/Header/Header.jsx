import React from 'react'
import logo from '../../img/logo.png'

function Header(props) {
    return (
        <div className="headerComponent">
            <img src={logo} alt="logo"/>
            <div className="buttonLogin">{props.children}</div>
        </div>
    )
}

export default Header
