import React from 'react'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'

function Carousel(props) {

    const row = document.querySelector('.carousel');
    // const leftArrow = document.getElementById('leftArrow');
    // const rightArrow = document.getElementById('rightArrow');


    // Event Listener for the right arrow
    const rightArrowButton = () => {
        row.scrollLeft += row.offsetWidth;
    };

    // Event Listener for the left arrow
    const leftArrowButton = () => {
        row.scrollLeft -= row.offsetWidth;
    };

    return (
        <div className="carouselComponent">
            <button className="leftArrow" onClick={()=>leftArrowButton()}>
              <i className={faAngleLeft}></i>
            </button>
            <div className="carouselContainer">
                <div className="carousel">
                    <div className="movieRender">
                        {props.children}
                    </div>
                </div>
            </div>
            <button className="rightArrow" onClick={()=> rightArrowButton()}>
              <i className={faAngleRight}></i>
            </button>
        </div>
    )
}

export default Carousel
