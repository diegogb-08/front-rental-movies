import React, { useState } from 'react'
import profile from '../../img/avatarUser.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import DropDownMenu from '../DropDownMenu/DropDownMenu'

function NavBtn(props) {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);



    return (
        <div className="loggedUser" onClick={handleClick}>
            <FontAwesomeIcon className="arrow" icon={faSortDown} />
            <img className='profileImg' src={profile} alt={profile}/>
            {open && <DropDownMenu></DropDownMenu>}
        </div>
    )
}

export default NavBtn;
