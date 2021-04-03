import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { baseUrl, search, multi, apiKey, query } from '../../api/ApiMovieDB'
import { call } from '../../tools/helper';
import {connect} from 'react-redux';
import {ADDSEARCH} from '../../redux/types/searchType'
import { useHistory } from 'react-router';


const SearchBox = (props) => {

    let history = useHistory()

    // Hooks
    const [searchFilm, setSearch] = useState('')

    // HANDLER
    const handlState = (e) => {
        let value = encodeURIComponent(e.target.value.trim())
        setSearch(value)
    }

    // Here we have the URL for the call to the API and return the object/s

    const multiSearchBox = async (value) => {
        let url = `${baseUrl}${search}${multi}${apiKey}${query}${value}`
        let movies = await call(url)
        props.dispatch({type: ADDSEARCH, payload: movies})
        return 
    }

     // it detects the changes from the input and on key press Enter, sends the info to multiSearch()
     useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            multiSearchBox(searchFilm);
            history.push('/search')
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
        // eslint-disable-next-line
    },[searchFilm]);

    // Function to activate the searcher

    const activateSearch = () => {
        const searchBox = document.getElementsByClassName("search-box")[0];
        searchBox.classList.toggle("active");
    }

    return (
        <div className="search-box">
            <FontAwesomeIcon className="fa fa-search search-box__icon" icon={faSearch} onClick={()=>activateSearch("search-box__icon")}/>
            <input className="search-box__input" placeholder="Title, people, genres" onChange={handlState}/>
        </div>
    )
}

export default connect()(SearchBox)
