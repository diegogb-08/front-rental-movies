import React, {useState} from 'react'
import Button from '../Button/Button'
import InputForm from '../InputForm/InputForm'

function Login(props) {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    console.log(login)

    const handleState = (e) => {
        setLogin({...login, [e.target.name]: e.target.type === "number" ? + e.target.value : e.target.value});
    }

    return (
        <div className="loginComponent">
            <div className="loginBox">
                <div className="inputLogin">
                    <InputForm type="text" name="email" onChange={handleState} title="Email"/>
                </div>
                <div className="inputLogin">        
                    <InputForm type="password" name="password" onChange={handleState} title="Password"/>
                </div>
                <div className="inputLogin">
                    <Button name="Sign In" />
                </div>
            </div>
        </div>
    )
}

export default Login
