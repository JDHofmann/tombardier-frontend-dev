import React from 'react'
import { connect } from 'react-redux';


class LocalEditBtn extends React.Component{

    render(){

        return(
            this.props.currentUser ?
            <button
                className={`local-edit-btn grid-3-4 grid-row-1 ${this.props.classAddition}`} 
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