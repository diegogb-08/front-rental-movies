import React from 'react'
import {connect} from 'react-redux';
import rental from '../../img/rental.gif'



function LastOrders(props) {


  

  return(
    <div className="lastOrderComponent">
          {
                    props.cart.length === 0
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
                      {props.cart.map( film => {
                      return (
                        <div className="lastOrdersContainer"key={film.id}>
                          <div className="imgLastOrderContainer">
                            <img className="imgLastOrder" src={film.backdropPath} alt="lastOrder"/>
                          </div> 
                          <div className="infoLastOrderContainer">
                            <p className="lastOrderTitle">{film.title}</p>
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

export default connect(mapStateToProps)(LastOrders);