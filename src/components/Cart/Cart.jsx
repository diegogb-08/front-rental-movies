import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'

function Cart(props) {

   

    return (
        <div className='cartComponent'>
                <FontAwesomeIcon className='filmIcon' icon={faFilm} />
                {
                    props.cart.length === 0
                    ?
                    <>
                    </>
                    :
                    <>
                        <div className="counterCart">{props.cart.length}</div>
                    </>
                }
                
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart : state.cartReducer.cart,
        totalCart: state.cartReducer.totalCart
    }
  }

export default connect(mapStateToProps)(Cart);
