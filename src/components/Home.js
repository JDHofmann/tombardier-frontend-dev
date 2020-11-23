import React from 'react'

const Home = ({user}) => {

    const styling = {
        backgroundColor: "#f0fff0"
    }

    return(
        <div style={styling}>
            <h1>{user.site_title}</h1>
            <h2>{user.site_subtitle}</h2>
        </div>
    )
}
export default Home