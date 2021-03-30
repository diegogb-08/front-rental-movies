import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import NavBtn from '../NavBtn/NavBtn';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import profile from '../../img/avatarUser.png'
import imgSubs from '../../img/Artboard.svg';






function ProfileScreen(props) {

    let history = useHistory();


    const home = () => {
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (
        <div className="profileComponent">
            <Header onClick={() => home()}>
                <NavBtn>
                    <DropDownMenu />
                </NavBtn>
            </Header>
            <div className="profileBody">
                <div className="profileContainer">
                    <div className="profileTitle">
                        <h1>Account <img src={imgSubs} alt="imgSubs" /> <h2>SUBSCRIBER SINCE 2015</h2></h1>
                    </div>
                    <div className="profileDetails">
                        <img src={profile} alt="profile" />
                        <p>Email: {props.user.email}</p>
                        <div className="profilePassword">
                            <p>Password: *********</p>
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h2>CURRENT PLAN</h2>
                        <div className="profilePlan">
                            <p>Premium ULTRA <span>HD</span></p>
                        </div>
                        <div className="profilePlan">
                            <button className="buttonProfile">Change Plan</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps)(ProfileScreen);
