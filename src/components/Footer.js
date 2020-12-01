import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = (props) => {

    return (
        <footer className="footer">
         { props.currentUser ? 
         <button 
         className="log" 
         onClick={props.handleLogout}
         >Logout</button>
         :
         <NavLink 
         className="log"
         to="/login"
         >Admin</NavLink>
        }
        <p className="tombar">powered by Tombardier</p>
        </footer>
    )
}
export default Footer