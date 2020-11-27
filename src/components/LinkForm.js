import React from 'react'

const LinkForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
                <label for="link_url">Link URL</label>
                <input
                    id="link_url"
                    name="link_url"
                    value={props.link_url}
                    onChange={props.handleChange}
                    className="ct-input"
                    placeholder="link url"
                />
                <label for="link_text">Link Text</label>
                <input
                    id="link_text"
                    name="link_text"
                    value={props.link_text}
                    onChange={props.handleChange}
                    className="ct-input"
                    placeholder="link text"
                />
                <button 
                    className="update"
                    type="submit">
                        {props.new ? "Submit" : "Update"}
                        </button>
                </form>
    )
}
export default LinkForm