import React from 'react'
import LocalEditBtn from '../components/LocalEditBtn'
import ProjectImageForm from './ProjectImageForm';



class ProjectImages extends React.Component {
    state = {
        image: null,
        tempImage: `http://localhost:3000/${this.props.image.image}`,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
    }

    handleFileChange = (e) => {
        const uploadingFile = e.target.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
            image: uploadingFile,
            tempImage: fileReader.result
        })
        }
        if (uploadingFile){
            fileReader.readAsDataURL(uploadingFile)
        } 
    }

    handleImageSubmit = (e) => {
        e.preventDefault()
        let projectImageId = this.props.image.id
        console.log(projectImageId)
        const formData = new FormData();
        if(this.state.image){
          formData.append('project_image[image]', this.state.image)
        }
        this.props.newProjectImage(formData, projectImageId)
        this.setState({
            editMode: false
        })
    }

    handleDelete = () => {
        this.props.deleteProjectImage(this.props.image.id)
    }

    renderPreview = () => {
        return this.state.tempImage ? 
        <div>
        <img 
            className="pj-image"
            alt="" 
            src={this.state.tempImage}>
            </img>
                <p className="image-prev-statement">How does that look?</p>
        </div> : null
    }

    render(){
        return(
            <div className="pj-image-container">
                { this.state.editMode ? 
                <>
                    {this.renderPreview()}
                    <ProjectImageForm 
                    preview={this.preview}
                    handleFileChange={this.handleFileChange}
                    handleImageSubmit={this.handleImageSubmit}
                    handleDelete={this.handleDelete}
                    />
                </>
                :
                 <div className="content-sub-div">
                    <img
                        className="pj-image grid-1-4"
                        alt="" 
                        src={`http://localhost:3000/${this.props.image.image}`}
                    ></img>
                    <LocalEditBtn 
                    editMode={this.state.editMode}
                    toggleEditMode={this.toggleEditMode}
                    />
                </div>
                 }
                {/* <LocalDeleteBtn 
                    handleDelete={this.handleDelete}
                /> */}
            </div>
        )
    }
}
export default ProjectImages