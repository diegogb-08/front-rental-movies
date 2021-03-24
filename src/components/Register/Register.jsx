import React from "react";

// IMPORT COMPONENTS
import Button from '../Button/Button';

// IMPORT IMG
import logo from "../../img/logo.png";



const Register = (props) => {
    return (
        <div className="registerContainer">
            <div className="headerReg">

                <div className="fakeFlixContainer"><img src={logo} alt=""/></div>
                <div className="buttonReg">Sign in</div>    
    
            </div>

            <div className="superformReg">
                <div className="formReg">
                    <p className="pFormRegUp">Welcome back geeks!</p>
                    <p className="pFormRegUp">Joining Fakeflix is easy.</p>
                    <p className="pFormRegMid">Enter your password and you'll be watching in no time.</p>
                    <p className="pFormRegMid">Email
                        <div className="propsEmailReg">user@gmail.com</div>
                    </p>

                    <div className="inputFormReg">Input</div>
                    <div className="errorBoxReg">Error message</div>
                    <div className="buttonFormReg">Continue</div>
                </div>

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