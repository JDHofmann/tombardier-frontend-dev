import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

    // const styling = {
    //     backgroundColor: "#fff0f0",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "7.5vh"
    // }

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