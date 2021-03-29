import React, { useState} from 'react'
import profile from '../../img/avatarUser.png'
import { useHistory, Link } from 'react-router-dom'



function AvatarUser(props) {

    // let history = useHistory();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);




    return (

        <div className="imageUser" >
            <img src={profile} alt="profile" onClick={handleClick} />
            <i className={click ? 'fas fa-poo' : 'fas fa-caret-down'} />

        </div>
    )
}

export default AvatarUser