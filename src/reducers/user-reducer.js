import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../actions/types';

const initialState = {
  user: {
    data: null,
    errors: [],
  },
};

export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case FETCH_USER_INIT:
      return Object.assign ({}, state, {errors: [], data: null});
    case FETCH_USER_SUCCESS:
      return Object.assign ({}, state, {data: action.payload});
    case FETCH_USER_FAILED:
      return Object.assign ({}, state, {errors: action.payload, data: null});
    default:
      return state;
  }
};
