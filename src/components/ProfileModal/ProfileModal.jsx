import React from 'react'
import { useState } from 'react';
import Modal from '../../containers/Modal/Modal';
import Button from '../../components/Button/Button'
import InputForm from '../InputForm/InputForm';
import validate from "../../tools/validate";
import {port,customer} from '../../api/ApiMongoDB';
import axios from 'axios';
import {UPDATE} from '../../redux/types/userType'
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom'



function ProfileModal(props) {

    let history = useHistory();

    // AUTHORIZATION
    let token = props.token
    let auth = {
        headers: {
            'Authorization': `Bearer ${token}`
        }};

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    }
    const [credentials, setCredentials] = useState({
        full_name: '',
        phone_number: '',
        address: '',
        birth_date: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState([]);

    //HANDLERS
    const handleState = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value});
        if (Object.keys(errors).length > 0)
        setErrors(validate({ ...credentials, [e.target.name]: e.target.value, [e.target.name]: e.target.value}, "register"));
    }

    //FUNCTIONS
    const submitUpdate = async () => {

        const errs = validate(credentials, "update");
        setErrors(errs);

        let body = {
            full_name: credentials.full_name,
            phone_number: credentials.phone_number,
            address: credentials.address,
            birth_date: credentials.birth_date,
            email: credentials.email
        }

        if (Object.keys(errs).length === 0) {
            try{
                let id = props.user._id;
                let result = await axios.put(port + customer + '/' + id, body, auth)

                if (result.data) {
                    props.dispatch({ type: UPDATE, payload: result.data });
                    setMessage('User info updated')
                    history.push('/profile')
                }
            } catch (error) {
                setMessage('error')
            }
        }
    }

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
            <Modal active={active} toggle={toggle}>
                <div className="profileModalContainer">
                    <div className="header">
                        <h2>Update profile</h2>
                    </div>
                    <div className="lineForm"></div>
                    <div className="formModal">

                    </div>
                    <div className="messageUpdate">{message}</div>
                    <div className="submitUpdate">
                        <InputForm type='text' name='name' onChange={handleState} title='Full Name' error={errors.email?.help} value={credentials.email}/>
                        <InputForm type='text' name='phoneNumber' onChange={handleState} title='Phone Number' error={errors.phone_number?.help} value={credentials.phone_number}/>
                        <InputForm type='text' name='address' onChange={handleState} title='Address' error={errors.address?.help} value={credentials.address}/>
                        <InputForm type='text' name='birthDate' onChange={handleState} title='Birth Date' error={errors.birth_date?.help} value={credentials.birth_date}/>
                        <InputForm type='text' name='email' onChange={handleState} title='Email' error={errors.email?.help} value={credentials.email}/>
                        <Button name='Submit' onClick={() => submitUpdate()} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token
    }
}

export default connect(mapStateToProps)(ProfileModal);
