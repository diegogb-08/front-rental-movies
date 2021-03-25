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

    const [signIn, setLogin] = useState({
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')

    // HANDLERS

    const handleState = (e) => {
        setLogin({...signIn, [e.target.name]: e.target.type === "number" ? + e.target.value : e.target.value});
    }

    // FUNCTIONS

    const toggle = async () => {

        try{
            let result = await axios.post(port+user+login, signIn)
            console.log(result)
            if(result) {
                props.dispatch({type: LOGIN, payload: result.data});
                history.push('/user')
            }else {
                setMessage('Email or password not found')
            }
        }catch(err){
            console.log(err.message)
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
