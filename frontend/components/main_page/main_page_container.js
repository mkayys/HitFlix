import { connect } from "react-redux";
import MainPage from './main_page';

import { signOut } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        videos: []
    }
};

const mDTP = (dispatch) => {
    return {

    }
};

export default connect(mSTP, mDTP)(MainPage);