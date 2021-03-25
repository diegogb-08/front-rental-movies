import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';  
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import {port,user,login} from '../../api/ApiMongoDB';
import axios from 'axios';
import {LOGIN} from '../../redux/types/userType'
import {connect} from 'react-redux';

function Login(props) {

    let history = useHistory();

    // HOOKS

    const [signin, setLogin] = useState({
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')

    // HANDLERS

    const handleState = (e) => {
        setLogin({...signin, [e.target.name]: e.target.type === "number" ? + e.target.value : e.target.value});
    }

    // FUNCTIONS

    const toggle = () => {

        try{
            let result = axios.post(port+user+login, signin)
            if(result) 
                history.push('/user')
                props.dispatch({type: LOGIN, payload: result.data});
        }catch(err){
            setMessage('Email or password not found')
        }

        
    }

    return (
        <div className="loginComponent">
            <Header/>
            <div className="loginBox">
                <h1>Sign In</h1>
                <div className="inputLogin">
                    <InputForm type="text" name="email" onChange={handleState} title="Email"/>
                    <p>{message}</p>
                </div>
                <div className="inputLogin">        
                    <InputForm type="password" name="password" onChange={handleState} title="Password"/>
                    <p>{message}</p>
                </div>
                <div className="inputLogin">
                    <Button name="Sign In" onClick={()=>toggle()}/>
                </div>
                <div className="contentLogin">
                    <p>New in Fakeflix?</p>
                    <a href="/"><p>Sign up now.</p></a>
                </div>
            </div>
            <div className="spacer"></div>
            <Footer/>
        </div>
    )
}

export default connect()(Login);
