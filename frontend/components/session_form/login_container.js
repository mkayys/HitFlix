import { connect } from "react-redux";
import SessionForm from './session_form';

import { signIn } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        type: 'Sign In'
    }
};

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signIn(user))
    }
};

export default connect(mSTP, mDTP)(SessionForm);