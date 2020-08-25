import { connect } from "react-redux";
import LoginForm from './login';

import { signIn, clearErrors } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        // type: 'Sign In',
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signIn(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mSTP, mDTP)(LoginForm);