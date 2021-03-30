import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import {connect} from 'react-redux';
import Button from '../../components/Button/Button';



function Rental (props) {
  console.log(props.cart)
  // HOOKS

  const [tab, setTab] = useState({
    selected: 'Orders'
  })

 // FUNCTIONS

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
                <p className="pTotalPrice">Total Price PROPS</p>
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
      cart : state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(Rental);