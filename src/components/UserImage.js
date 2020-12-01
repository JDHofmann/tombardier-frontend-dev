import React from 'react'
import { LocalEditBtn } from './LocalEditBtn'
import { connect } from 'react-redux';
import { newUserImage } from '../redux/actions'


class UserImage extends React.Component{

    state = {
        image: null,
        tempImage: `http://localhost:3000/${this.props.image}`,
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
        const formData = new FormData();
        // append toke header here
        if(this.state.image){
          formData.append('user[image]', this.state.image)
        }
        this.props.newUserImage(formData)
    }

    render(){
        const preview = this.state.tempImage ? 
        <div>
        <img
             alt="" 
             src={this.state.tempImage}
             className="user-image "
             ></img>
        <p className="image-prev-statement">How does that look?</p>
        </div> : null

        return(
            <div className="user-image-container">
            <LocalEditBtn 
                classAddition="over-img"
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            { this.state.editMode ? 
            <form 
                onSubmit={this.handleImageSubmit}
                >
                { preview }
                <input
                    className="image-upload-input margX-5"
                    name="image"
                    type="file"
                    onChange={this.handleFileChange}
                ></input>
                <button className="update margX-5">Update</button>
            </form>
            : 
            <img
                    className="user-image"
                    alt="" 
                    src={`http://localhost:3000/${this.props.image}`}></img>
            }
            </div>
        )
    }
}

const msp = state => {
    return {
        image: state.user.image
    }
}

const mdp = dispatch => {
    return {
        newUserImage: (obj) => dispatch(newUserImage(obj))
    }
}

export default connect(msp, mdp)(UserImage) 