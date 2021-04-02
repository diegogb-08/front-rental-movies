import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import { CLEAN } from '../../redux/types/cartType';






function Orders(props) {

  // Functions

    // Delete all orders 
    const deleteAllOrders = () => {

      props.dispatch({ type: CLEAN, payload: [] });
  
    };
  

  return(
    <div className="orderComponent">
          {
                    props.cart.length === 0
                    ?
                    <>
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
                            <p className="dateOrder">Props Date: 10/20/20</p>
                            <p className="dateOrder">Props Date: 10/20/20</p>
                          <div className="ordersActionsContainer">
                            <input className="inputGift" type="checkbox"/>
                            <p className="pGift">It's a gift</p>
                            <u className="actionSave">Save on my list</u>
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
