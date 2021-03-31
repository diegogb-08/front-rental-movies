// import React, {useState, useEffect} from 'react'
// import {call} from '../../tools/helper'
// // import Header from '../../components/Header/Header';
// // import Movie from '../../components/Movies/Movies';
// // import Cart from '../../components/Cart/Cart';
// // import SearchBox from '../../components/SearchBox/SearchBox';
// // import NavMenu from '../../components/NavMenu/NavMenu';

// // Endpoints API The movieDB
// import {pathImg, baseUrl, nowPlaying, upComing, topRated, popular, movie, apiKey} from '../../api/ApiMovieDB'
// // import ModalRender from '../../containers/Modal/ModalRender';
// // import DropDownMenu from '../DropDownMenu/DropDownMenu';
// // import NavBtn from '../NavBtn/NavBtn';


// const NewPopular = () =>  {


//     // HOOKS
//     const [films, setFilms] = useState({
//         nowPlaying: {},
//         upComing:{},
//         topRated: {},
//         popular: {}
//     })
//     console.log(films)
//     // CALL TO THE API

//     const bringFilms = async (value) => {
//         console.log(value)
//         let url = `${baseUrl}${movie}${value}${apiKey}`
//         let movies = await call(url)
//         if(value === popular)
//             return setFilms({...films, popular: movies})
//         if(value === topRated)
//             return setFilms({...films, topRated: movies})
//         if(value === upComing)
//             return setFilms({...films, nowPlaying: movies})
//         if(value === nowPlaying)
//             return setFilms({...films, upComing: movies})
//     }

//     // const createFilmObj = async (object) => {
//     //     console.log(object)
//     //     let filmCollection = {};
//     //     for (let key in object) {
//     //         let movies = await bringFilms(object[key])
//     //         filmCollection[key] = movies
//     //     }
//     //     return setFilms(filmCollection)
//     // }

//     // we call the function createFilmObj when did mount user view
//     useEffect(()=>{
//         bringFilms(popular)
//         bringFilms(topRated)
//         bringFilms(upComing)
//         bringFilms(nowPlaying)
//     },[films])

//     return (
//         <div className="userComponent">
//             {/* <Header>
//                 <div className="navbar">
//                     <NavMenu/>
//                     <div className="cartCounter">
//                         <Cart/>
//                     </div>
//                     <NavBtn>
//                         <DropDownMenu/>
//                     </NavBtn> 
//                 </div>
//             </Header>
//             <div className="carouselMovies">
//                 {
//                     Object.keys().map((genre, index) => {
//                         return (
//                             <Movie key={index} title={genre} genre={genre}>

//                                 {   // eslint-disable-next-line
//                                     films[genre]?.map((film) =>{
//                                         if(film.poster_path)
//                                         return( 
//                                             <div className='movieCollection' key={film.id}>
//                                                 <ModalRender title={film.title} id={film.id} originalLanguage={film.original_language}
//                                                 originalTitle={film.original_title} overview={film.overview} releaseDate={film.release_date} 
//                                                 voteAverage={film.vote_average} backdropPath={pathImg+film.backdrop_path} genres={film.genre_ids} imgFilm={pathImg+film.poster_path}
//                                                 >
//                                                     <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
//                                                 </ModalRender>
//                                             </div>
//                                         )

//                                     })
//                                 }
//                             </Movie>
//                         )
//                     })
//                 }
//             </div> */}
//         </div>
//     )
// }

// export default NewPopular
