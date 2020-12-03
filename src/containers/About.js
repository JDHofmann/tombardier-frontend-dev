import React from 'react'
import LocalEditBtn from '../components/LocalEditBtn'
import UserImage from '../components/UserImage'

class About extends React.Component{

    state = {
        bio: this.props.user.bio,
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

    handleBioSubmit = (e) => {
        e.preventDefault()
        this.props.editSiteInfo({bio: this.state.bio})
        this.setState({
            editMode: false
        })
    }

    render(){
        return(
            <div                 className="text-wrapper"
            >
            {/* leave out for mobile */}
            {/* <h2 className="page-title">About</h2> */}
            < UserImage />
            <div className="edit-btn-grid">
            <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
            />
            </div>
            { this.state.editMode ? 
            <>
            <form 
                // className="text-wrapper"
                onSubmit={this.handleBioSubmit}>
                <textarea
                    wrap="on"
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
                <p className="user-bio"
                >{this.props.user.bio}</p>
            </div>
            }
            </div>
        )
    }
}
export default About