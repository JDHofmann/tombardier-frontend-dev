import React from 'react'
import { Link } from 'react-router-dom'
import LocalEditBtn from '../components/LocalEditBtn'
import LocalDeleteBtn from '../components/LocalDeleteBtn'
import LinkForm from './LinkForm'


class ProjectLink extends React.Component {

    state = {
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
        // this.props.updateProject(patchObj)
    }

    handleDelete = () => {
        // this.props.deleteProject(this.state.id)
    }

    render(){
        return(
            <li key={this.props.link.link_url}>
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />
                { this.state.editMode ? 
                <LinkForm />
                :
                <Link  to={this.props.link.link_url}>{this.props.link.link_text}</Link>
                 }
            </li>
        )
    }
}
export default ProjectLink