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
            <>
            {/* leave out for mobile */}
            {/* <h2 className="page-title">About</h2> */}
            < UserImage />
            { this.state.editMode ? 
            <form 
                className="content-sub-div"
                onSubmit={this.handleBioSubmit}>
                <textarea
                    wrap="on"
                    className="user-bio grid-1-4"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChangeHandler}
                ></textarea>
                <button className="update grid-1-3">Update</button>
                <LocalEditBtn 
                editMode={this.state.editMode}
                toggleEditMode={this.toggleEditMode}
                />
            </form> 
            : 
            <div className="content-sub-div">
                <p className="user-bio grid-1-4"
                >{this.props.user.bio}</p>
                <LocalEditBtn 
                    editMode={this.state.editMode}
                    toggleEditMode={this.toggleEditMode}
                />
            </div>
            }
            </>
        )
    }
}
export default About