import React from 'react'
import { connect } from 'react-redux';
import { createUserLink } from '../redux/actions'
import LinkForm from './LinkForm';

class NewUserLink extends React.Component{

    state = {
        link_url: "",
        link_text: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let userId = this.props.userId
        this.props.createUserLink(this.state, userId) 
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

export default connect(null, mdp)(NewUserLink) 