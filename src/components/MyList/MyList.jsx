import React from 'react'
import {connect} from 'react-redux'

function MyList(props) {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
    }
};

export default connect(mapStateToProps)(MyList);
