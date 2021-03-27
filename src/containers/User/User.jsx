import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import axios from 'axios'

import Header from '../../components/Header/Header';
import Movie from '../../components/Movies/Movies';

// Endpoints API The movieDB
// eslint-disable-next-line
import {pathImg, baseUrl, search, multi, discover,
    // eslint-disable-next-line
    movie, series, popular, topRated, upcoming,
    // eslint-disable-next-line
    nowPlaying, apiKey, page, genres} from '../../api/ApiMovieDB'

function User(props) {

    // HOOKS

    const [films, setFilms] = useState({
        filmCollection: []
    })


    const call = async (url) => {
        let res = await axios.get(url);
        
        if(res.data.results)
            return res.data.results;
        if(res.data.title)
            return res.data;
        else{
            return new Error("The URL was wrong!");
        }
    
    };


    const searchByGender = async (genreValue) => {
        let url = `${baseUrl}${discover}${movie}${apiKey}&with_genres=${genreValue}`
        return setFilms({...films, filmCollection: await call(url)})
    }

    useEffect(()=>{
        searchByGender(genres.action)
        console.log(genres.action)
    },[])



    return (
        <div className="userComponent">
          <Header>
          </Header>
          <div className="carouselMovies">
            <Movie title="">
                {
                    films.filmCollection.map((film) =>{
                        return( 
                            <div class='movieCollection moviesPopular'>
                                <div class='titleCollection'>
                                    <img class="film" alt={pathImg+film.poster_path} src={pathImg+film.poster_path}/>
                                    <div>
                                        {film.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Movie>
          </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
    }
};

export default connect(mapStateToProps)(User);
