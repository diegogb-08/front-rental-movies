import React from 'react'
import { useState } from 'react';
import Modal from '../../containers/Modal/Modal';
import Button from '../../components/Button/Button'
import InputForm from '../InputForm/InputForm';





function ProfileModal(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    }

    const handleState = () => {
        
    }

    // Film information for redux

    // const film = {
    //     id: props.id,
    //     title: props.title,
    //     imgFilm: props.imgFilm,
    //     originalTitle: props.originalTitle,
    //     genres: [props.genres],
    //     backdropPath: props.backdropPath,
    //     releaseDate: props.releaseDate,
    //     originalLanguage: props.originalLanguage,
    //     voteAverage: props.voteAverage,
    //     overview: props.overview,
    //     price: 2.50,
    //     inCart: 0,
    //     inList: 0
    // }



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
                        <InputForm type='text' name='name' onChange={handleState} title='Full Name' error={}/>
                        <InputForm type='text' name='phoneNumber' onChange={handleState} title='Phone Number' error={}/>
                        <InputForm type='text' name='address' onChange={handleState} title='Address' error={}/>
                        <InputForm type='text' name='birthDate' onChange={handleState} title='Birth Date' error={}/>
                        <InputForm type='text' name='email' onChange={handleState} title='Email' error={}/>
                        <Button  name='Submit' onClick={() => submitUpdate()} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProfileModal;
