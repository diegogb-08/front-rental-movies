import React from 'react'
import { useHistory } from 'react-router-dom'

function NavMenu() {
    
    let history = useHistory()

     // FUNCTIONS

    const bringMeTo = (className) => {
        setTimeout(()=>{
            if(className === 'home')
                return history.push('/user')
            if(className === 'series')
                return history.push('/series')
            if(className === 'newPopular')
                return history.push('/newpopular')
            if(className === 'myList')
                return history.push('/mylist')
        },1000)
    }

    return (
        <div className="navMenu">
            <div className="home" onClick={()=>bringMeTo('home')}>Home</div>
            <div className="series" onClick={()=>bringMeTo('series')}>Series</div>
            <div className="newPopular" onClick={()=>bringMeTo('newPopular')}>New & Popular</div>
            <div className="myList" onClick={()=>bringMeTo('myList')}>My List</div>
        </div>
    )
}

export default NavMenu
