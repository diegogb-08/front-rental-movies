import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { port, customer, rental } from '../../api/ApiMongoDB';
import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button';
import { CLEAN } from "../../redux/types/cartType";
import axios from 'axios'
import NavBtn from "../../components/NavBtn/NavBtn";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Footer from "../../components/Footer/Footer";




function Rental(props) {

  // AUTHORIZATION
  let token = props.token
  let auth = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  // HOOKS

  let history = useHistory();


  const home = () => {
      setTimeout(() => {
          history.push('/')
      }, 1000)
  }

  const [totalPrice, setTotalPrice] = useState(0)

  const [tab, setTab] = useState({
    selected: 'Orders'
  });


  useEffect(() => {
    calculateTotal();
  }, []);


  useEffect(() => {
    calculateTotal();
  });



  // FUNCTIONS


  // Función para enviar las peliculas al backend
  const buyOrder = async () => {

    let body = {
      rental: props.cart
    }
    const id = props.user._id;
    await axios.post(port + rental + customer + '/' + id, body, auth);

    return props.dispatch({ type: CLEAN, payload: [] });

  }

  const calculateTotal = () => {
    let totalPriceOnCart = 0

    let priceArray = props.cart.map(x => {
      return x.price
    })

    priceArray.map(num => {
      return totalPriceOnCart += num
    })

    setTotalPrice(totalPriceOnCart)



  };

  const setSelected = (tab) => {
    setTab({ selected: tab });
  }
  return (
    <div className="rentalComponent">
      <Header onClick={() => home()}>
        <div className="rentalNav">
          <NavBtn>
            <DropDownMenu/>
          </NavBtn>
        </div>
      </Header>

      <div className="rentalBody">
        <div className="rentalContainer"> 
          <TabNav tabs={['Orders', 'Last Orders', 'My List', 'Gifts']} selected={tab.selected} setSelected={setSelected}>
            <Tab isSelected={tab.selected === 'Orders'}>
             <Orders/>
            </Tab>
            <Tab isSelected={tab.selected === 'Last Orders'}>

            </Tab>
            <Tab isSelected={tab.selected === 'My List'}>

            </Tab>
            <Tab isSelected={tab.selected === 'Gifts'}>

            </Tab>
        
          </TabNav>


        </div>
        <div className="cartBoxContainer">
          <div className="cartBoxFixed">
          <div className="basketRental">
            <div className="iconCounterContainer">
              <div><FontAwesomeIcon className='filmIconRental' icon={faFilm} /></div>
              <div className="counterCartRental">{props.cart.length}</div>
            </div>
            <div className="priceButtonContainer">
              <p className="pTotalPrice">{totalPrice}€</p>
            </div>
            <div className="containerButtonsRental">
              <div className="buyButton">
                <Button name="Buy" onClick={() => buyOrder()} />
              </div>
            </div>
            </div>
          </div>
        </div>
 

      </div>
      <Footer/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    user: state.userReducer.user,
    token: state.userReducer.token
  }
}

export default connect(mapStateToProps)(Rental);
