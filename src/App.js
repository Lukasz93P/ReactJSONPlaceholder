import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import UsersListing from './components/users/UsersListing';
import Header from './components/shared/Header';
import CreateUser from './components/users/CreateUser';
import {ToastContainer, toast} from 'react-toastify';
import EditUser from '../src/components/users/EditUser';

const store = require ('./reducers').init ();

class App extends Component {
  showToast = (message, successOrFailure) => {
    switch (successOrFailure) {
      case true:
        return toast.success (message, {position: 'top-center'});

      case false:
        return toast.error (message, {position: 'top-center'});
    }
  };

  render () {
    const {showToast} = this;
    return (
      <Provider store={store}>
        <div className="App justify-content-center">
          <Header />
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/users/list" />;
            }}
          />
          <Route
            exact
            path="/users/list"
            render={() => {
              return <UsersListing showToast={showToast} />;
            }}
          />
          <Route
            exact
            path="/users/add"
            render={() => {
              return <CreateUser showToast={showToast} />;
            }}
          />
          <Route
            exact
            path="/users/edit/:id"
            render={() => {
              return <EditUser showToast={showToast} />;
            }}
          />
          <ToastContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
