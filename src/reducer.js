import { GET_USERS_SUCCESS, REMOVE_USERS,UPDATE_USERS } from "./actions"
const myFirstReducer = (state={users:[]},action) => {
    
switch(action.type){
    case GET_USERS_SUCCESS:
        return {...state,users:action.users}
    case REMOVE_USERS:
        return {...state,users:action.users}
    case UPDATE_USERS:
        console.log(action.users)
        return {...state,users:action.users}
    default: return state
}
}
export default myFirstReducer