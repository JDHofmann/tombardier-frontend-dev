import React from'react'

const ProjectImageForm = props => {

    const changeHandle = (e) => {
        props.handleFileChange(e)
    }

    return(
        <form onSubmit={props.handleImageSubmit}>
            { props.preview }
            <input
                className="image-upload-input"
                name="image"
                type="file"
                onChange={changeHandle}
            ></input>
            <button 
                className="update"
            >Update</button>
        </form>
    )
}
export default ProjectImageForm