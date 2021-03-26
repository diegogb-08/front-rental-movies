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
                tabIndex={props.tabIndex}
                value={props.value}
                style={props.style}
                required
            ></input>
            <span className="floating-label" >{props.title}</span>
            <div className="iconInput" onClick={props.onClick}>{props.showHide}</div>
            <span className="error">{props.error}</span>
        </div>
    )
}

export default InputForm
