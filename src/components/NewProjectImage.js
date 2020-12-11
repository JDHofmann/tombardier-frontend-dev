import React from 'react'
import ProjectImageForm from './ProjectImageForm';
// import ProjectImages from './ProjectImages';

class NewProjectImage extends React.Component {
    state = {
        image: null,
        tempImage: null
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
        let projectId = this.props.projectId
        const formData = new FormData();
        if(this.state.image){
          formData.append('project_image[image]', this.state.image)
        }
        formData.append('project_image[project_id]', projectId)
        this.props.brandnewProjectImage(formData)
        this.props.hideNewImageForm()
    }

    renderPreview = () => {
        return this.state.tempImage ? 
        <div className="content-sub-div">
        <img 
            className="pj-image grid-1-4"
            alt="" 
            src={this.state.tempImage}>
            </img>
            <p className="image-prev-statement grid-1-4">How does that look?</p>
        </div> : null
    }

    render(){
        return(
            <div>
                <h4>Add a New Image</h4>
                {this.renderPreview()}
                <ProjectImageForm 
                    preview={this.preview}
                    handleFileChange={this.handleFileChange}
                    handleImageSubmit={this.handleImageSubmit}
                    hideNewImageForm={this.props.hideNewImageForm}
                />
            </div>
        )
    }
}
export default NewProjectImage