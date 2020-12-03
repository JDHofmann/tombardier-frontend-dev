import React from 'react'
import Link from '../components/Link'
import NewLink from '../components/NewLink';

import LocalEditBtn from '../components/LocalEditBtn'



class Contact extends React.Component{

    state = {
        contact_email: this.props.user.contact_email,
        editMode: false,
        showNewLink: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    showNewLinkForm = () => {
        this.setState({ showNewLink: true })
    }

    hideNewLinkForm = () => {
        this.setState({ showNewLink: false })
    }

    renderUserLinks = () => {
    return this.props.user.user_links.map(ul =>
        <li 
            className="ct-row edit-btn-grid"
            key={ul.id}>
            <Link 
                key={ul.link_url}
                link={ul}
            />
        </li>
    )}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let patchObj = {...this.state}    
        delete patchObj.editMode
        delete patchObj.showNewLink   
        console.log(patchObj)
        this.props.editSiteInfo(patchObj)
        this.setState({
            editMode: false
        })
    }

    renderNewLink = () => {
        if(this.props.currentUser){
            if(this.state.showNewLink){
                return <NewLink 
                        createUserLink={this.props.createUserLink}
                        userId={this.props.user.id}
                        hideNewLinkForm={this.hideNewLinkForm}
                    />
            } else {
                return <button
                        className="update grid-1-4"
                        onClick={this.showNewLinkForm}
                    >Add New Link</button>
            }   
        }

    }
  


    render(){

        return(
            <div className="text-wrapper edit-btn-grid">
            <h2 className="contact">Contact</h2>
            <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            { this.state.editMode ? 
            <>
            <form 
                onSubmit={this.submitHandler}
                className="contact-info grid-1-4">
                <label className="ct-label ct-row">Email</label>
                <input
                    className="ct-input ct-row"
                    name="contact_email"
                    value={this.state.contact_email}
                    onChange={this.handleChange}
                ></input>
                <button 
                    type="submit"
                    className="update"
                    >Submit Changes</button>
            </form>
            </>
            :
            <div className="contact-info grid-1-4">
                <h4 className="ct-label ct-row  ">Email</h4>
                <a 
                    href={`mailTo:${this.props.user.contact_email}`}
                    className="ct-input ct-row link-hover">{this.props.user.contact_email}</a>
            </div>
            }
            
            <ul className="contact-info grid-1-4">
                <h4 className="ct-label">Links</h4>
                {this.renderUserLinks()}
            </ul>
            {this.renderNewLink()}
            
            </div>
        )
    }
}

export default Contact