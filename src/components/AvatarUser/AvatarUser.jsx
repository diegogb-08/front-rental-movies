import React, { useState } from 'react'
import profile from '../../img/avatarUser.png'



function AvatarUser(props) {

    // let history = useHistory();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);



    return (

        <div className="imageUser" >
            <div className='dropdown'>
                <img src={profile} alt="profile" onClick={handleClick} />
                <i className={click ? 'fas fa-poo' : 'fas fa-caret-down'} />
                <div className='dropdown-content'>
                    <a href='/rental'>Link 1</a>
                    <a href='/user'>Link 2</a>
                    <a href='/profile'>Link 3</a>
                </div>
            </div>
        </div>
    )
}

export default AvatarUser