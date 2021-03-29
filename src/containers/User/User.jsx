import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import Header from '../../components/Header/Header';
import Movie from '../../components/Movies/Movies';
import profile from '../../img/avatarUser.png'
import { useHistory } from 'react-router-dom'

// Endpoints API The movieDB
import {
    pathImg, baseUrl, search, multi, discover,
    movie, apiKey, genres, query} from '../../api/ApiMovieDB'

import ModalRender from '../Modal/ModalRender';
import Cart from '../../components/Cart/Cart';
import SearchBox from '../../components/SearchBox/SearchBox';
import MultiSearch from '../../components/MultiSearch/MultiSearch';

function User(props) {

    let history = useHistory();

    // HOOKS
    const [films, setFilms] = useState({})
    const [searchFilm, setSearch] = useState('')
    const [multiSearch, setMultiSearch] = useState([])
    console.log(multiSearch)
    // HANDLER

    const handlState = (e) => {

        let value = encodeURIComponent(e.target.value.trim())
        setSearch(value)
    }

    // Function to filter the call to the API

    const call = async (url) => {
        let res = await axios.get(url);
        if (res.data.results)
            return res.data.results;
        if (res.data.title)
            return res.data;
        else {
            return new Error("The URL was wrong!");
        }
    };


    // Here we have the URL for the call to the API and return the object/s

    const searchByGenre = async (value) => {
        let url = `${baseUrl}${discover}${movie}${apiKey}&with_genres=${value}`
        let movies = await call(url)
        return movies
    }

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

    // FUNCTIONS

    const home = () => {
        setTimeout(()=>{

        },1000)
    }

    return (
        <div className="userComponent">
            <Header>
                <div className="navbar">
                    <div className="navMenu">
                        <div className="home" onClick={()=>home()}>Home</div>
                        <div className="series">Series</div>
                        <div className="newPopular">New & Popular</div>
                        <div className="myList">My List</div>
                    </div>
                    <div className="searchNavbar">
                        <SearchBox 
                            onChange={handlState}
                        />
                    </div>
                    <div className="cartCounter">
                        <Cart/>
                    </div>
                    <div className="imageUser">
                        <img src={profile} alt="profile" onClick={() => { history.push('/profile') }} />
                    </div>
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
                                    <Movie key={index} title={genre} className={genre}>

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
