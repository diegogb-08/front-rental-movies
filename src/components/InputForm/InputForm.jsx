import React from 'react'

function InputForm(props) {
    return (
        <div className="inputComponent">
            <span className="spanPlaceholder" >{props.title}</span>
            <input 
                className="input"
                type={props.type}
                name={props.name}
                maxLength={props.lenght}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                placeholder={props.placeholder}
                tabIndex={props.tabIndex}
            ></input>
            <span className="showPassword" onClick={props.onClick}>{props.showHide}</span>
        </div>
    )
}

export default InputForm
