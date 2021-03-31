import React, { useState } from "react";
import axios from 'axios'
import { port, customer} from '../../api/ApiMongoDB'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { UPDATE } from '../../redux/types/userType'
import validate from "../../tools/validate";


// IMPORT COMPONENTS

import FooterRegister from "../FooterRegister/FooterRegister";
import InputForm from "../InputForm/InputForm";


const UpdateUser = (props) => {

    let history = useHistory();

    // HOOKS

    const [user, setUser] = useState({
        email: '',
    })


    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState([]);

    // HANDLERS

    const handleState = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value });
        if (Object.keys(errors).length > 0)
            setErrors(validate({ ...user, [e.target.name]: e.target.value, [e.target.name]: e.target.value }, "register"));
    }

    // AUTHORIZATION
    let token = props.token
    let auth = {
        headers: {
            'Authorization': `Bearer ${token}`
        }};

    // FUNCTIONS



    const toggle = async () => {
        console.log(props.token); //undefined?
        const errs = validate(user, "register");
        setErrors(errs);

        if (Object.keys(errs).length > 0) return;

        let body = {
            email: user.email,
        }

        try {

            const id = props.user._id;
            let result = await axios.put(port + customer + '/' + id, body, auth)

            if (result.data?.email) {
                props.dispatch({ type: UPDATE, payload: result.data });
                history.push('/profile')

                // let dataLogin = {
                //     email: result.data.email,
                // }

                // let resultLogin = await axios.put(port + customer + update, dataLogin)

                // if (resultLogin) {
                // }
            }
        } catch (error) {
            setMessage('Email already exist!')
        }
    };

    return (
        <div className="registerContainer">
            <div className="superformReg">
                <InputForm
                    type='text'
                    name='email'
                    title='Email'
                    //value={props.user?.email}
                    onChange={handleState}
                    btnName='Continue'
                    error={errors.email?.help ? errors.email.help : message}
                // message={message}
                // style={validation}
                // styleP={validation}
                />
                <div className="buttonUpdate">
                    <button onClick={() => toggle()}>UPDATE</button>
                </div>
            </div>

            <FooterRegister />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token
    }
}

export default connect(mapStateToProps)(UpdateUser);