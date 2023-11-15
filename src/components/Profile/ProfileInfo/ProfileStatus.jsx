import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
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
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div onDoubleClick={this.activateEditMode}>
            <span>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div onBlur={this.deactivateEditMode}>
            <input autoFocus={true} type="text" value={this.props.status} />
          </div>
        }
      </div>
    );
  }
};

export default ProfileStatus;