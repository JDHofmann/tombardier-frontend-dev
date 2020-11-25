import React from 'react'

class ProjectImages extends React.Component {
    state = {
        image: null,
        tempImage: `http://localhost:3000/${this.props.image.image}`
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
        // this.setState({
        //     image: null,
        //     tempImage: `http://localhost:3000/${this.props.user.image}`
        // })
    }

    render(){
        const preview = this.state.tempImage ? <div>
        <h3>Here's how your image will look, cool?</h3>
        <img alt="" src={this.state.tempImage}></img>
        </div> : null
        return(
            <div>
                { this.props.editMode ? 
                <>
                <form onSubmit={this.handleImageSubmit}>
                    { preview }
                    <input
                        name="image"
                        type="file"
                        onChange={this.handleFileChange}
                    ></input>
                    <button>Update</button>
                </form>
                
                </>
                :
                 <>
                <img
                    className=""
                    alt="" 
                    src={`http://localhost:3000/${this.props.image.image}`}></img>
                <p>{this.props.image.image_caption}</p>
                </>
                 }
            </div>
        )
    }
}
export default ProjectImages