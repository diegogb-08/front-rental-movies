import React from 'react'
import {connect} from 'react-redux';

function User(props) {
    return (
        <div>
            This is the User View
        </div>
    )
};


const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
    }
};

export default connect(mapStateToProps)(User);
