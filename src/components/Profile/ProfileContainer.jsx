import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateUserStatus, setStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
// import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 1079;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        // console.log(this.props);
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, setStatus }),
    // withAuthRedirect,
    withRouter
)(ProfileContainer);