import React from'react'
import LocalDeleteBtn from '../components/LocalDeleteBtn'


const ProjectImageForm = props => {

    const changeHandle = (e) => {
        props.handleFileChange(e)
    }

    return(
        <form 
            className="content-sub-div"
            onSubmit={props.handleImageSubmit}
        >
            { props.preview }
            <input
                className="image-upload-input"
                name="image"
                type="file"
                onChange={changeHandle}
            ></input>
            <button 
                className="update star grid-1-2"
            >Update</button>
            <LocalDeleteBtn 
                    handleDelete={props.handleDelete}
            />
            <button
                className="update grid-3-4"
                onClick={props.hideNewImageForm}
            >X</button>
        </form>
    )
}
export default ProjectImageForm