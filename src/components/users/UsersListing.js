import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/users-actions';
import UserCard from './UserCard';
import Error from '../shared/Errors';

class UsersListing extends Component {
  componentDidMount = () => {
    this.props.dispatch (actions.fetchUsers ());
  };

  deleteUser = async id => {
    const {showToast} = this.props;
    try {
      await this.props.dispatch (actions.deleteUser (id));
      showToast ('User successfully deleted', true);
    } catch (error) {
      showToast (error, false);
    }
  };

  render () {
    const {users, errors} = this.props;
    const {deleteUser} = this;

    if (users && users.length > 0)
      return (
        <div className="row justify-content-center p-5">
          {users.map ((user, index) => (
            <UserCard user={user} deleteUser={deleteUser} key={index} />
          ))}
        </div>
      );

    if (errors && errors.length > 0)
      return (
        <div>
          <Error error={errors} />
        </div>
      );

    if (users === null)
      return (
        <div className="row justify-content-center p-5 m-5 align-items-center">
          <h1>No users found</h1>

        </div>
      );

    return (
      <div className="container loader-container6">
        <div className="loader" />
      </div>
    );
  }
}

function mapStateToProps (state) {
  const {data, errors} = state.users;
  return {
    users: data,
    errors,
  };
}

export default connect (mapStateToProps) (UsersListing);
