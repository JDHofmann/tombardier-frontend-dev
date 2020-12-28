import React from 'react'
import { Route, Switch} from 'react-router-dom'
import ProjectLinkCard from '../components/ProjectLinkCard'
import ProjectCard from '../components/ProjectCard'
import Home from '../components/Home';


export default class ProjectsIndex extends React.Component{

    renderProjectLinks = () => {
        return this.props.projects.map( p => 
            <div key={p.project_id} className="pl-link">
                <ProjectLinkCard
                    key={p.project_id}
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
        // this.props.history.push(`${this.props.projects[this.props.projects.length -1].project_id}`)
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
                                <>
                                {this.props.renderTitle()}
                            <ProjectCard 
                                history={this.props.history}
                                project={project}
                                key={project.project_id}
                            />
                            </>
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
                        <h3 className="section-header">Projects</h3>
                        <div className="">
                            {this.renderProjectLinks()}
                        {this.props.currentUser ?
                        <button 
                            onClick={this.addNewProject}
                            className="update new-pj"
                        >Add New Project</button>
                        : null }
                        </div>
                        </>
                    }
                />
            </Switch>
        )
    }
}