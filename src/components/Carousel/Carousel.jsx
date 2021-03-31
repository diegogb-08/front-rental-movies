import React from 'react'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  Carousel = (props)  => {

    // Event Listener for the right arrow
    const rightArrowButton = async () => {
        let row =  await document.querySelector(`.${props.genre}`);
        row.scrollLeft += row.offsetWidth;
    };

    // Event Listener for the left arrow
    const leftArrowButton = async () => {
        let row =  await document.querySelector(`.${props.genre}`);
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
