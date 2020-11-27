import React from 'react'
import UserLink from '../components/UserLink'
import NewUserLink from '../components/NewUserLink';


import { LocalEditBtn } from '../components/LocalEditBtn'



class Contact extends React.Component{

    state = {
        contact_email: this.props.user.contact_email,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    renderUserLinks = () => {
    return this.props.user.user_links.map(ul =>
        <li className="ct-row">
            <UserLink 
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
        this.props.editSiteInfo(this.state)
    }

    render(){

        return(
            <div className="text-wrapper">
            <h2>Contact</h2>
            <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            { this.state.editMode ? 
            <>
            <form 
                onSubmit={this.submitHandler}
                className="contact-info">
                <label className="ct-label ct-row">Email</label>
                <input
                    className="ct-input ct-row"
                    name="contact_email ct-row"
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
            <div className="contact-info">
                <h4 className="ct-label ct-row">Email</h4>
                <p className="ct-input ct-row">{this.props.user.contact_email}</p>
            </div>
            }
            <ul className="contact-info">
                <h4 className="ct-label">Links</h4>
                {this.renderUserLinks()}
            </ul>           
            <NewUserLink 
                createUserLink={this.props.createUserLink}
                userId={this.props.user.id}
            />
            </div>
        )
    }
}

// const mdp = dispatch => {
//     return {
//         createUserLink: (newLink, userId) => dispatch(createUserLink(newLink, userId) )
//     }
// }

// export default connect(null, mdp)(Contact)
export default Contact