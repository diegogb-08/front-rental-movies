import React from 'react'
import Carousel from '../Carousel/Carousel'

function Movie (props) {

   
    return(             
      <div className="moviesContainer">
        <div className="titleSection">
            <h4>{props.title}</h4>
        </div>
        <Carousel genre={props.genre}>
          {props.children}
        </Carousel>
      </div>
    )
}

export default Movie