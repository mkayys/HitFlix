import { connect } from "react-redux";
import SessionForm from './session_form';

import { signIn, clearErrors } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        type: 'Sign In',
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signIn(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);