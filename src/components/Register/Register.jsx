import React from "react";
import { useHistory } from "react-router-dom";

// IMPORT COMPONENTS
import InputForm from '../../components/InputForm/InputForm';

// IMPORT IMG
import logo from "../../img/logo.png";



const Register = (props) => {

    let history = useHistory();

    function handleClickHome() {
        history.push("/home");
    };

    function handleClickLogin() {
        history.push("/login");
    };



    return (
        <div className="registerContainer">
            <div className="headerReg">

                <div className="fakeFlixContainer"><img src={logo} alt="" type="button" onClick={handleClickHome}/></div>
                <div className="buttonReg" type="button" onClick={handleClickLogin}>Sign in</div>    
    
            </div>

            <div className="superformReg">
                <div className="formReg">
                    <div className="errorDivReg">
                        <div className="iconErrorReg"></div>
                        <p className="errorPropsReg">Incorrect password. Please try again.</p>
                    </div>
                    <p className="pFormRegUp">Welcome back geeks!</p>
                    <p className="pFormRegUp">Joining Fakeflix is easy.</p>
                    <p className="pFormRegMid">Enter your password and you'll be watching in no time.</p>
                    <p className="pFormRegMid">Email
                        <div className="propsEmailReg">user@gmail.com</div>
                    </p>                   
                        <InputForm/>                    
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