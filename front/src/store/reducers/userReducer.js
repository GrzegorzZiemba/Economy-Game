import { LOGIN_TO_ACCOUNT , LOGOUT, CREATE_ACCOUNT, ERROR_LOGIN_ACCOUNT} from '../types'

const initialState = {
    user : "",
    loading: true,
}


export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_TO_ACCOUNT:
            return {...state, user: action.payload, loading: false}
        case LOGOUT:
            return {...state, loading: false, user: ""}
        case ERROR_LOGIN_ACCOUNT:
            return {...state, user: action.payload, loading:false}

        default:
            return state
    }
}