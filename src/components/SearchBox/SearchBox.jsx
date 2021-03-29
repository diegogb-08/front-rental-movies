import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = (props) => {


    const activateSearch = () => {
        const searchBox = document.getElementsByClassName("search-box")[0];
        searchBox.classList.toggle("active");
    }

    return (
        <div className="search-box">
            <FontAwesomeIcon className="fa fa-search search-box__icon" icon={faSearch} onClick={()=>activateSearch("search-box__icon")}/>
            <input className="search-box__input" placeholder="Title, people, genres" onChange={props.onChange}/>
        </div>
    )
}

export default SearchBox
