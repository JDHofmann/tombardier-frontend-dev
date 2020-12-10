import React from 'react'
import { connect } from 'react-redux';
import '../css/LocalBtn.css'



class LocalDeleteBtn extends React.Component{

    render(){

        return(
                this.props.currentUser ? 
                <button
                    className={`local-btn delete-btn ${this.props.classAddition}`} 
                    onClick={this.props.handleDelete}
                >{ this.props.deleteProject ? "Delete Project" : <i className="far fa-trash-alt"></i> }</button>
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