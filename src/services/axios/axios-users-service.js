import axios from 'axios';

class AxiosUsersService {
  usersService = {};

  constructor () {
    this.initUsersService ();
  }

  initUsersService = () => {
    this.usersService = axios.create ({
      baseURL: 'http://jsonplaceholder.typicode.com/users',
      timeout: 15000,
    });

    return this.usersService;
  };

  getUsersService () {
    return this.usersService || this.initUsersService ();
  }

  fetchUsers () {
    return new Promise ((resolve, reject) => {
      this.usersService
        .get (``)
        .then (
          response => resolve (response.data),
          error => reject (error.message)
        );
    });
  }

  deleteUser (id) {
    return new Promise ((resolve, reject) => {
      this.usersService
        .delete (`/${id}`)
        .then (
          response => resolve (response.data),
          error => reject (error.message)
        );
    });
  }

  createUser (data) {
    return new Promise ((resolve, reject) => {
      this.usersService
        .post ('', data)
        .then (
          response => resolve (response.data),
          error => reject (error.message)
        );
    });
  }

  fetchUser (id) {
    return new Promise ((resolve, reject) => {
      this.usersService
        .get (`/${id}`)
        .then (
          response => resolve (response.data),
          error => reject (error.message)
        );
    });
  }

  updateUser (id, data) {
    return new Promise ((resolve, reject) => {
      this.usersService
        .put (`/${id}`, data)
        .then (
          response => resolve (response.data),
          error => reject (error.message)
        );
    });
  }
}

export default new AxiosUsersService ();
