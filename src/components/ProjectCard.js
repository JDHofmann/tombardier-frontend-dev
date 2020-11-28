import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProject, newProjectImage, brandnewProjectImage, deleteProject } from '../redux/actions'
import NewProjectImage from './NewProjectImage'
import ProjectImages from './ProjectImages'
import { LocalEditBtn } from '../components/LocalEditBtn'
import { LocalDeleteBtn } from '../components/LocalDeleteBtn'



class ProjectCard extends React.Component {

    state = {
        title: this.props.project.title,
        subtitle: this.props.project.subtitle,
        description: this.props.project.description,
        id: this.props.project.project_id,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let patchObj = {...this.state}    
        delete patchObj.editMode   
        this.props.updateProject(patchObj)
    }

    handleDelete = (routerProps) => {
        this.props.deleteProject(this.state.id)

        // console.log(this.props.history)
        // const history = useHistory
        // this.props.history.push(`/projects`)
    }

    renderDelete = () => {
        return (
            <button>Delete Project</button>
        )
    }

    renderLinks = () => {
        return this.props.project.links.map(pl =>
            <li key={pl.link_url}>
                <Link  to={pl.link_url}>{pl.link_text}</Link>
            </li> 
         )
    }

    renderProjectImages = () => {
        return this.props.project.images.map(img => <ProjectImages
            key={img.id} 
            image={img}
            editMode={this.props.editMode}
            newProjectImage={this.props.newProjectImage}
            projectId={this.props.project.project_id}
        /> )
    }

    render(){
        return(
            <div className="text-wrapper">
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />

            { this.state.editMode ? 
            <>
            <form onSubmit={this.handleSubmit} >
                <input
                    className="pj-title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    className="pj-subtitle"
                    name="subtitle"
                    value={this.state.subtitle}
                    onChange={this.handleChange}
                />
                <textarea
                    className="pj-descript"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <button 
                    type="Submit" 
                    className="update"
                    >Update</button>
            </form>
            </>
            :
            <div>
            <h2 className="pj-title">{this.props.project.title}</h2>
            <h3 className="pj-subtitle">{this.props.project.subtitle}</h3>
            <p className="pj-descript">{this.props.project.description}</p>
            <ul>
                <h4>Links</h4>
                {this.renderLinks()}</ul>
            </div>
            }
            { this.renderProjectImages() }
            <NewProjectImage 
                brandnewProjectImage={this.props.brandnewProjectImage}
                projectId={this.props.project.project_id}
            />
            <LocalDeleteBtn 
                handleDelete={this.handleDelete}
                classAddition="delete-project"
                deleteProject
            />
            {/* { this.props.project ? console.log("cool") : <Redirect 
                to="/projects"
            /> } */}
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        updateProject: (updateObj) => dispatch(updateProject(updateObj)),
        newProjectImage: (newImage, projectImageId) => dispatch(newProjectImage(newImage, projectImageId)),
        brandnewProjectImage:(newImage) => dispatch(brandnewProjectImage(newImage)),
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

const msp = state => {
    return {
        editMode: state.editMode
    }
}

export default connect(msp, mdp)(ProjectCard) 