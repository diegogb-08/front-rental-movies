import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Movie from '../../components/Movies/Movies';
import Reactplayer from 'react-player'

import ModalRender from '../Modal/ModalRender';
import Cart from '../../components/Cart/Cart';
import SearchBox from '../../components/SearchBox/SearchBox';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import NavBtn from '../../components/NavBtn/NavBtn';
import {searchByGenre} from '../../tools/helper'
import NavMenu from '../../components/NavMenu/NavMenu';
import fakeflix from '../../img/fakeflixvideo.webm';
import gif from '../../img/fakeflix_loadtime.gif'

// Endpoints API The movieDB
import { pathImg, genres } from '../../api/ApiMovieDB'
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router';




const User = (props) => {

    let history = useHistory()

    let login = JSON.parse(localStorage.getItem('loading'))
    // HOOKS
    const [films, setFilms] = useState({})
    const [loading, setLoading] = useState(false);

    const loadingHandeler = () => {
        if(!films.Action){
            setLoading(true)
            if(login === true){
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }else{
                setTimeout(() => {
                    localStorage.setItem('loading', true)
                    setLoading(false)
                }, 5000)
            }
        }
    };

    const mapGenres = async (object) => {
        let filmCollection = {};
        for (let key in object) {
            let movies = await searchByGenre(object[key])
            filmCollection[key] = movies
        }
        return setFilms(filmCollection)
    }

    // we call the function mapGenres when did mount user view
    useEffect(()=>{
        mapGenres(genres)
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        loadingHandeler()
        // eslint-disable-next-line
    },[])

    if (props.token === ''){
        setTimeout(()=> {
            return history.push('/')
        },1000)
    }

    if(loading){
        
        if(login === true){
            return(
                <div className='gif'>
                    <img width="50%" src={gif} alt={gif}/>
                </div>
            )
        }else{
            return(
                <div className='video'>
                    <Reactplayer width="100%" height="100%" url={fakeflix} controls playing muted/>
                </div>
            )
        }
    }else{

        return (
            <div className="userComponent">
                <div className="blackHeader"></div>
                <Header>
                    <div className="navbar">
                        <NavMenu/>
                        <div className="searchNavbar">
                            <SearchBox/>
                        </div>
                        <div className="cartCounter">
                            <Cart/>
                        </div>
                        <NavBtn>
                            <DropDownMenu/>
                        </NavBtn> 
                    </div>
                </Header>
                    <div className="spacer"></div>
                    <div className="carouselMovies">
                        {
                            Object.keys(genres).map((genre, index) => {
                                return (
                                    <Movie key={index} title={genre} genre={genre}>

                                        {   // eslint-disable-next-line
                                            films[genre]?.map((film) =>{
                                                if(film.poster_path)
                                                return( 
                                                    <div className='movieCollection' key={film.id}>
                                                        <ModalRender title={film.title} id={film.id} originalLanguage={film.original_language}
                                                        originalTitle={film.original_title} overview={film.overview} releaseDate={film.release_date} 
                                                        voteAverage={film.vote_average} backdropPath={pathImg+film.backdrop_path} genres={film.genre_ids} imgFilm={pathImg+film.poster_path}
                                                        >
                                                            <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                                        </ModalRender>
                                                    </div>
                                                )

                                            })
                                        }
                                    </Movie>
                                )
                            })
                        }
                    </div>
                <Footer/>
            </div>
        )
    }

};


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token,
    }
};

export default connect(mapStateToProps)(User);
