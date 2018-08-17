import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, email, minLength4} from '../../shared/validators';
import {input} from '../../shared/input';
import {connect} from 'react-redux';

let UserForm = props => {
  const {
    onFormSubmit,
    valid,
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit (onFormSubmit)}>

      <Field
        name="name"
        type="text"
        placeholder="name"
        className="form-control"
        component={input}
        label="Name"
        validate={required}
      />

      <Field
        name="username"
        type="text"
        placeholder="username"
        className="form-control"
        component={input}
        label="Username"
        validate={[minLength4, required]}
      />

      <Field
        name="email"
        type="text"
        placeholder="email"
        className="form-control"
        component={input}
        label="Email"
        validate={[email, required]}
      />

      <button
        type="submit"
        className="btn btn-primary"
        disabled={!valid || pristine || submitting}
      >
        Submit
      </button>

    </form>
  );
};

UserForm = reduxForm ({
  form: 'UserForm', // a unique identifier for this form
  enableReinitialize: true,
}) (UserForm);

function mapStateToProps (state) {
  if (state.user.data)
    return {
      initialValues: state.user.data,
    };
  return {};
}
export default connect (mapStateToProps) (UserForm);
