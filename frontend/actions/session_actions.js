import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
export const logoutCurrentUser = () => ({
    
})

export const signIn = (user) => dispatch => (
    SessionApiUtil.signin(user)
        .then(
            user => dispatch()
        )
)

