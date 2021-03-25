import React from 'react'
import { useHistory } from "react-router-dom";

import logo from "../../img/logo.png";

function HeaderRegister (props){

    let history = useHistory();

    function handleClick() {
        history.push("/");
    };

    function handleClickLogin() {
        history.push("/login");
    };
    return(
               
            <div className="headerRegisterComponent">

                <div className="fakeFlixContainer">
                    <img className="imgFakeFlixReg " src={logo} alt="" type="button" onClick={handleClick}/>
                </div>

                <div className="buttonReg" type="button" onClick={handleClickLogin}>Sign in</div>    
            </div>    
    )
}

export default HeaderRegister 