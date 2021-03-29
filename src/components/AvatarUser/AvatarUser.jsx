import React from 'react'
import profile from '../../img/avatarUser.png'
import { useHistory } from 'react-router-dom'



function AvatarUser(props) {

    let history = useHistory();




    return (
        <div className="imageUser">
                    <img src={profile} alt="profile" onClick={() => { history.push('/profile') }} />
                </div>
    )
}

export default AvatarUser

