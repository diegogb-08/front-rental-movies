import React from 'react'
import {connect} from 'react-redux';
import rental from '../../img/rental.gif'






function Gifts(props) {

  return(
    <div className="giftsComponent">
          {
                    props.cart.length === 0
                    ?
                    <>
                    <div className="emptyGiftsContainer">
                      <div className="messageEmptyGifts">
                        <p className="pEmptyOrder">Work in progress ...</p>              
                      </div>
                      <div className="containerCatGifts">
                        <img className="happyCat"src={rental} alt="happyCat"/>
                      </div>  
                    </div>
                    </>
                    :
                    <>                
                    <div className="emptyGiftsContainer">
                      <div className="messageEmptyGifts">
                        <p className="pEmptyOrder">Work in progress ...</p>              
                      </div>
                      <div className="containerCatGifts">
                        <img className="happyCat"src={rental} alt="happyCat"/>
                      </div>  
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

export default connect(mapStateToProps)(Gifts);