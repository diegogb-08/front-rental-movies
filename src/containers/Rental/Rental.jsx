import React, {useState} from "react";

import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";



function Rental () {

  // HOOKS

  const [tab, setTab] = useState({
    selected: 'Rental Menu'
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
              <Tab isSelected={tab.selected === 'Rental Menu'}>
                <div className="cardInfoRental">






                </div>



              </Tab>




          </TabNav>

            </div>

          </div>
          

        </div>
    )
};

export default Rental;