import React from 'react'
import { Link } from 'react-router-dom'

class ProjectCard extends React.Component {

    renderLinks = () => {
        return this.props.project.links.map(pl =>
            <li>
                <Link to={pl.link_url}>{pl.link_text}</Link>
            </li> 
         )
    }

    render(){
        return(
            <>
            <h2>{this.props.project.title}</h2>
            <h3>{this.props.project.subtitle}</h3>
            <p>{this.props.project.description}</p>
            <ul>
                <h4>Links</h4>
                {this.renderLinks()}</ul>
            </>
        )
    }
}
export default ProjectCard