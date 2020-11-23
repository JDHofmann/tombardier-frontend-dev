export const fetchUser = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/users/8")
        .then(resp => resp.json())
        .then(userData => dispatch({
            type: 'LOAD_USER',
            user: userData
        }))
    }
}

export const startEditMode = () => {
    return {
        type: 'START_EDIT_MODE'
    }
}

export const startViewMode = () => {
    return {
        type: 'START_VIEW_MODE'
    }
}

export const editSiteInfo = (patchObj) => {
    return (dispatch) => {
        console.log(patchObj)
        fetch("http://localhost:3000/users/8", {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(updatedUser => dispatch({
            type: 'UPDATE_USER',
            updatedUser
        }))
    }
}