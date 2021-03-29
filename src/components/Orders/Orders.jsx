import React, {useEffect} from 'react'
import {connect} from 'react-redux';







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
                    <div className="OrdersContainer">
                    {props.cart.map( film => {
                    return (
                    <div key={film.id}>
                      <p>Title: {film.title}</p>
                      <img src={film.imgFilm} alt="film"/>
                      <p>Price: {film.price} $</p>
                      <p>Vote Average: {film.voteAverage}</p>
                    </div>
                    )
                    })}
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



/*
    {
                    props.cart.length === 0
                    ?
                    <>
                    </>
                    :
                    <>
                                      <div className="OrdersContainer">
              {props.cart.map( film => {
                  return (
                    <div key={film.id}>
                      <p>{film.title}</p>
                    </div>
                  )
              })}
          </div>
                    
                    </>
  
                  }





*/