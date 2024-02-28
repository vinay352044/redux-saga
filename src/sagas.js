import {call,put,takeEvery} from 'redux-saga/effects'
import { GET_USERS_FETCH,GET_USERS_SUCCESS } from './actions'

function usersFetch (){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

function* workGetUsersFetch(){
    const users = yield call(usersFetch)  //waits for this api call to be finished before going to the next yield
    yield put({type:GET_USERS_SUCCESS,users}) // put effect dispatches an action to the redux store. In this case after the api has yielded the users response the put effect will dispatch the action to the reducer
    
}
function* mySaga(){
    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch) // for every occurence of this action , saga will run in response. In this case it would trigger workGetUsersFetch() saga for each GET_USERS_FETCH action
}
export default mySaga