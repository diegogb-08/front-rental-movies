import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';  
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import {port,customer,login} from '../../api/ApiMongoDB';
import axios from 'axios';
import {LOGIN} from '../../redux/types/userType'
import {connect} from 'react-redux';

function Login(props) {

    let history = useHistory();

    // HOOKS

    const [user, setLogin] = useState({
        email: '',
        password: ''
    })

    const [password, setPassword] = useState({
        hideShow: 'password',
        showHide: 'SHOW'
    })

    const [message, setMessage] = useState('')

    // HANDLERS

    const handleState = (e) => {
        setLogin({...user, [e.target.name]: e.target.type === "number" ? + e.target.value : e.target.value});
    }

    // FUNCTIONS

    const showPassord = () => {

        if(password.hideShow === "password"){
            return setPassword({...password, hideShow: 'text', showHide: 'HIDE'});
        }else{
            return setPassword({...password, hideShow: 'password', showHide: 'SHOW'});
        }
    }

    const toggle = async () => {

        try{
            let result = await axios.post(port+customer+login, user)
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
                <h3>Sign In</h3>
                <div className="inputLogin">
                    <InputForm type="text" name="email" onChange={handleState} title="Email" />
                    <p>{message}</p>
                </div>
                <div className="inputLogin">        
                    <InputForm type={password.hideShow} name="password" onChange={handleState} title="Password" showHide={password.showHide} onClick={() => showPassord()}/>
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
