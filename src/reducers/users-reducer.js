import {
  FETCH_USERS_INIT,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from '../actions/types';

const initialState = {
  users: {
    data: [],
    errors: [],
  },
};

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case FETCH_USERS_INIT:
      return Object.assign ({}, state, {errors: [], data: []});
    case FETCH_USERS_SUCCESS:
      return Object.assign ({}, state, {data: action.payload});
    case FETCH_USERS_FAILED:
      return Object.assign ({}, state, {errors: action.payload, data: null});
    default:
      return state;
  }
};
