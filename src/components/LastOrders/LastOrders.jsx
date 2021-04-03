import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import rental from '../../img/rental.gif';
import axios from 'axios'
import { customer, port, rentals,  } from '../../api/ApiMongoDB';
import moment from 'moment';

function LastOrders(props) {

  const [allRentals, setAllRentals] = useState([])
  console.log(allRentals)

  // AUTHORIZATION
  let auth = {
    headers: {
    'Authorization': `Bearer ${props.token}`
    }
  };

  useEffect(()=> {
    getAllRentals()
  },[])

  // FUNCTIONS

  const getAllRentals = async () => {
    try{
        let result = await axios.get(port + rentals + customer +'/'+props.user._id, auth)
        setAllRentals(result.data)
     }catch(e){
        return {e: e.message}
    }
  }

  return(
    <div className="lastOrderComponent">
          {
            !allRentals[0]
            ?
            <>
              <div className="emptyLastOrderContainer">
                <div className="messageEmptyLastOrder">
                  <p className="pEmptyOrder">You don't have orders yet.</p>           
                </div>
                <div className="containerCatLastOrder">
                    <img className="angryCat" src={rental} alt="angry"/>
                </div>  
              </div>
            </>
            :
            <>             
              {
                allRentals.map( order => {
                  console.log(order.rental)
                  return order.rental.map(film => {
                      return (
                        <div className="lastOrdersContainer"key={film.id}>
                          <div className="imgLastOrderContainer">
                            <img className="imgLastOrder" src={film.backdropPath} alt="lastOrder"/>
                          </div> 
                          <div className="infoLastOrderContainer">
                            <p className="lastOrderTitle">{film.title}</p>
                            <p className='rentalDate'><b>Rental Date: </b>{moment(order.rental_date).format('DD MMMM YYYY, h:mm a')}</p>
                            <p className='returnDate'><b>Return Date: </b>{moment(order.return_date).format('DD MMMM YYYY, h:mm a')}</p>
                          </div>
                          <div className="countdown">
                            <div className="countDownTitle">
                              <p>Days left</p>
                            </div>
                            <div className="counter">
                              {
                                moment(order.return_date).diff(order.rental_date) >= 0
                                ?
                                <>
                                  <p className='days'>{moment(order.return_date).diff(order.rental_date, 'days')}</p>
                                </>
                                :
                                <>
                                  <p>Expired</p>
                                </>
                              }
                            </div>
                          </div>
                        </div>                       
                      );
                      
                  })
                })
              }                     
            </>
                    
          }
    </div>

  ) 
}


const mapStateToProps = state => {
  return {
      cart : state.cartReducer.cart,
      token : state.userReducer.token,
      user : state.userReducer.user
  }
}

export default connect(mapStateToProps)(LastOrders);