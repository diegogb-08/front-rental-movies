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
import validate from "../../tools/validate";

function Login(props) {

    let history = useHistory();

    // HOOKS

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [password, setPassword] = useState({
        hideShow: 'password',
        showHide: 'SHOW'
    })

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState([]);

    // HANDLERS

    const handleState = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
        if (Object.keys(errors).length > 0) 
        setErrors(validate({ ...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value}, "register"));
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

        const errs = validate(credentials, "login");
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            try{
                let result = await axios.post(port+customer+login, credentials)
                console.log(result)
                if(result) {
                    props.dispatch({type: LOGIN, payload: result.data});
                    history.push('/user')
                }else {
                    setMessage('Email or password not found')
                }
            }catch(err){
                setMessage('Email or password not found')
            }
        }
        
    }

    return (
        <div className="loginComponent">
            <Header/>
            <div className="loginBox">
                <h3>Sign In</h3>
                <div className="inputLogin">
                    <InputForm type="text" name="email" onChange={handleState} title="Email" error={errors.email?.help}/>
                    <p>{message}</p>
                </div>
                <div className="inputLogin">        
                    <InputForm type={password.hideShow} name="password" onChange={handleState} title="Password" error={errors.password?.help} showHide={password.showHide} onClick={() => showPassord()}/>
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
