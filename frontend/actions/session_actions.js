import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signUp = (user) => dispatch => (
    SessionApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => console.log(err)
        )
);

export const signIn = (user) => dispatch => (
    SessionApiUtil.signin(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => console.log(err)
        )
);

export const signOut = () => dispatch => (
    SessionApiUtil.signout()
        .then(
            user => dispatch(logoutCurrentUser()),
            err => console.log(err)
        )
);
