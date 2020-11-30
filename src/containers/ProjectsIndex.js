import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProjectLinkCard from '../components/ProjectLinkCard'
import ProjectCard from '../components/ProjectCard'
import Home from '../components/Home';


export default class ProjectsIndex extends React.Component{

    renderProjectLinks = () => {
        return this.props.projects.map( p => 
            <div className="pl-link">
                <ProjectLinkCard
                    key={p.title}
                    project={p}
                /> 
            </div>)
    }
    
    addNewProject = () => {
        let newProjObj = {
            title: "New Project",
            subtitle: "subtitle",
            description: "Add your project's description here",
            user_id: this.props.user.id
        }
        this.props.createProject(newProjObj)
    }

    render(){
        return(
            <Switch>
                <Route 
                    path="/projects/:id"
                    render={ (routerProps) => 
                        { let id = parseInt(routerProps.match.params.id)  
                        let project;
                        project = this.props.projects.find( proj => proj.project_id === id)
                        if(project){
                            return ( 
                            <ProjectCard 
                                project={project}
                                key={project.project_id}
                            />
                            )
                        } 
                    }
                    }
                />
                <Route 
                    path="/"
                    render={() =>
                        <>
                        <Home 
                            user={this.props.user}
                            editSiteInfo={this.props.editSiteInfo}
                        />
                        <div className="text-wrapper">
                            {this.renderProjectLinks()}
                        <button 
                            onClick={this.addNewProject}
                            className="update"
                        >Add New Project</button>
                        </div>
                        </>
                    }
                />
            </Switch>
        )
    }
}