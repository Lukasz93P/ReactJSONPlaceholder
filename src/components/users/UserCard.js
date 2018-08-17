import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import ConfirmationModal from '../shared/ConfirmationModal';

class UserCard extends Component {
  constructor () {
    super ();
    this.state = {
      open: false,
    };
  }

  rejectConfirmation = () => {
    this.setState ({open: false});
  };

  openConfirmationModal = () => {
    this.setState ({open: true});
  };

  deleteConfirmed = () => {
    const {deleteUser, user} = this.props;
    deleteUser (user.id);
  };

  render () {
    const {email, phone, address, id, name, company} = this.props.user;
    const {open} = this.state;
    const {rejectConfirmation, openConfirmationModal, deleteConfirmed} = this;

    return (
      <div className="card text-center col-md-3 p-3 m-3">
        <div className="card-header">
          {name}
        </div>
        <div className="card-body">
          <h5 className="card-title">{email}</h5>
          <p className="card-text">{phone}</p>
          <p className="card-text">{address.city}</p>
          <div className="row">
            <Link to={`/users/edit/${id}`} className="btn btn-primary col-md-6 my-2">
              Edit
            </Link>
            <button
              onClick={openConfirmationModal}
              className="btn btn-danger col-md-6 my-2"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="card-footer text-muted">
          {company.name}
        </div>
        <ConfirmationModal
          open={open}
          close={rejectConfirmation}
          onConfirm={deleteConfirmed}
          message={`Delete user ${name}`}
        />
      </div>
    );
  }
}

export default UserCard;
