import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartPlus, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'


function ModalRender(props) {

    const addList = <FontAwesomeIcon icon={faPlus} />
    const addCart = <FontAwesomeIcon icon={faCartPlus} />
    const like = <FontAwesomeIcon icon={faHeart} />
    const dislike = <FontAwesomeIcon icon={faHeartBroken} />

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 

    return (
            <div className="configComponent" onClick={toggle}>
                {props.children}
                <Modal active={active} toggle={toggle}>
                    <div className="movieData" id={props.id}>
                        <img src={props.backdropPath} alt={props.title}/>
                        <div className="movieInfo">
                            <div className="topInfo">
                                <p className='releaseDate'>{moment(props.releaseDate).format('YYYY')}</p>
                                <p className='originalLanguage'>{props.originalLanguage}</p>
                                <p className='rate'>{props.voteAverage}</p>
                            </div>
                            <h5>{props.title}</h5>
                            <p>Original title: {props.originalTitle}</p>
                            {/* <p>{props.genres}</p> */}
                            <p>{props.overview}</p>
                            <div className="bottomInfo">
                                <div>
                                    <div className='button addList'>{addList}</div>
                                    <div className="label">Add List</div>
                                </div>
                                <div>
                                    <div className='button addCart'>{addCart}</div>
                                    <div className="label">Add Cart</div>
                                </div>
                                <div>
                                    <div className='button like'>{like}</div>
                                    <div className="label">Like</div>
                                </div>
                                <div>
                                    <div className='button dislike'>{dislike}</div>
                                    <div className="label">Dislike</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
    )
}

export default ModalRender
