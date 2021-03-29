import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'

function Cart(props) {

    let history = useHistory()
    
    const orders = () => {
       setTimeout(()=>{
        history.push('/rental')
       },1000)
   }

    return (
        <div className='cartComponent' onClick={()=>orders()}>
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
