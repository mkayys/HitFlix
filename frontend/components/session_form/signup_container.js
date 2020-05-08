import { connect } from "react-redux";
import SessionForm from './session_form';

import { signUp, clearErrors } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        type: 'Sign Up',
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signUp(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);