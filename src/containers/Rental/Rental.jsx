import React, {useState, useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import {connect} from 'react-redux';
import Button from '../../components/Button/Button';




function Rental (props) {
  // HOOKS

  const [totalPrice, setTotalPrice] = useState(0)

  const [tab, setTab] = useState({
    selected: 'Orders'
  });


  useEffect(() => {
      calculateTotal();
    },[]);
  
    
  useEffect(()=> {
      calculateTotal();
  });
  


 // FUNCTIONS

  const calculateTotal = () => {
    console.log(props.cart, "Peliculas en Redux")

      let totalPriceOnCart = 0
      

      let priceArray = props.cart.map(x=> {
        return x.price
      })
      console.log(priceArray, "=====================")
      priceArray.map(num => {
        totalPriceOnCart +=num
      })
      setTotalPrice(totalPriceOnCart)
      


  };

  const setSelected = (tab) => {
    setTab({selected: tab});
  }
    return (
        <div className="rentalContainer">
            <Header/>
          
          <div className="rentalSuperContainer">
              
            <TabNav tabs={['Orders', 'Wishes', 'Last Orders', 'Gifts']} selected={tab.selected} setSelected={setSelected}>
                <Tab isSelected={tab.selected === 'Orders'}>
                    <Orders/>
                </Tab>
                <Tab isSelected={tab.selected === 'Last Orders'}>

                </Tab>

            </TabNav>
           
          </div>
          
          <div className="basketRental">
            <div className="iconCounterContainer">
              <div><FontAwesomeIcon className='filmIconRental' icon={faFilm}/></div>
              <div className="counterCartRental">{props.cart.length}</div> 
            </div>
            <div className="priceButtonContainer">
                <p className="pTotalPrice">{totalPrice}€</p>
                <div className="rentalButton">
                  <Button name="Buy"/>
                </div>
            </div>
                     
          </div>
          
        </div>
    )
};

const mapStateToProps = state => {
  return {
      cart : state.cartReducer.cart,
      
  }
}

export default connect(mapStateToProps)(Rental);