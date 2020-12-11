import React from 'react'
import { connect } from 'react-redux'
import { updateProject, createProjectLink, newProjectImage, brandnewProjectImage, deleteProject, deleteProjectImage } from '../redux/actions'
import NewProjectImage from './NewProjectImage'
import ProjectImages from './ProjectImages'
import LocalEditBtn from '../components/LocalEditBtn'
// import LocalDeleteBtn from '../components/LocalDeleteBtn'
import Link from './Link'
import NewLink from './NewLink'
import '../css/ProjectCard.css'



class ProjectCard extends React.Component {

    state = {
        title: this.props.project.title,
        subtitle: this.props.project.subtitle,
        description: this.props.project.description,
        id: this.props.project.project_id,
        editMode: false,
        showNewLink: false,
        showNewImage: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    showNewLinkForm = () => {
        this.setState({ showNewLink: true })
    }

    hideNewLinkForm = () => {
        this.setState({ showNewLink: false })
    }

    showNewImageForm = () => {
        this.setState({ showNewImage: true })
    }

    hideNewImageForm = () => {
        this.setState({ showNewImage: false })
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
        delete patchObj.showNewLink
        delete patchObj.showNewImage   
        this.props.updateProject(patchObj)
        this.setState({
            editMode: false
        })
    }

    handleDelete = () => {
        this.props.deleteProject(this.state.id)
        this.props.history.push('/')
    }

    renderLinks = () => {
        return this.props.project.links.map(pl =>
            <li
                className="content-row"
                key={pl.id}
            >
                <Link 
                key={pl.id}
                link={pl}
                project
                />
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
            deleteProjectImage={this.props.deleteProjectImage}
        /> )
    }

    render(){
        return(
            <div>
            { this.state.editMode ? 
            <>
            <form 
                onSubmit={this.handleSubmit} 
                className="content-sub-div"
            >
                <input
                    className="pj-title grid-1-4"
                    name="title"
                    value={this.state.title}
                    placeholder="Your project title"
                    onChange={this.handleChange}
                />
                <input
                    className="pj-subtitle grid-1-4"
                    name="subtitle"
                    value={this.state.subtitle}
                    placeholder="project sub-title"
                    onChange={this.handleChange}
                />
                <textarea
                    className="pj-descript grid-1-4"
                    name="description"
                    value={this.state.description}
                    placeholder="tell us about your project"
                    onChange={this.handleChange}
                />
                <button 
                    type="Submit" 
                    className="update star grid-1-3"
                >Update</button>
                <LocalEditBtn 
                    editMode={this.state.editMode}
                    toggleEditMode={this.toggleEditMode}
                />
            </form>
            </>
            :
            <>
            <div className="content-sub-div">
                <h2 className="pj-title grid-1-4">{this.props.project.title}</h2>
                <h3 className="pj-subtitle grid-1-4">{this.props.project.subtitle}</h3>
                <p className="pj-descript grid-1-4">{this.props.project.description}</p>
                <LocalEditBtn 
                    editMode={this.state.editMode}
                    toggleEditMode={this.toggleEditMode}
                />
            </div>

            <ul>
                <h4 className="section-header">Links</h4>
                {this.renderLinks()}
            </ul>

            {this.props.currentUser ?
                 this.state.showNewLink ? 
                <NewLink 
                    projectId={this.props.project.project_id}
                    createProjectLink={this.props.createProjectLink}
                    project
                    hideNewLinkForm={this.hideNewLinkForm}
                />
                :
                <button
                    className="update grid-1-3 mg-btn-5"
                    onClick={this.showNewLinkForm}
                >Add New Link</button>
            : null }
            </>
            }
            <h4 className="section-header ">Project Images</h4>
            { this.renderProjectImages() }

            { this.state.showNewImage ?
            <NewProjectImage 
                brandnewProjectImage={this.props.brandnewProjectImage}
                projectId={this.props.project.project_id}
                hideNewImageForm={this.hideNewImageForm}
            />
            :
            this.props.currentUser ?
            <button
                className="update"
                onClick={this.showNewImageForm}
            >Add New Image</button>
            : null
             }
            { this.props.currentUser ?
                <button
                    onClick={this.handleDelete}
                    className="delete-project update grid-1-4"
                >Delete Project</button>
                : null
            } 
            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        updateProject: (updateObj) => dispatch(updateProject(updateObj)),
        newProjectImage: (newImage, projectImageId) => dispatch(newProjectImage(newImage, projectImageId)),
        brandnewProjectImage:(newImage) => dispatch(brandnewProjectImage(newImage)),
        deleteProject: (id) => dispatch(deleteProject(id)),
        createProjectLink: (newLink, projectId) => dispatch(createProjectLink(newLink, projectId)),
        deleteProjectImage:(id) => dispatch(deleteProjectImage(id))
    }
}

const msp = state => {
    return {
        editMode: state.editMode,
        currentUser: state.currentUser
    }
}

export default connect(msp, mdp)(ProjectCard) 