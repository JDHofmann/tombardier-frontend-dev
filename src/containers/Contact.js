import React from 'react'
import UserLink from '../components/UserLink'
import NewUserLink from '../components/NewUserLink';
import { createUserLink } from '../redux/actions'
import { connect } from 'react-redux';


class Contact extends React.Component{

    state = {
        contact_email: this.props.user.contact_email
    }

    renderUserLinks = () => {
    return this.props.user.user_links.map(ul =>
        <li>

            <UserLink 
                key={ul.link_url}
                link={ul}
                // editMode={this.props.editMode}
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
        console.log(this.state)
        this.props.editSiteInfo(this.state)
        // this.setState({
        //     contact_email: this.props.user.contact_email
        // })
    }

    render(){

        return(
            <>
            <h2>Contact</h2>
            { this.props.editMode ? 
                <>
                <form onSubmit={this.submitHandler}>
                    <input
                        name="contact_email"
                        value={this.state.contact_email}
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit">Submit Changes</button>
                </form>
                <NewUserLink 
                        createUserLink={this.props.createUserLink}
                        userId={this.props.user.id}
                />
                </>
            :
            <div>
                <h3>Contact Info</h3>
                <p>{this.props.user.contact_email}</p>
                <h4>Links</h4>
            </div>
            }
            <ul>
                {this.renderUserLinks()}
            </ul>
            
            </>
        )
    }
}

const mdp = dispatch => {
    return {
        createUserLink: (newLink, userId) => dispatch(createUserLink(newLink, userId) )
    }
}

export default connect(null, mdp)(Contact)