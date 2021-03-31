import React from 'react'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  Carousel = (props)  => {

    // Event Listener for the right arrow
    const rightArrowButton = () => {
        let row =  document.querySelector(`.${props.genre}`);
        row.scrollLeft += row.offsetWidth;
    };

    // Event Listener for the left arrow
    const leftArrowButton = () => {
        let row =  document.querySelector(`.${props.genre}`);
        row.scrollLeft -= row.offsetWidth;
    };

    return (
        <div className="carouselComponent">
            <button className="leftArrow" onClick={()=>leftArrowButton()}>
            <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <div className="carouselContainer">
                <div className={`carousel ${props.genre}`}>
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
