import React from 'react'

export const LocalEditBtn = (props) => {
    return(
        <button
            className={`local-edit-btn ${props.classAddition}`} 
            onClick={props.toggleEditMode}
        >{ props.editMode ? "view" : "edit" }</button>
    )
}