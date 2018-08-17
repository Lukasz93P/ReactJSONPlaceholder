import * as redux from 'redux';
import logger from 'redux-logger';
import {reducer as formReducer} from 'redux-form';
import {UsersReducer} from './users-reducer';
import {UserReducer} from './user-reducer';
import thunk from 'redux-thunk';

export const init = () => {
  const reducer = redux.combineReducers ({
    users: UsersReducer,
    form: formReducer,
    user: UserReducer,
  });

  const store = redux.createStore (
    reducer,
    redux.applyMiddleware (logger, thunk)
  );

  return store;
};
