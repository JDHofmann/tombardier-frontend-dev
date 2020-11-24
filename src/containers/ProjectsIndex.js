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
    
    render(){
        const styling = {
            backgroundColor: "#fffff0",
            // display: "flex"
        }
        return(
            <Switch>
                <Route 
                    path="/projects/:id"
                    render={ (routerProps) => 
                        
                        { let id = parseInt(routerProps.match.params.id)  
                        let project;
                        project = this.props.projects.find( proj => proj.project_id === id)
                        console.log(this.props.projects)
                        return (   // console.log(routerProps)
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
                        <div style={styling}>
                            {this.renderProjectLinks()}
                        </div>
                    }
                />
            </Switch>
        )
    }
}