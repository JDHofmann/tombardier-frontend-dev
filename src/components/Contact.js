import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = ({user}) => {

    const renderUserLinks = () => {
    return user.user_links.map(ul =>
    <NavLink to="https://github.com/">{ul.link_text}</NavLink>
    )
    }

    return(
        <div>
            <h3>Contact Info</h3>
            <p>{user.contact_email}</p>
            <h4>Links</h4>
            {renderUserLinks()}
        </div>
    )
}
export default Contact