import React from 'react'

const About = ({user}) => {
    return(
        <div>
            <img
                className="about-pic"
                alt="" 
                src={`http://localhost:3000/${user.image}`}></img>
            <p>{user.bio}</p>
        </div>
    )
}
export default About