import React from 'react'
import Modal from './Modal';
import {useState} from 'react';

import FilmSelected from '../../components/FilmSelected/FilmSelected';


function ModalRender(props) {

    // Modal Hook
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 
    console.log(active)
    // Film information for redux

    const film = {
        id: props.id,
        title: props.title,
        originalTitle: props.originalTitle,
        genres: [props.genres],
        backdropPath: props.backdropPath,
        releaseDate: props.releaseDate,
        originalLanguage: props.originalLanguage,
        voteAverage: props.voteAverage,
        overview: props.overview,
        price: 2.50,
        inCart: 0
    }

    

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.children}</div>
                <Modal active={active} toggle={toggle}>
                    <FilmSelected film={film}></FilmSelected>
                </Modal>
        </div>
    )
}

export default ModalRender;
