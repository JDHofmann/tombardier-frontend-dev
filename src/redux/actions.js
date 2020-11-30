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
        .then(data => dispatch(fetchUser()))
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

export const deleteUserLink = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_links/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
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
        .then(useless => dispatch(fetchUser()))
    }
}

export const createProject = (newProjObj) => {
    console.log(newProjObj)
    return (dispatch) => {
        fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(newProjObj)
        })
        .then(resp => resp.json())
        .then(console.log)
    }
}

export const updateProject = (patchObj) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/projects/${patchObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const deleteProject = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/projects/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const newProjectImage = (newImage, projectImageId) => {
    console.log(projectImageId)
    return (dispatch) => {
        let options = {
            method: "PATCH",
            body: newImage
        }
        fetch(`http://localhost:3000/project_images/${projectImageId}`, options)
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const brandnewProjectImage = (newImage) => {
    return (dispatch) => {
        let options = {
            method: "POST",
            body: newImage
        }
        fetch(`http://localhost:3000/project_images`, options)
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const deleteProjectImage = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/project_images/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const createProjectLink = (newObj, projectId) => {
    return (dispatch) => {
        console.log(newObj, projectId)
        fetch(`http://localhost:3000/project_links`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify({...newObj, project_id: projectId})
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const editProjectLink = (patchObj) => {
    return (dispatch) => {
        console.log(patchObj)
        fetch(`http://localhost:3000/project_links/${patchObj.id}`, {
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

export const deleteProjectLink = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/project_links/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}