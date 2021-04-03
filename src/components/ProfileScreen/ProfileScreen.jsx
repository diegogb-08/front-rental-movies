import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import NavBtn from '../NavBtn/NavBtn';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import profile from '../../img/avatarUser.png'
import imgSubs from '../../img/Artboard.svg';
import Tab from '../../components/Tab/Tab';
import TabNav from "../../components/Tab/TabNav";
import ProfileModal from '../ProfileModal/ProfileModal';
import moment from 'moment';


function ProfileScreen(props) {

    let history = useHistory();

    const home = () => {
        setTimeout(() => {
            history.push('/user')
        }, 1000)
    }
    console.log(props.user)
    //Tab
    const [tab, setTab] = useState({
        selected: 'Account'
    })

    // FUNCTIONS

    const setSelected = (tab) => {
        setTab({ selected: tab });
    }

    return (
        <div className="profileComponent">
            <Header onClick={() => home()}>
                <div className="profileNav">
                    <NavBtn>
                        <DropDownMenu />
                    </NavBtn>
                </div>
            </Header>
            <div className="profileBody">
                <div className="profileContainer">
                    <TabNav tabs={['Account', 'User Info']} selected={tab.selected} setSelected={setSelected}>
                        <Tab isSelected={tab.selected === 'Account'}>
                            <div className="tabContainer">
                                <div className="profileTitle">
                                    <h1>Account <img src={imgSubs} alt="imgSubs" /> </h1>
                                    <h2>SUBSCRIBER SINCE {moment(props.user.creationDate).format('YYYY')}</h2>
                                </div>
                                <div className="profileDetails">
                                    <img src={profile} alt="profile" />
                                    <p>Email: {props.user.email}</p>
                                </div>
                                <div className="profileInfo">
                                    <h2>CURRENT PLAN</h2>
                                    <div className="profilePlan">
                                        <p>Premium ULTRA <span>HD</span></p>
                                    </div>
                                    <div className="profilePlan">
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab isSelected={tab.selected === 'User Info'}>
                            <div className="tabContainer">
                                <div className="profileTitle">
                                    <h1>User Info<img src={imgSubs} alt="imgSubs" /> </h1>
                                </div>
                                <div className="userDetails">
                                    <p>Full Name: <span>{props.user?.full_name}</span></p>
                                    <p>Phone Number: <span>{props.user?.phone_number}</span></p>
                                    <p>Address: <span>{props.user?.address}</span></p>
                                    <p>Birth Date: <span>{moment(props.user?.birth_date).format('DD-MM-YYYY')}</span></p>
                                    <p>Email: <span>{props.user?.email}</span></p>
                                </div>
                                <div className="addInfo">
                                    <div className="userInfo">
                                        <ProfileModal>
                                            <button className="buttonProfile">ADD USER INFO</button>
                                        </ProfileModal>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </TabNav>
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
