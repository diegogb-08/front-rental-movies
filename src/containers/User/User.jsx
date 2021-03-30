import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Movie from '../../components/Movies/Movies';

import ModalRender from '../Modal/ModalRender';
import Cart from '../../components/Cart/Cart';
import SearchBox from '../../components/SearchBox/SearchBox';
import MultiSearch from '../../components/MultiSearch/MultiSearch';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import NavBtn from '../../components/NavBtn/NavBtn';
import {call, searchByGenre} from '../../tools/helper'

// Endpoints API The movieDB
import {pathImg, baseUrl, search, multi, apiKey, genres, query} from '../../api/ApiMovieDB'
import NavMenu from '../../components/NavMenu/NavMenu';


const User = (props) => {

    
    // HOOKS
    const [films, setFilms] = useState({})
    const [searchFilm, setSearch] = useState('')
    const [multiSearch, setMultiSearch] = useState([])
    // HANDLER

    const handlState = (e) => {

        let value = encodeURIComponent(e.target.value.trim())
        setSearch(value)
    }

    // // Here we have the URL for the call to the API and return the object/s

    const multiSearchBox = async (value) => {
        let url = `${baseUrl}${search}${multi}${apiKey}${query}${value}`
        let movies = await call(url)
        return setMultiSearch(movies)
    }

    // Here we map the Genres Object given by the API and store it in an empty object called filmCollection 
    // which we use to setFilms state

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

    // it detect the changes from the input and on key press Enter, sends the info to multiSearch()
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            multiSearchBox(searchFilm);
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
        // eslint-disable-next-line
    },[searchFilm]);

    return (
        <div className="userComponent">
            <Header>
                <div className="navbar">
                    <NavMenu/>
                    <div className="searchNavbar">
                        <SearchBox 
                            onChange={handlState}
                        />
                    </div>
                    <div className="cartCounter">
                        <Cart/>
                    </div>
                    <NavBtn>
                        <DropDownMenu/>
                    </NavBtn> 
                </div>
            </Header>
            {
                multiSearch.length
                ?
                <>
                <div>
                    <MultiSearch multiSearcher={multiSearch} />
                </div>
                </>
                :
                <>
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
                </>
            }
        </div>
    )
};


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token,
    }
};

export default connect(mapStateToProps)(User);
