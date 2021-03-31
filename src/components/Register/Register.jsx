import React, {useState} from "react";
import axios from 'axios'
import {port, customer, login} from '../../api/ApiMongoDB'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userType'
import validate from "../../tools/validate";

// IMPORT COMPONENTS

import HeaderRegister from '../HeaderRegister/HeaderRegister';
import FirstStepRegister from "../FirstStepRegsiter/FirstStepRegister";
import FooterRegister from "../FooterRegister/FooterRegister";


const Register = (props) => {

  let history = useHistory();

  let storedEmail = localStorage.getItem('email')
  
  // HOOKS
  const [user, setUser] = useState({
    email: storedEmail,
    password: ''
  })

  console.log(user.email)

  const [password, setPassword] = useState({
    hideShow: 'password',
    showHide: 'SHOW'
  })

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState([]);

  // HANDLERS

  const handleState = (e) => {
     setUser({...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
     if (Object.keys(errors).length > 0) 
     setErrors(validate({ ...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value}, "register"));
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

    const errs = validate(user, "register");
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;
    
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
        }
      } 
    } catch (error) {
      setMessage('User already exist!')
    }
  };

    return (
        <div className="registerContainer">            
            <HeaderRegister/>            
            <div className="superformReg">
                <FirstStepRegister
                  type='text'
                  typeP={password.hideShow}
                  name='email'
                  nameP='password'
                  title='Email'
                  titleP='Password'
                  value={user.email}
                  onChange={handleState}
                  onChangeP={handleState}
                  btnName='Continue'
                  onClick={() => toggle()}
                  error={errors.email?.help ? errors.email.help : message}
                  errorP={errors.password?.help}
                  showHide={password.showHide}
                  PonClick={() => showPassord()}
                  // message={message}
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
  }
}

export default connect(mapStateToProps)(Register);