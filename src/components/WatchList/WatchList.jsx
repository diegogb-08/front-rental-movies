import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBtn from '../NavBtn/NavBtn';
import NavMenu from '../NavMenu/NavMenu';
import SearchBox from '../SearchBox/SearchBox';
import axios from 'axios';
import {connect} from 'react-redux';
import { customer, port, rental } from '../../api/ApiMongoDB';
import { apiKey, baseUrl, movie } from '../../api/ApiMovieDB';
import moment from 'moment';

const WatchList = (props) => {

    const [allRentals, setAllRentals] = useState([])
    const [youTubeKey, setYouTubeKey] = useState([])


    // AUTHORIZATION
    let auth = {
        headers: {
        'Authorization': `Bearer ${props.token}`
        }
  };

    const getAllRentals = async () => {
        try{
            let result = await axios.get(port+rental+customer+'/'+props.user._id, auth)
            setAllRentals(result.data)
         }catch(e){
            return {e: e.message}
        }
    }

    const getAllTrailers = async (movieId) => {
        try{
            let result = await axios.get(baseUrl+movie+'/'+movieId+'/videos'+apiKey)
            let key = result.data.results[0].key
            setYouTubeKey(youTubeKey => [...youTubeKey, key])
        }catch(e){
            return {e: e.message} 
        }
    }


    const getFilmId = () => {
        let today = new Date()
        // eslint-disable-next-line
        allRentals.map(order => {
            if(moment(order.return_date).diff(today) >= 0)
                return order.rental.map(film => {
                        return getAllTrailers(film.id)
                })
        })
    }

    useEffect(()=>{
        getAllRentals()
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        getFilmId()
        // eslint-disable-next-line
    },[allRentals])


    return (
        <div className="watchListComponent">
            <div className="blackHeader"></div>
            <Header>
            <div className="navbar">
                        <NavMenu/>
                        <div className="searchNavbar">
                            <SearchBox/>
                        </div>
                        <div className="cartCounter">
                            <Cart/>
                        </div>
                        <NavBtn>
                            <DropDownMenu/>
                        </NavBtn> 
                    </div>
            </Header>
            <div className="videoListContainer">
                {
                    youTubeKey
                    ?
                    <>
                        <h4>Enjoy your popcorns! <p>&#127871;</p></h4>

                        {
                            youTubeKey.map( trailerKey => {
                                let url = `https://www.youtube.com/embed/${trailerKey}` 
                                return (

                                    <div className="videoCard" key={trailerKey}>
                                    <iframe width="748" height="421" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; gyroscope;" allowFullScreen></iframe>
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                    <>
                        <h4>Please buy your movie first! <p>&#129301;</p></h4>
                    </>
                }

            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token
    }
  }
  
export default connect(mapStateToProps)(WatchList);
