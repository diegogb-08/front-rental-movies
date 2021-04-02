import React from 'react'
import {connect} from 'react-redux';
import happycat from '../../img/happycat.png'






function Gifts(props) {

  return(
    <div className="giftsComponent">
          {
                    props.cart.length === 0
                    ?
                    <>
                    <div className="emptyGiftsContainer">
                      <div className="messageEmptyGifts">
                        <h1>Work in progress</h1>
                        <br/>
                        <h2>Senior trick</h2>
                        <br/>
                        <br/>
                        <h3>Guys.</h3>                     
                      </div>
                      <div className="containerCatGifts">
                        <img className="happyCat"src={happycat} alt="happyCat"/>
                      </div>  
                    </div>
                    </>
                    :
                    <>                
                      {props.cart.map( film => {
                      return (
                        <div className="GiftsContainer"key={film.id}>
                          <div className="imgGiftsContainer">
                            <img className="imgGifts" src={film.backdropPath} alt="gifts"/>
                          </div> 
                          <div className="infoGiftsContainer">
                            <p className="GiftsTitle">{film.title}</p>
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

export default connect(mapStateToProps)(Gifts);