import { connect } from "react-redux";
import NavBar from './navbar';

import { signOut } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser
    }
};

const mDTP = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(mSTP, mDTP)(NavBar);