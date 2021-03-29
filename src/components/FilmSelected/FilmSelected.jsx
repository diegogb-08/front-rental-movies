import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartPlus, faHeart} from '@fortawesome/free-solid-svg-icons'
// Redux
import {connect} from 'react-redux';
import {ADD} from '../../redux/types/cartType';
import {ADDLIST} from '../../redux/types/listType';

const FilmSelected = (props) => {

    const film = props.film
    

    // Incons export to buttons

    const addList = <FontAwesomeIcon icon={faPlus} />
    const addCart = <FontAwesomeIcon icon={faCartPlus} />
    const like = <FontAwesomeIcon icon={faHeart} />

    // FUNCTIONS
    const addFilmToCart = () => {
        film.inCart = film.inCart +1
        props.dispatch({type: ADD, payload: film})
    }

    const addFilmToList = () => {
        film.inCart = film.inCart +1
        props.dispatch({type: ADDLIST, payload: film})
    }

    return (
        <div className="movieData" id={film.id}>
                        <img src={film.backdropPath} alt={film.title}/>
                        <div className="movieInfo">
                            <div className="topInfo">
                                <p className='releaseDate'>{moment(film.releaseDate).format('YYYY')}</p>
                                <p className='originalLanguage'>{film.originalLanguage}</p>
                                <p className='rate'>{film.voteAverage}</p>
                            </div>
                            <h5>{film.title}</h5>
                            <p>Original title: {film.originalTitle}</p>
                            {/* <p>{film.genres}</p> */}
                            <p>{film.overview}</p>
                            <div className="bottomInfo">
                                <div>
                                    <div className='button addList'>{addList}</div>
                                    <div className="label">Add List</div>
                                </div>
                                <div>
                                    <div className='button addCart' onClick={()=>addFilmToCart()}>{addCart}</div>
                                    <div className="label" onClick={()=>addFilmToList()}>Add Cart</div>
                                </div>
                                <div>
                                    <div className='button like'>{like}</div>
                                    <div className="label">Like</div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};



export default connect()(FilmSelected);
