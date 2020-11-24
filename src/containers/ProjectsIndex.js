import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProjectLinkCard from '../components/ProjectLinkCard'
import ProjectCard from '../components/ProjectCard'

export default class ProjectsIndex extends React.Component{

    renderProjectLinks = () => {
        return this.props.projects.map( p => 
        <ProjectLinkCard 
            key={p.title}
            project={p}
        /> )
    }
    
    addNewProject = () => {
        let newProjObj = {
            title: "New Project",
            subtitle: "subtitle",
            description: "Add your project's description here",
            user_id: this.props.userId
        }
        this.props.createProject(newProjObj)
    }

    render(){
        const styling = {
            backgroundColor: "#fffff0",
        }
        return(
            <Switch>
                <Route 
                    path="/projects/:id"
                    render={ (routerProps) => 
                        { let id = parseInt(routerProps.match.params.id)  
                        let project;
                        project = this.props.projects.find( proj => proj.project_id === id)
                        return ( 
                        <ProjectCard 
                            project={project}
                            key={project.project_id}
                        />
                        )
                    }
                    }
                />
                <Route 
                    path="/"
                    render={() =>
                        <> 
                        <div style={styling}>
                            {this.renderProjectLinks()}
                        </div>
                        <button onClick={this.addNewProject}>Add a new Project</button>
                        </>
                    }
                />
            </Switch>
        )
    }
}