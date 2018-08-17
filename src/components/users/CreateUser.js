import React, {Component} from 'react';
import UserForm from './forms/UserForm';
import * as actions from '../../actions/users-actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class CreateUser extends Component {
  componentDidMount () {
    this.props.dispatch (actions.fetchUserInit ());
  }

  onFormSubmit = async values => {
    const {showToast} = this.props;
    try {
      const user = await this.props.dispatch (actions.createUser (values));
      this.props.history.push ('/users/list');
      showToast (`User ${user.name} successfully created`, true);
    } catch (error) {
      showToast (error, false);
    }
  };

  render () {
    const {onFormSubmit} = this;
    return (
      <div className="row justify-content-center p-5 m-5">
        <h1 className="col-12">Create new user</h1>
        <div className="col-md-6 mt-3">
          <UserForm onFormSubmit={onFormSubmit} />
        </div>
      </div>
    );
  }
}

export default connect () (withRouter (CreateUser));
