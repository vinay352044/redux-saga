import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';

function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function* workGetUsersFetch() {
    console.log('Fetching users...');
    const users = yield call(usersFetch);
    console.log('Users fetched:', users);
    yield put({ type: GET_USERS_SUCCESS, users });
    console.log('GET_USERS_SUCCESS action dispatched');
}



function* watchGetUsersFetch() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    console.log('watchGetUsersFetch saga started');
}

export default watchGetUsersFetch;
