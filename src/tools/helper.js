import axios from 'axios';

// Endpoints API The movieDB
import {pathImg, baseUrl, search, multi, discover,
        movie, apiKey, genres, query} from '../api/ApiMovieDB'
 
 // Function to filter the call to the API

export const call = async (url) => {

    let res = await axios.get(url);
    if (res.data.results)
        return res.data.results;
    if (res.data.title)
        return res.data;
    else {
        return new Error("The URL was wrong!");
    }
};

 // Here we have the URL for the call to the API and return the object/s

export const searchByGenre = async (value) => {
    let url = `${baseUrl}${discover}${movie}${apiKey}&with_genres=${value}`
    let movies = await call(url)
    return movies
}



