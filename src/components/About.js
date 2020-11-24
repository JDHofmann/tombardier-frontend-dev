import React from 'react'

class About extends React.Component{

    state = {
        bio: this.props.user.bio,
        image: null,
        tempImage: `http://localhost:3000/${this.props.user.image}`
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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

    handleBioSubmit = (e) => {
        e.preventDefault()
        this.props.editSiteInfo({bio: this.state.bio})
    }

    handleImageSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        if(this.state.image){
          formData.append('user[image]', this.state.image)
        }
        this.props.newUserImage(formData)
    }

    render(){

        const preview = this.state.tempImage ? <div>
        <h3>Here's how your image will look, cool?</h3>
        <img src={this.state.tempImage}></img>
        </div> : null

        return(
            <>
            <h2>About</h2>
            { this.props.editMode ? 
            <>
                <form onSubmit={this.handleImageSubmit}>
                    { preview }
                    <input
                        name="image"
                        type="file"
                        // value={}
                        onChange={this.handleFileChange}
                    ></input>
                    <button>Update</button>
                </form>
            <form onSubmit={this.handleBioSubmit}>
                <textarea
                    
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChangeHandler}
                ></textarea>
                <button>Update</button>
            </form> 
            </>
            : 
            <div>
                <img
                    className="about-pic"
                    alt="" 
                    src={`http://localhost:3000/${this.props.user.image}`}></img>
                <p>{this.props.user.bio}</p>
            </div>
            }
            </>
        )
    }
}
export default About