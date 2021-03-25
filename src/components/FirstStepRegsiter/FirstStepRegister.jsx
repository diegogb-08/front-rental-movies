import React from 'react'

import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';

function FirstStepRegister(props) {
    return (
        
        
            <div className="FirstStepRegisterComponent">
                    
                    <p className="pFormRegUp">Welcome back geeks!</p>
                    <p className="pFormRegUp">Joining Fakeflix is easy.</p>
                    <p className="pFormRegMid">Enter your password and you'll be watching in no time.</p>

                    <p className="pFormRegMid">Email

                        <div className="propsEmailReg">user@gmail.com</div>

                    </p>

                    <InputForm type="password" name="password" title="Password"/>

                    <div className="buttonFormReg">

                        <Button name="Continue"/>

                    </div>                                      
            </div>
        
    )
}

export default FirstStepRegister