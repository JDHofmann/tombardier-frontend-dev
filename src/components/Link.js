import React from 'react'
import { connect } from 'react-redux';
import { editLinkInfo, createUserLink, deleteUserLink, editProjectLink, deleteProjectLink } from '../redux/actions'
import LocalEditBtn from './LocalEditBtn'
// import LocalDeleteBtn from './LocalDeleteBtn';
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
            <li>
            {this.state.editMode ?
                <>
                <h4 className="section-header lighter">Update Link</h4> 
                <LinkForm 
                    link_url={this.state.link_url}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    link_text={this.state.link_text}
                    toggleEditMode={this.toggleEditMode}
                    handleDelete={this.handleDelete}
                    editMode={this.state.editMode}
                />
                </>
                :
                <div className="content-sub-div ">
                    <a
                        className="grid-1-2 link-hover content-row"
                        target="_blank"
                        href={this.props.link.link_url}
                    >{this.props.link.link_text}</a>  
                    {/* <LocalDeleteBtn 
                        handleDelete={this.handleDelete}
                    /> */}
                    <LocalEditBtn 
                        editMode={this.state.editMode}
                        toggleEditMode={this.toggleEditMode}
                    />
                </div>
            }
            </li>

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