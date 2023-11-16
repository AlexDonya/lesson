import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
    this.props.setStatus(e.currentTarget.value);
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateUserStatus(this.state.status);
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.state.status || '------'}
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              type="text"
              value={this.state.status} />
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;