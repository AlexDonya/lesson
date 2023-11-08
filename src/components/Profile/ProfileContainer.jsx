import React from 'react';
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { API } from '../api/api';

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
            userId = 2;
        }

        API.getUserProfile(userId)
            .then((data) => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);