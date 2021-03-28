import React from 'react'
import Modal from './Modal';
import {useState} from 'react';


function ModalRender(props) {

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 

//     adult: false
// backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg"
// genre_ids: (4) [28, 12, 14, 878]
// id: 791373
// original_language: "en"
// original_title: "Zack Snyder's Justice League"
// overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
// popularity: 11424.918
// poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
// release_date: "2021-03-18"
// title: "Zack Snyder's Justice League"
// video: false
// vote_average: 8.7
// vote_count: 3789

    return (
            <div className="configComponent" onClick={toggle}>
                {props.children}
                <Modal active={active} toggle={toggle}>
                    <div className="movieData" id={props.id}>
                        <img src={props.backdropPath} alt=""/>
                        <div className="movieInfo">
                            <p>Title: {props.title}</p>
                            <p>Original Language: {props.originalLanguage}</p>
                            <p>Original Title: {props.originalTitle}</p>
                            <p>Overview: {props.overview}</p>
                            <p>Release Date:{props.releaseDate}</p>
                            <p>Rate: {props.voteAverage}</p>
                        </div>
                    </div>
                </Modal>
            </div>
    )
}

export default ModalRender
