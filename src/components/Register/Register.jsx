import React, {useState} from "react";
import axios from 'axios'
import {port, customer, login} from '../../api/ApiMongoDB'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userType'



// IMPORT COMPONENTS

import HeaderRegister from '../HeaderRegister/HeaderRegister';

// import ErrorRegister from '../ErrorRegister/ErrorRegister';   
  
import FirstStepRegister from "../FirstStepRegsiter/FirstStepRegister";
import FooterRegister from "../FooterRegister/FooterRegister";





const Register = (props) => {

  let history = useHistory();

  // HOOKS

  const [user, setCustomer] = useState({
    email: '',
    password: ''
  })


  const [message, setMessage] = useState('')

  // HANDLERS

  const handleState = (e) => {
    setCustomer({...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
  } 

  const toggle = async () => {

    
    let body = {
      email: user.email,
      password: user.password
    }
      
    try {
      let result = await axios.post(port+customer, body)
      
      if (result.data?.email) {
        
        
        let dataLogin = {
          email : result.data.email,
          password : user.password
        }
        

        let resultLogin = await axios.post(port+customer+login, dataLogin)
        
        if (resultLogin) {          
            props.dispatch({type: LOGIN, payload: resultLogin.data});
            history.push('/user')
        }else {
            //setMessage('Email or password not found')
        } 
        
      } 

    } catch (error) {
      
    }
  };
    return (
        <div className="registerContainer">            
            <HeaderRegister/>            
            <div className="superformReg">
                <FirstStepRegister
                  type='text'
                  typeP='password'
                  name='email'
                  nameP='password'
                  title='Email'
                  titleP='Password'
                  //value={props.user?.email}
                  onChange={handleState}
                  onChangeP={handleState}
                  btnName='Continue'
                  onClick={() => toggle()}
                  error='Testeando el error'
                  errorP='Testeando el error'
                  // style={validation}
                  // styleP={validation}
                />
            </div>
            <FooterRegister/>
        </div>
    )
};

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      token : state.userReducer.token,
  }
}

export default connect(mapStateToProps)(Register);