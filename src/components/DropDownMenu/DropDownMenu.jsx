import React from 'react'
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/userType';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { CLEAN_LIST } from '../../redux/types/listType';



function DropDownMenu(props) {

    let history = useHistory();


    const bringMeTo = () => {
        history.push('/profile')
    }
    const rental = () => {
        history.push('/rental')
    }
    const user = () => {
        history.push('/user')
    }

    const logOut = () => {
        setTimeout(()=> {
            props.dispatch({ type: LOGOUT, payload : {}});
            props.dispatch({ type: CLEAN_LIST, payload : {}});
            localStorage.setItem('email', '')
            localStorage.removeItem('loading')
        },500);
        history.push("/");
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
            {
                props.user?.email !== 'fakeflix@fakeflix.com'
                ?
                <>
                    <div className="divItem" onClick={()=>bringMeTo()}>
                        <DropDownItem >
                            <FontAwesomeIcon icon={faUser} className="iconBtn"/>
                            Account
                        </DropDownItem>
                    </div>
                    <div className="divItem" onClick={()=>rental()}>
                        <DropDownItem >
                            <FontAwesomeIcon icon={faVideo} className="iconBtn"/>
                            Rental
                        </DropDownItem>
                    </div>
                    <div className="divItem" onClick={()=>user()}>
                        <DropDownItem >
                            <FontAwesomeIcon icon={faTicketAlt} className="iconBtn"/>
                            User View
                        </DropDownItem>
                    </div>
                    <div className="divItem" onClick={()=>logOut()}>
                        <DropDownItem >
                            <FontAwesomeIcon icon={faSignOutAlt} className="iconBtn"/>
                            Logout
                        </DropDownItem>
                    </div>
                </>
                :
                <>
                    <div className="divItem" onClick={()=>logOut()}>
                        <DropDownItem >
                            <FontAwesomeIcon icon={faSignOutAlt} className="iconBtn"/>
                            Logout
                        </DropDownItem>
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps)(DropDownMenu);
