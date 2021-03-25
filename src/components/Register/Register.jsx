import React from "react";


// IMPORT COMPONENTS

import HeaderRegister from '../HeaderRegister/HeaderRegister';

// import ErrorRegister from '../ErrorRegister/ErrorRegister';   
  
import FirstStepRegister from "../FirstStepRegsiter/FirstStepRegister";
import FooterRegister from "../FooterRegister/FooterRegister";





const Register = (props) => {

    return (
        <div className="registerContainer">            
            <HeaderRegister/>            
            <div className="superformReg">
                <FirstStepRegister/>
            </div>
            <FooterRegister/>
        </div>
    )
};

export default Register;