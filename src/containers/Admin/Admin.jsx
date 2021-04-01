import React,{useEffect, useState} from 'react'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import Header from '../../components/Header/Header'
import NavBtn from '../../components/NavBtn/NavBtn'
import axios from 'axios'
import {port, rental} from '../../api/ApiMongoDB'
import moment from 'moment';

function Admin() {

    const [allRentals, setAllRentals] = useState([])
    console.log(allRentals)

    const getAllRentals = async () => {

        try{
            let result = await axios.get(port+rental)
            setAllRentals(result.data)
        }catch(e){
            return e.status(404)
        }
    }


    useEffect(()=> {
        getAllRentals()
    },[])


    return (
        <div className='adminContainer'>
            <div className="blackHeader"></div>
            <Header>
                <div className="adminNav">
                    <NavBtn>
                        <DropDownMenu/>
                    </NavBtn> 
                </div>
            </Header>
            <div className="allRentalsContainer">
                <table className='rentalTable'>
                    <thead>
                        <tr>
                            <th>Rental Id</th>
                            <th>Title</th>
                            <th>The MovieDB Id</th>
                            <th>User Email</th>
                            <th>Rental Date</th>
                            <th>Return Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRentals.map(order => {
                                return order.rental.map(film => {
                                    return(
                                        <tr>
                                                <td>{order._id}</td>
                                                <td>{film.title}</td>
                                                <td>{film.id}</td>
                                                <td>{order.email ? order?.email : 'email not found'}</td>
                                                <td>{moment(order.rental_date).format('DD-MM-YYYY')}</td>
                                                <td>{moment(order.return_date).format('DD-MM-YYYY')}</td>
                                                <td>€{film.price}</td>
                                        </tr>
                                
                                    )
                                  
                                })

                            })
                        }                   
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin
