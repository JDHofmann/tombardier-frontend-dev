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