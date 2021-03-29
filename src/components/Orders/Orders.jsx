import React from 'react'
import {connect} from 'react-redux';

function Orders(props) {
  
  return (
    <div className="ordersContainer">
      <h1>Hola soy Orders</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      cart : state.cartReducer.cart,
  }
}

export default connect(mapStateToProps)(Orders);



