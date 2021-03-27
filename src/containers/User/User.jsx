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

    console.log(films.filmCollection)

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
        let movies = await call(url)
        
        return setFilms({...films, filmCollection: movies})
    }

//     var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// // returns a new object with the values at each key mapped using mapFn(value)
// function objectMap(object, mapFn) {
//   return Object.keys(object).reduce(function(result, key) {
//     result[key] = mapFn(object[key])
//     return result
//   }, {})
// }

    // const mapGenres = (object, mapFn) => {
    //     return Object.keys(genres).reduce((result, key) =>{
    //         searchByGender()
     
    //     })
    // }

    useEffect(()=>{
        // mapGenres()
        searchByGender(genres.Action)
    },[])



    return (
        <div className="userComponent">
          <Header>
          </Header>
          <div className="carouselMovies">
                {
                    Object.keys(genres).map((genre, index) =>{
                        return(
                            <Movie key={index} title={genre} class={genre}>
                                {
                                    films.filmCollection.map((film) =>{
                                        return( 
                                            <div className='movieCollection' key={film.id}>
                                                <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                            </div>
                                        )
                                    })
                                }
                            </Movie>
                        )
                    })
                }      
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
