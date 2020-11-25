import React from 'react'
import { LocalEditBtn } from './LocalEditBtn'

class About extends React.Component{

    state = {
        bio: this.props.user.bio,
        image: null,
        tempImage: `http://localhost:3000/${this.props.user.image}`,
        editMode: false
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode
        }) )
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
        <img
             alt="" 
             src={this.state.tempImage}
             className="user-image"
             ></img>
        {/* <h3>look good?</h3> */}
        </div> : null

        return(
            <>
            {/* leave out for mobile */}
            {/* <h2 className="page-title">About</h2> */}
            <LocalEditBtn 
                classAddition="over-img"
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            { this.state.editMode ? 
            <>
            <form 
                // className="user-image"
                onSubmit={this.handleImageSubmit}
            >
                { preview }
                <input
                    className="image-upload-input"
                    name="image"
                    type="file"
                    onChange={this.handleFileChange}
                ></input>
                <button className="update">Update</button>
            </form>
            <form onSubmit={this.handleBioSubmit}>
                <textarea
                    className="user-bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChangeHandler}
                ></textarea>
                <button className="update">Update</button>
            </form> 
            </>
            : 
            <div>
                <img
                    className="user-image"
                    alt="" 
                    src={`http://localhost:3000/${this.props.user.image}`}></img>
                <p 
                    className="user-bio"
                >{this.props.user.bio}</p>
            </div>
            }
            </>
        )
    }
}
export default About