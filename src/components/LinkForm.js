import React from 'react'
import LocalDeleteBtn from './LocalDeleteBtn'
import LocalEditBtn from './LocalEditBtn'


const LinkForm = (props) => {
    return(
        <form 
            className="content-sub-div"
            onSubmit={props.handleSubmit}>
            <label 
                htmlFor="link_url"
                className="grid-1-4 content-row-label"
            >Link URL</label>
            <input
                type="url"
                title="Please provide a valid url address"
                id="link_url"
                name="link_url"
                value={props.link_url}
                onChange={props.handleChange}
                className="grid-1-4 content-row"
                placeholder="https://github.com/"
            />
            <label 
                htmlFor="link_text"
                className="grid-1-4 content-row-label"    
            >Link Text</label>
            <input
                id="link_text"
                name="link_text"
                value={props.link_text}
                onChange={props.handleChange}
                className="grid-1-4 content-row"
                placeholder="link text"
            />
            {props.new ? 
            <>
            <button 
            className="update grid-1-3"
            type="submit">Submit</button> 
            <button 
                className="update grid-3-4"
                onClick={props.hideNewLinkForm}
            >X</button>
            </>
            :
            <>
                <button 
                className="update star grid-1-2"
                type="submit">Update</button>
                <LocalDeleteBtn 
                    handleDelete={props.handleDelete}
                />
                <LocalEditBtn 
                    editMode={props.editMode}
                    toggleEditMode={props.toggleEditMode}
                />
            </>
            }
        </form>
    )
}
export default LinkForm