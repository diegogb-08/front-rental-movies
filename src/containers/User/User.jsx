import React from 'react'
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Movie from '../../components/Movie/Movie';

function User(props) {
    return (
        <div>
          
          <Header>
            Soy el Componente Header
          </Header>
          <Movie/>
         
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
