import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import {REMOVE} from '../../redux/types/cartType'





function Orders(props) {



  // Functions

  // Delete all orders (Roo says: Molaría que fuese solo una, y no todas. JOJOOOOOOOOOOOOOOOOOOOOJO)
  const deleteOrder = () => {

    props.dispatch({type: REMOVE, payload: [] }); 
    
  }; 


  return(
    <div>
          {
                    props.cart.length === 0
                    ?
                    <>
                    </>
                    :
                    <>
                    <div> <p className="filmsPrice">Price</p>
                      {props.cart.map( film => {
                      return (
                        <div className="ordersContainer"key={film.id}>
                            <img className="imgOrder" src={film.backdropPath} alt="order"/>
                        <div className="ordersInfo">
                            <p className="orderTitle">{film.title}</p>
                            <div className="inputGiftContainer">
                              <input className="inputGift" type="checkbox"/>
                              <p className="pGift">It's a gift</p>
                            </div>
                            <div className="ordersActionsContainer">
                              <u className="actionDelete" onClick={()=> deleteOrder()}>Delete</u>
                              <u className="actionSave">Save on Whishes</u>
                            </div>

                            
                            
                        </div>

                        <div className="ordersPrice">
                            <p className="pPrice">{film.price} €</p>
                        </div>

                        
                        

                        </div>                       
                      );})}
                    </div>
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




// onClick={()=> deleteOrder()}