import React from 'react'
import LocalEditBtn from './LocalEditBtn'
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
        if(this.state.image){
          formData.append('user[image]', this.state.image)
        }
        this.props.newUserImage(formData)
        this.setState({
            editMode: false
        })
    }

    render(){
        const preview = this.state.tempImage ? 
        <>
        <img
             alt="" 
             src={this.state.tempImage}
             className="user-image grid-1-4"
             ></img>
        <p className="image-prev-statement grid-1-4">How does that look?</p>
        </> : null

        return(
            <div className="image-container">
            { this.state.editMode ? 
            <form 
                className="content-sub-div"
                onSubmit={this.handleImageSubmit}
                >
                { preview }
                <input
                    className="image-upload-input grid-1-4"
                    name="image"
                    type="file"
                    onChange={this.handleFileChange}
                ></input>
                <button className="update grid-1-3">Update</button>
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />
            </form>
            : 
            <div 
                className="content-sub-div"
            >
            <img
                className="user-image grid-1-4"
                alt="" 
                src={`http://localhost:3000/${this.props.image}`}></img>
            <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            </div>
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