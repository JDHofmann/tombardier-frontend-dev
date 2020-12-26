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
            <Link 
                key={ul.link_url}
                link={ul}
            />
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
                        className="update"
                        onClick={this.showNewLinkForm}
                    >Add New Link</button>
            }   
        }
    }
  
    renderEditButton = () => {
        return   <LocalEditBtn 
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
        />
    }

    render(){

        return(
            <div className="content-wrapper">
                <h2 className="section-header">Contact</h2>
                { this.state.editMode ? 
                    <>
                    <form 
                        onSubmit={this.submitHandler}
                        className="content-sub-div">
                        <label className="content-row">Email</label>
                        <input
                            type="email"
                            title="Please provide a valid email address"
                            className="content-row tab grid-1-3"
                            name="contact_email"
                            value={this.state.contact_email}
                            onChange={this.handleChange}
                        ></input>
                        <button 
                            type="submit"
                            className="update grid-1-2"
                        >Update</button>
                        {this.renderEditButton()}
                    </form>
                    </>
                    :
                    <div className="content-sub-div">
                        <h4 className="content-row">Email</h4>
                        <a 
                            className="content-row tab grid-1-3"
                            href={`mailTo:${this.props.user.contact_email}`}
                            >{this.props.user.contact_email}</a>
                        {this.renderEditButton()}
                    </div>
                }
                <h4 className="section-header">Links</h4>
                <ul>
                    {this.renderUserLinks()}
                </ul>

                {this.renderNewLink()}
            
            </div>
        )
    }
}

export default Contact