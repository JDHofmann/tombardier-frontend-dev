import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { editLinkInfo, createUserLink, deleteUserLink } from '../redux/actions'
import { LocalEditBtn } from '../components/LocalEditBtn'
import LinkForm from './LinkForm';
import { LocalDeleteBtn } from './LocalDeleteBtn';


class UserLink extends React.Component{

    state = {
        link_url: this.props.link.link_url,
        link_text: this.props.link.link_text,
        id: this.props.link.id,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let patchObj = {...this.state}    
        delete patchObj.editMode   
        this.props.editLinkInfo(patchObj) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDelete = () => {
        this.props.deleteUserLink(this.state.id)
    }

    render(){
        return(
            <>
            <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            <LocalDeleteBtn 
                handleDelete={this.handleDelete}
            />
            {
                this.state.editMode ? 
                <LinkForm 
                    link_url={this.state.link_url}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    link_text={this.state.link_text}
                />
                :
                <NavLink
                    key={this.props.link.link_url} 
                    to="https://github.com/">{this.props.link.link_text}</NavLink>
                }
            </>

        )
    }
}

const mdp = dispatch => {
    return {
        editLinkInfo: (patchObj) => dispatch(editLinkInfo(patchObj)),
        createUserLink: (newLink, userId) => dispatch(createUserLink(newLink, userId) ),
        deleteUserLink: (id) => dispatch(deleteUserLink(id))
    }
}

export default connect(null, mdp)(UserLink)