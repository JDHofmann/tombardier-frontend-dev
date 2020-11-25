import React from 'react'

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
    }

    render(){
        const preview = this.state.tempImage ? <div>
        <h3>Here's how your image will look, cool?</h3>
        <img alt="" src={this.state.tempImage}></img>
        </div> : null
        return(
            <div>
                <h4>Add a New Image</h4>
                <form onSubmit={this.handleImageSubmit}>
                    { preview }
                    <input
                        name="image"
                        type="file"
                        onChange={this.handleFileChange}
                    ></input>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default NewProjectImage