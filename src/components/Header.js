import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

    const styling = {
        backgroundColor: "#fff0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "7.5vh"
    }

    return(
        <header style={styling}>
            <NavLink
                to="/"
            >Projects</NavLink>
            <NavLink
                to="/about"
            >About</NavLink>
            <NavLink
                to="/contact"
            >Contact</NavLink>
        </header>
    )
}
export default Header