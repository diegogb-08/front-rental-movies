import React from 'react'
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';

function FirstStepRegister(props) {
    return (
        
        
            <div className="FirstStepRegisterComponent">
                    
                    <p className="pFormRegUp">Welcome back geeks!</p>
                    <p className="pFormRegUp">Joining Fakeflix is easy.</p>
                    <p className="pFormRegMid">Enter your email and your password and you'll be watching in no time.</p>

                    <InputForm type={props.type} name={props.name} title={props.title} value={props.value} onChange={props.onChange}/>
                    <div className="spaceReg"></div>
                    <InputForm type={props.typeP} name={props.nameP} title={props.titleP} onChange={props.onChangeP}/>

                    <div className="buttonFormReg">

                        <Button name={props.btnName} onClick={props.onClick}/>

                    </div>                                      
            </div>
        
    )
}

export default FirstStepRegister