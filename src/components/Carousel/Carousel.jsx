import React from 'react'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Carousel(props) {

    const row = document.querySelector(`.${props.class}`);
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
            <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <div className="carouselContainer">
                <div className={`carousel ${props.class}`}>
                    <div className="movieRender">
                        {props.children}
                    </div>
                </div>
            </div>
            <button className="rightArrow" onClick={()=> rightArrowButton()}>
            <FontAwesomeIcon icon={faAngleRight}/>
            </button>
        </div>
    )
}

export default Carousel
