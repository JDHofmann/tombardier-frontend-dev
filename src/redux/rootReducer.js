import { combineReducers } from "redux"

const defaultState = {
    user: null
}

const userReducer = (
    state = defaultState.user,
    action
) => {
    switch (action.type){
        case 'LOAD_USER':
            // console.log(action.user)
            return action.user

        default :
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer
