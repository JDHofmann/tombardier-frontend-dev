import React from 'react'

export const LocalDeleteBtn = (props) => {
    return(
        <button
            className={`local-delete-btn ${props.classAddition}`} 
            onClick={props.handleDelete}
        >Delete</button>
    )
}