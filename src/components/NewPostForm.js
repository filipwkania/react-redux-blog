import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {createPost} from '../actions';
import {connect} from 'react-redux';

class NewPostForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div>
        <h3>Create new post</h3>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div>
            <Field name="title" component={this.renderField} type="text" focused="true" label="Title"/>
          </div>
          <div>
            <Field name="categories" component={this.renderField} type="text" label="Categories" />
          </div>
          <div>
            <Field name="content" component={this.renderField} type="text" label="Content" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-primary has-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className} >
        <label htmlFor={field.name}>{field.label}</label>        
        <input 
          className="form-control" 
          type={field.type} 
          name={field.name} 
          autoFocus={field.focused}
          {...field.input} 
        />
        <div className="form-control-feedback">
          {touched ? error : ''}
        </div> 
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Missing post title';
  } else if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters long'
  }

  if(!values.content) {
    errors.content = 'Missing post content';
  }

  //If errors's empty, submitted values passed validation
  return errors;
}

NewPostForm = reduxForm({
  // a unique name for the form
  form: 'newPostForm',
  validate
  
})(
  connect(null, {createPost})(NewPostForm)
);

export default NewPostForm;