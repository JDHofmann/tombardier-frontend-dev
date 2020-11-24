import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProject, newProjectImage } from '../redux/actions'
import ProjectImages from './ProjectImages'


class ProjectCard extends React.Component {

    state = {
        title: this.props.project.title,
        subtitle: this.props.project.subtitle,
        description: this.props.project.description,
        id: this.props.project.project_id
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateProject(this.state)
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
        /> )
    }

    render(){
        return(<>
            { this.props.editMode ? 
            <form onSubmit={this.handleSubmit} >
                <input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    name="subtitle"
                    value={this.state.subtitle}
                    onChange={this.handleChange}
                />
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <button type="Submit" >Update</button>
            </form>
            :
            <>
            <h2>{this.props.project.title}</h2>
            <h3>{this.props.project.subtitle}</h3>
            <p>{this.props.project.description}</p>
            <ul>
                <h4>Links</h4>
                {this.renderLinks()}</ul>
            </>
            }
            { this.renderProjectImages() }
            </>
        )
    }
}

const mdp = dispatch => {
    return {
        updateProject: (updateObj) => dispatch(updateProject(updateObj)),
        newProjectImage: (newImage) => dispatch(newProjectImage(newImage))
    }
}

const msp = state => {
    return {
        editMode: state.editMode
    }
}

export default connect(msp, mdp)(ProjectCard) 