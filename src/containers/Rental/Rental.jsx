import React, {useState} from "react";

import Header from '../../components/Header/Header';
import Orders from "../../components/Orders/Orders";
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";



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
          
          <div className="rentalSuperMainContainer">
              <div className="rentalMainContainer">
          <TabNav tabs={['Orders', 'Wishes', 'Last Orders', 'Gifts', 'Give Away']} selected={tab.selected} setSelected={setSelected}>
              <Tab isSelected={tab.selected === 'Orders'}>
                <div className="cardInfo">
                  <Orders
                  
                  />
                </div>

                
            

                



              </Tab>
              <Tab isSelected={tab.selected === 'Last Orders'}>
                <div className="cardInfo">
                  
                </div>

                
            

                



              </Tab>




          </TabNav>

            </div>

          </div>
          

        </div>
    )
};

export default Rental