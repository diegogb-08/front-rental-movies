import React from "react";


// IMPORT COMPONENTS
import HeaderRegister from '../HeaderRegister/HeaderRegister';
import ErrorRegister from '../ErrorRegister/ErrorRegister';     
import FirstStepRegister from "../FirstStepRegsiter/FirstStepRegister";





const Register = (props) => {

    return (
        <div className="registerContainer">            
                <HeaderRegister/>            
            <div className="superformReg">
                    <ErrorRegister/>
                    <FirstStepRegister/>

            </div>


            <div className="footerReg">

                <div className="footerRegUp">
                    <p className="pReg" className="pRegFirst">Questions? Contact us.</p>
                </div>

                <div className="footerRegMid">
                    <p className="pReg">FAQ</p>
                    <p className="pRegSecond">Help Center</p>
                    <p className="pRegThird">Terms of Use</p>
                    <p className="pReg">Privacy</p>
                </div>

                <div className="footerRegDown">
                    <p className="pReg">Cookie Preferences</p>
                    <p className="pReg" className="pRegLast">Corporate information</p>
                </div>
            </div>    
        </div>
    )
};

export default Register;