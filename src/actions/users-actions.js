import {
  FETCH_USERS_INIT,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from './types';
import AxiosUsersService from '../services/axios/axios-users-service';

export const fetchUsers = () => {
  return async dispatch => {
    dispatch (fetchUsersInit ());

    try {
      const users = await AxiosUsersService.fetchUsers ();
      dispatch (fetchUsersSuccess (users));
    } catch (error) {
      dispatch (fetchUsersFailed (error));
    }
  };
};

export const fetchUsersInit = () => {
  return {
    type: FETCH_USERS_INIT,
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailed = errors => {
  return {
    type: FETCH_USERS_FAILED,
    payload: errors,
  };
};

export const deleteUser = id => {
  return async dispatch => {
    try {
      const response = await AxiosUsersService.deleteUser (id);
      return dispatch (fetchUsers ());
    } catch (error) {
      return Promise.reject (error);
    }
  };
};

export const createUser = data => {
  return async () => {
    try {
      const response = await AxiosUsersService.createUser (data);
      return response;
    } catch (error) {
      return Promise.reject (error);
    }
  };
};

export const fetchUser = id => {
  return async dispatch => {
    dispatch (fetchUserInit ());
    try {
      const user = await AxiosUsersService.fetchUser (id);
      dispatch (fetchUserSuccess (user));
    } catch (error) {
      dispatch (fetchUserFailed (error));
    }
  };
};

export const fetchUserInit = id => {
  return {
    type: FETCH_USER_INIT,
  };
};

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailed = error => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

export const updateUser = (id, data) => {
  return async () => {
    try {
      const response = AxiosUsersService.updateUser (id, data);
      return response;
    } catch (error) {
      return Promise.reject (error);
    }
  };
};
