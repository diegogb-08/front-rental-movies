import React, { useState } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {UPDATE} from '../../redux/types/userType'
import Modal from '../../containers/Modal/Modal';
import Button from '../../components/Button/Button'
import InputForm from '../InputForm/InputForm';
import validate from "../../tools/validate";
import {port,customer} from '../../api/ApiMongoDB';



function ProfileModal(props) {

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
        name: '',
        phoneNumber: '',
        address: '',
        birthDate: '',
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

        let body = {
            full_name: credentials.name,
            phone_number: credentials.phoneNumber,
            address: credentials.address,
            birth_date: credentials.birthDate,
            email: credentials.email
        }

        const errs = validate(credentials, "register");
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            try{
                let id = props.user._id;
                let result = await axios.put(port + customer + '/' + id, body, auth)

                if (result.data) {
                    props.dispatch({ type: UPDATE, payload: result.data });
                    setTimeout(()=>{
                        toggle()
                    },500)
                }
            } catch (error) {
                setMessage('error')
            }
        }
    }

    return (
        <div>
            <div className="profileModalComponent" onClick={toggle}>{props.children}</div>
            <Modal active={active} toggle={toggle}>
                <div className="profileModalContainer">
                    <div className="header">
                        <h2>Update profile</h2>
                    </div>
                    <div className="lineForm"></div>
                    <div className="formModal">
                        <div className="inputProfileContainer">
                            <InputForm type='text' name='name' onChange={handleState} title='Full Name' error={errors.name?.help} />
                        </div>
                        <div className="inputProfileContainer">
                            <InputForm type='text' name='phoneNumber' onChange={handleState} title='Phone Number' error={errors.phoneNumber?.help}/>
                        </div>
                        <div className="inputProfileContainer">
                            <InputForm type='text' name='address' onChange={handleState} title='Address' error={errors.address?.help}/>
                        </div>
                        <div className="inputProfileContainer">
                            <InputForm type='text' name='birthDate' onChange={handleState} title='Birth Date' error={errors.birthDate?.help}/>
                        </div>
                        <div className="inputProfileContainer">
                            <InputForm type='text' name='email' onChange={handleState} title='Email' error={errors.email?.help}/>
                        </div>
                        <div className="inputProfileContainer">
                            <div className="messageUpdate">{message}</div>
                        </div>
                    </div>
                    <div className="submitUpdate">
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
