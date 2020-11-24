export const fetchUser = () => {
    // console.log("fetching user")
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
        fetch("http://localhost:3000/users/8", {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const editLinkInfo = (patchObj) => {
    return (dispatch) => {
        console.log(patchObj)
        fetch(`http://localhost:3000/user_links/${patchObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const createUserLink = (newObj, userId) => {
    return (dispatch) => {
        console.log(newObj, userId)
        fetch(`http://localhost:3000/user_links`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify({...newObj, user_id: userId})
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const newUserImage = (imageformData) => {
    return (dispatch) => {
        let options = {
            method: "PATCH",
            body: imageformData
        }
        fetch("http://localhost:3000/users/8", options)
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}