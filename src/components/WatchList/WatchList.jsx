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
import Reactplayer from 'react-player'
import { apiKey, baseUrl, movie } from '../../api/ApiMovieDB';
import moment from 'moment';

const WatchList = (props) => {

    const [allRentals, setAllRentals] = useState([])
    const [youTubeKey, setYouTubeKey] = useState([])
    console.log('8==============D',youTubeKey)
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
        allRentals.map(order => {
            return order.rental.map(film => {
                return getAllTrailers(film.id)
            })
        })
    }

    useEffect(()=>{
        getAllRentals()
    },[])

    useEffect(()=>{
        getFilmId()
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
                <h4>Watch List</h4>
                
                {
                            allRentals.map(order => {
                                return order.rental.map(film => {
                                    return(

                                        <div className="videoCard">
                                            <div className="videoInfo">
                                                <h6>{film.title}</h6>
                                                {/* {
                                                    youTubeKey.map(key => {
                                                        return(
                                                            <Reactplayer url={`https://www.youtube.com/watch?v=${key}`} controls/>
                                                        )
                                                    })
                                                } */}

                                            </div>
                                        </div>


                                        // <tr>
                                        //         <td>{order._id}</td>
                                        //         <td>{film.title}</td>
                                        //         <td>{film.id}</td>
                                        //         <td>{order.email ? order?.email : 'email not found'}</td>
                                        //         <td>{moment(order.rental_date).format('DD-MM-YYYY')}</td>
                                        //         <td>{moment(order.return_date).format('DD-MM-YYYY')}</td>
                                        //         <td>€{film.price}</td>
                                        // </tr>
                                
                                    )
                                  
                                })

                            })
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
