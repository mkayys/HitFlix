
import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
// one user has 4 profiles
// temporary usersReducer?

const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;