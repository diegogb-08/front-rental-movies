import React from 'react'
import {connect} from 'react-redux';
import Button from '../Button/Button';

function Orders(props) {


  return(
    <div>
          {
                    props.cart.length === 0
                    ?
                    <>
                    </>
                    :
                    <>
                    <div className="ordersContainer">
                      {props.cart.map( film => {
                      return (
                        <div className="ordersContainer" key={film.id}>
                            <img className="imgOrder" src={film.imgFilm} alt="order"/>
                            <p className="prueba">{film.title}</p>
                            <p>Price: {film.price} $</p>
                            
                            
                           
                           
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
