import React from 'react'

function InputForm(props) {
    return (
        <div className="inputComponent">
            <input 
                className="inputText"
                type={props.type}
                name={props.name}
                maxLength={props.lenght}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                placeholder={props.placeholder}
                tabIndex={props.tabIndex}

                required
            ></input>
            <span className="floating-label" >{props.title}</span>
            <div className="showPassword" onClick={props.onClick}>{props.showHide}</div>
        </div>
    )
}

export default InputForm
