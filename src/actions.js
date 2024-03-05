export const GET_USERS_FETCH='GET_USERS_FETCH'
export const GET_USERS_SUCCESS='GET_USERS_SUCCESS'
export const REMOVE_USERS = 'REMOVE_USERS'
export const UPDATE_USERS = 'UPDATE_USERS'
export const getUsersFetch = () => ({
    type:GET_USERS_FETCH
})
export const removeUsers = (users) => ({
    type:REMOVE_USERS,
    users:users
})
export const updateUsers = (users) => ({
    type:UPDATE_USERS,
    users:users
})

