import React, {useState} from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
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
            <Header/>
            <div className="loginBox">
                <h1>Sign In</h1>
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
            <div className="spacer"></div>
        </div>
    )
}

export default Login
