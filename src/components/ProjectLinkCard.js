import React from 'react'

const ProjectLinkCard = (props) => {
    return(
        <div>
            <h3>{props.project.title}</h3>
            <h4>{props.project.subtitle}</h4>
            <img src={`http://localhost:3000/${props.project.image}`}></img>
        </div>
    )
}
export default ProjectLinkCard