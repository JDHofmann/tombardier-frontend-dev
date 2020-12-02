import React from 'react'
import { connect } from 'react-redux';


class LocalEditBtn extends React.Component{

    render(){

        return(
            this.props.currentUser ?
            <button
                className={`local-edit-btn ${this.props.classAddition}`} 
                onClick={this.props.toggleEditMode}
            >{ this.props.editMode ? "view" : <i class="fas fa-pencil-alt"></i> }</button>
            : null
        )
    }

}
const msp = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp)(LocalEditBtn)