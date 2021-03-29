import React from 'react'
import logo from '../../img/logo.png'
import { connect } from 'react-redux';



function Header(props) {


    return (
        <div className="headerComponent">
            <div className="logoContainer">
                <img src={logo} alt="logo" onClick={props.onClick} />
            </div>
            {props.children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps)(Header);




/* Roo says: Ternaria Dieg

                {
                !props.user.div
                ?
                <>
                     <div className="buttonLogin">{props.children}</div>
                </>
                :
                <>
                    <div>
                      botones del user view
                    </div>
                </>
            }

*/