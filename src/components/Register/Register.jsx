import React from "react";


// IMPORT COMPONENTS
import HeaderRegister from '../HeaderRegister/HeaderRegister';
import ErrorRegister from '../ErrorRegister/ErrorRegister';     
import Button from '../../components/Button/Button';
import InputForm from '../../components/InputForm/InputForm';





const Register = (props) => {

    return (
        <div className="registerContainer">            
                <HeaderRegister/>            
            <div className="superformReg">
                <div className="formReg">
                    <ErrorRegister/>
                    <p className="pFormRegUp">Welcome back geeks!</p>
                    <p className="pFormRegUp">Joining Fakeflix is easy.</p>
                    <p className="pFormRegMid">Enter your password and you'll be watching in no time.</p>
                    <p className="pFormRegMid">Email
                        <div className="propsEmailReg">user@gmail.com</div>
                    </p>                   
                        <InputForm type="password" name="password" title="Password"/>
                        <div className="buttonFormReg"><Button name="Continue"/></div>                    
                    
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