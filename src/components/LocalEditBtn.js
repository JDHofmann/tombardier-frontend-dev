import React from 'react'
import { connect } from 'react-redux';
import '../css/LocalBtn.css'

class LocalEditBtn extends React.Component{

    render(){

        return(
            this.props.currentUser ?
            <button
                className={`local-btn edit-btn ${this.props.classAddition}`} 
                onClick={this.props.toggleEditMode}
            >{ this.props.editMode ? <i className="far fa-eye"></i> : <i className="fas fa-pencil-alt"></i> }</button>
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