import React from 'react'

const Footer = (props) => {

    // const styling = {
    //     backgroundColor: "#f0f0ff",
    //     display: "flex"
    // }

    // const startEditModeHandler = () => {
    //     props.startEditMode()
    // }

    // const startViewModeHandler = () => {
    //     props.startViewMode()
    // }

    return (
        <footer className="header">
            {props.user ? 
            <>
                {/* <button
                    onClick={startEditModeHandler}
                >Edit Mode</button>
                <button
                    onClick={startViewModeHandler}
                >View Mode</button> */}
                <button className="logout">Logout</button>
            </> : <button>Login</button>
            }
            
            

        </footer>
    )
}
export default Footer