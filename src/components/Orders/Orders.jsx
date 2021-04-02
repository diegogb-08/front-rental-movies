import React from 'react'
import {connect} from 'react-redux';
import { CLEAN } from '../../redux/types/cartType';
import moment from 'moment'
import rental from '../../img/rental.gif'






function Orders(props) {


    // Delete all orders 
    const deleteAllOrders = () => {

      props.dispatch({ type: CLEAN, payload: [] });
  
    };

    // Order start date

    const startOrder = moment();

    // Order end date

    const endOrder = moment().add(7, 'days');
    
  

  return(
    <div className="orderComponent">
          {
                    props.cart.length === 0
                    ?
                    <>
                    <div className="emptyOrderContainer">
                      <div className="messageEmpyOrder">
                        <p className="pEmptyOrder">Waiting for your orders</p>                
                      </div>
                      <div className="containerCat">
                        <img className="sadCat" src={rental} alt="sadCat"/>
                      </div>  
                    </div>
                    </>
                    :
                    <>
                    <div className="navBarOrders">
                        <div className="deleteAll" onClick={() => deleteAllOrders()}>Delete All Orders</div>
                        <div className="priceAll">Price</div>
                    </div>                    
                      {props.cart.map( film => {
                      return (
                        <div className="ordersContainer"key={film.id}>
                          <div className="imgOrderContainer">
                            <img className="imgOrder" src={film.backdropPath} alt="order"/>
                          </div> 
                          <div className="infoOrderContainer">
                            <p className="orderTitle">{film.title}</p>
                            <p className="dateOrder">Order start date: {moment(startOrder).format(("dddd MMMM Do YYYY"))}</p>
                            <p className="dateOrder">Order return date: {moment(endOrder).format(("dddd MMMM Do YYYY"))}</p>
                          <div className="ordersActionsContainer">
                            <input className="inputGift" type="checkbox"/>
                            <p className="pGift">It's a gift</p>
                            <u className="actionDelete">Delete</u>
                          </div>

                          </div>
                          <div className="priceContainer">
                            <p className="pPrice">{film.price} €</p>
                          </div>
                        </div>                       
                      );})}                     
                    </>
                    
          }
    </div>

  ) 
}


const mapStateToProps = state => {
  return {
      cart : state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(Orders);
