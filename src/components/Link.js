import React from 'react'
import { connect } from 'react-redux';
import { editLinkInfo, createUserLink, deleteUserLink, editProjectLink, deleteProjectLink } from '../redux/actions'
import LocalEditBtn from './LocalEditBtn'
import LocalDeleteBtn from './LocalDeleteBtn';
import LinkForm from './LinkForm';


class Link extends React.Component{

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
        if(this.props.project){
            this.props.editProjectLink(patchObj)
        } else {
            this.props.editLinkInfo(patchObj) 
        }
        this.setState({
            editMode: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDelete = () => {
        if(this.props.project){
            this.props.deleteProjectLink(this.state.id)
        } else {
            this.props.deleteUserLink(this.state.id)
        }
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
                // <NavLink
                //     key={this.props.link.link_url} 
                //     to={this.props.link.link_url}>{this.props.link.link_text}</NavLink>
                <p
                    className="ct-input link-hover"
                    onClick={()=>{window.open(this.props.link.link_url, '_blank');}}
                >{this.props.link.link_text}</p>
                    
                }
            </>

        )
    }
}

const mdp = dispatch => {
    return {
        editLinkInfo: (patchObj) => dispatch(editLinkInfo(patchObj)),
        createUserLink: (newLink, userId) => dispatch(createUserLink(newLink, userId) ),
        deleteUserLink: (id) => dispatch(deleteUserLink(id)),
        editProjectLink: (patchObj) => dispatch(editProjectLink(patchObj)),
        deleteProjectLink: (id) => dispatch(deleteProjectLink(id))
    }
}

export default connect(null, mdp)(Link)