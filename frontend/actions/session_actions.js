import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signUp = (user) => dispatch => (
    SessionApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
);

export const signIn = (user) => dispatch => (
    SessionApiUtil.signin(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
);

export const signOut = () => dispatch => (
    SessionApiUtil.signout()
        .then(
            user => dispatch(logoutCurrentUser()),
            err => dispatch(receiveErrors(err.responseJSON))
        )
);
