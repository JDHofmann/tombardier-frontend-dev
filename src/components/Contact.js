import React from 'react'
import { NavLink } from 'react-router-dom'

class Contact extends React.Component{

    state = {
        contact_email: this.props.user.contact_email
    }

    renderUserLinks = () => {
    return this.props.user.user_links.map(ul =>
    <NavLink key={ul.link_url} to="https://github.com/">{ul.link_text}</NavLink>
    )}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.editSiteInfo(this.state)
        // this.setState({
        //     contact_email: this.props.user.contact_email
        // })
    }

    render(){

        return(
            <>
            { this.props.editMode ? 
                <form onSubmit={this.submitHandler}>
                    <input
                        name="contact_email"
                        value={this.state.contact_email}
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit">Submit Changes</button>
                </form>
            :
            <div>
                <h3>Contact Info</h3>
                <p>{this.props.user.contact_email}</p>
                <h4>Links</h4>
                {this.renderUserLinks()}
            </div>
            }
            </>
        )
    }
}
export default Contact