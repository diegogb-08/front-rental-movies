import React from 'react'
import {connect} from 'react-redux';
import sadcat from '../../img/sadcat.png'
import angrycat from '../../img/angrycat.png'



function LastOrders(props) {


  

  return(
    <div className="lastOrderComponent">
          {
                    props.cart.length === 0
                    ?
                    <>
                    <div className="emptyLastOrderContainer">
                      <div className="messageEmptyLastOrder">
                        <h1>You don't have orders yet.</h1>
                        <br/>
                        <h2>Please try to buy something,</h2>
                        <br/>
                        <br/>
                        <h3>We need the money.</h3>                     
                      </div>
                      <div className="containerCatLastOrder">
                          <img className="angryCat" src={angrycat} alt="angry"/>
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