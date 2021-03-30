import React from 'react'
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/userType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


function DropDownMenu(props) {

    let history = useHistory();

    const bringMeTo = () => {
        history.push('/user')
    }

    const logOut = () => {
        setTimeout(()=> {
            props.dispatch({ type: LOGOUT, payload : {}});
        },500);
    }

    function DropDownItem(props){
        return (
            <div className="menuItem" >
                <span className="iconBtn">{props.leftIcon}</span>
                {props.children}
                <span className="iconRight">{props.rightIcon}</span>
            </div>
        )
    }

    return (
        <div className="dropDown">
            <div className="divItem" onClick={()=>bringMeTo()}>
                <DropDownItem >
                    <FontAwesomeIcon icon={faUser} className="iconBtn"/>
                    My Profile
                </DropDownItem>
            </div>
            <div className="divItem" onClick={()=>logOut()}>
                <DropDownItem >
                    <FontAwesomeIcon icon={faSignOutAlt} className="iconBtn"/>
                    Log Out
                </DropDownItem>
            </div>
        </div>
    )
}

export default connect()(DropDownMenu);
