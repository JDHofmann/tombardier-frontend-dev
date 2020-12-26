import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/ProjectLinkCard.css'

const ProjectLinkCard = (props) => {
    return(
        <NavLink 
            to={`/projects/${props.project.project_id}`}
        >
            <div className="pj-link-card">
                <h3 className="pl-title">{props.project.title}</h3>
                <h4 className="pl-subtitle">{props.project.subtitle}</h4>
                {props.project.images.length > 0 ?
                <img 
                    className="pl-preview"
                    alt=""
                    src={`http://localhost:3000/${props.project.images[0].image}`}></img>
                : null
                }
            </div>
        </NavLink>
    )
}
export default ProjectLinkCard