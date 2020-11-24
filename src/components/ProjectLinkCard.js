import React from 'react'
import { NavLink } from 'react-router-dom'


const ProjectLinkCard = (props) => {
    return(
        <NavLink 
            to={`/projects/${props.project.project_id}`}
        >
            <div>
                <h3>{props.project.title}</h3>
                <h4>{props.project.subtitle}</h4>
                <img 
                    className="pl-preview"
                    alt=""
                    src={`http://localhost:3000/${props.project.image}`}></img>
            </div>
        </NavLink>
    )
}
export default ProjectLinkCard