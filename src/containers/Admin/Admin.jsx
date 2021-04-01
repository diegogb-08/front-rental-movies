import React,{useEffect} from 'react'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import Header from '../../components/Header/Header'
import NavBtn from '../../components/NavBtn/NavBtn'
import axios from 'axios'
import {port, rental} from '../../api/ApiMongoDB'

function Admin() {


    const getAllRentals = () => {

        let result = axios.get(port+rental)
        console.log(result.data)

    }


    useEffect(()=> {
        getAllRentals()
    },[])


    return (
        <div className='adminContainer'>
            <Header>
                <div className="adminNav">
                    <NavBtn>
                        <DropDownMenu/>
                    </NavBtn> 
                </div>
            </Header>
            <div className="allRentalsContainer">

            </div>
        </div>
    )
}

export default Admin
