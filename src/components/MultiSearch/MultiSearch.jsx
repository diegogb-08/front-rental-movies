import React from 'react'
import {pathImg} from '../../api/ApiMovieDB'
import ModalRender from '../../containers/Modal/ModalRender'

function MultiSearch(props) {

    const multiSearch = props.multiSearcher

    return (
        <div className="multiSearchComponent">
            <div className='searchGrid'>
                {   
                    multiSearch.map((film) =>{
                        if(film.poster_path)
                        return( 
                            <div className='d' key={film.id}>
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
            </div>
            
        </div>
    )
}

export default MultiSearch
