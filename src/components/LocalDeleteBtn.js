import React from 'react'
import { connect } from 'react-redux';


class LocalDeleteBtn extends React.Component{

    render(){

        return(
                this.props.currentUser ? 
                <button
                    className={`local-delete-btn ${this.props.classAddition}`} 
                    onClick={this.props.handleDelete}
                >{ this.props.deleteProject ? "Delete Project" : "Delete" }</button>
                : null
        )
    }
}
const msp = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(msp)(LocalDeleteBtn)