import React from 'react'
import { connect } from 'react-redux';
import { createUserLink } from '../redux/actions'
import LinkForm from './LinkForm';

class NewLink extends React.Component{

    state = {
        link_url: "",
        link_text: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.project){
            let projectId = this.props.projectId
            // console.log(projectId)
            this.props.createProjectLink(this.state, projectId)
        }else{
            let userId = this.props.userId
            this.props.createUserLink(this.state, userId) 
        }
        this.setState({
            link_url: "",
            link_text: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
            <h4 className="ct-label">Add a New Link</h4>
            <LinkForm 
                link_url={this.state.link_url}
                link_text={this.state.link_text}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                new
            />
            </>
        )
    }
}

const mdp = dispatch => {
    return {
        createUserLink: (newLink, userId) => dispatch(createUserLink(newLink, userId) )
    }
}

export default connect(null, mdp)(NewLink) 