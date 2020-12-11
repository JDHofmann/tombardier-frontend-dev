import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Header.css'

const Header = () => {

    return(
        <header 
            className="header flex-center">
                <p className="site-header"><span>Tombardier</span> portfolio building made simple</p>
            <NavLink
                exact
                to="/"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >Projects</NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >About</NavLink>
            <NavLink
                to="/contact"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >Contact</NavLink>
        </header>
    )
}
export default Header