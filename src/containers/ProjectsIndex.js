import React from 'react'
import ProjectLinkCard from '../components/ProjectLinkCard'

export default class ProjectsIndex extends React.Component{

    renderProjectLinks = () => {
        return this.props.projects.map( p => 
        <ProjectLinkCard 
            project={p}
        /> )
    }
    
    render(){
        const styling = {
            backgroundColor: "#fffff0",
            // display: "flex"
        }
        return(
            <div style={styling}>
                {this.renderProjectLinks()}
            </div>
        )
    }
}