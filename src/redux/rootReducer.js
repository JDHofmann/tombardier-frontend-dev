import { combineReducers } from "redux"

const defaultState = {
    user: null,
    // editMode: false,
    // us
}

const userReducer = (
    state = defaultState.user,
    action
) => {
    switch (action.type){
        case 'LOAD_USER':
            return action.user

        // case 'UPDATE_USER':
        //     return action.updatedUser

        default :
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    // editMode: editModeReducer
})

export default rootReducer
