import { connect } from "react-redux";
import SignupForm from './signup';

import { signUp, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        // type: 'Sign Up',
        // email: ownProps.email,
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signUp(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mSTP, mDTP)(SignupForm);