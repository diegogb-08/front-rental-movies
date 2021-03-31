import React, {useState, useEffect} from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartPlus, faHeart} from '@fortawesome/free-solid-svg-icons'
// Redux
import {connect} from 'react-redux';
import {ADD} from '../../redux/types/cartType';
import {ADDLIST} from '../../redux/types/listType';

const FilmSelected = (props) => {

    let film = props.film
    let idCart = props.cart.map(item => item.id)
    let idCartFound = idCart.find(element => element === film.id);
    let idList = props.list.map(item => item.id)
    let idListFound = idList.find(element => element === film.id)
    // Incons export to buttons

    const addList = <FontAwesomeIcon icon={faPlus} />
    const addCart = <FontAwesomeIcon icon={faCartPlus} />
    const like = <FontAwesomeIcon icon={faHeart} />

    // HOOKS

    const [textcolor,setColor]=useState({
        list: 'white',
        cart: 'white',
        like: 'white',
    });


    const checkProps = () => {
        if(idCartFound !== undefined)
            setColor({...textcolor, cart: 'green'})
        if( idListFound !== undefined)
            setColor({...textcolor, list: '#0f7fe8'})
    }

    useEffect(()=> {
        checkProps()
        // eslint-disable-next-line
    },[])

    // FUNCTIONS
    const addFilmToCart = () => {
        let id = props.cart.map(item => item.id)
        if(id.find(element => element === film.id) === undefined){
            film.inCart = film.inCart +1
            props.dispatch({type: ADD, payload: film})
            setColor({...textcolor, cart: 'green'})
        }else{
            alert('You are trying to add an existing product to the cart!')
        }
    }

    const addFilmToList = () => {
        let list = film
        let id = props.list.map(item => item.id)
        if(id.find(element => element === list.id) === undefined){
            list.inList = list.inList +1
            props.dispatch({type: ADDLIST, payload: list})
            setColor({...textcolor, list: '#0f7fe8'})
        }else{
            alert('You are trying to add an existing product to the list!')
        }
    }

    const addLike = () => {
        setColor({...textcolor, like: '#F40612'})
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
                            <p className='overview'>{film.overview}</p>
                            <div className="bottomInfo">
                                <div>
                                    <div className='button addList' style={{color:textcolor.list}} onClick={()=>addFilmToList()}>{addList}</div>
                                    <div className="label">Add List</div>
                                </div>
                                <div>
                                    <div className='button addCart' style={{color:textcolor.cart}} onClick={()=>addFilmToCart()}>{addCart}</div>
                                    <div className="label">Add Cart</div>
                                </div>
                                <div>
                                    <div className='button like' style={{color:textcolor.like}} onClick={()=>addLike()}>{like}</div>
                                    <div className="label">Like</div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
        cart: state.cartReducer.cart,
    }
};

export default connect(mapStateToProps)(FilmSelected);
