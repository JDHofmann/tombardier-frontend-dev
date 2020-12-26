import { combineReducers } from "redux"

const defaultState = {
    user: null,
    currentUser: null
    // us
}

const userReducer = (
    state = defaultState.user,
    action
) => {
    switch (action.type){
        case 'LOAD_USER':
            return action.user

        default :
            return state
    }
}

const currentUserReducer = (
    state = defaultState.currentUser,
    action
) => {
    switch (action.type){
        case 'SET_CURRENT_USER':
            return action.currentUser

        case 'REMOVE_CURRENT_USER':
            localStorage.removeItem("token")
            return null
        default :
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    currentUser: currentUserReducer
})

export default rootReducer
