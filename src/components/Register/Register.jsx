import React, {useState} from "react";
import axios from 'axios'
import {port, user, login} from '../../api/ApiMongoDB'
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

  const [customer, setCustomer] = useState({
    email: '',
    password: ''
  })
  console.log(customer)

  const [message, setMessage] = useState('')

  // HANDLERS

  const handleState = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
  } 

  const toggle = async () => {

    let body = {
      email: customer.email,
      password: customer.password
    }
      
    try {
      let result = await axios.post(port+user, body)
      console.log(result, '===========')
      if (result.data?.email) {
        console.log(result.data, 'REPRESENTANDOOOOOO')
        
        let dataLogin = {
          email : result.data.email,
          password : customer.password
        }
        console.log(dataLogin, "BICHITO")

        let resultLogin = await axios.post(port+user+login, dataLogin)
        console.log(resultLogin, '===========>')
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