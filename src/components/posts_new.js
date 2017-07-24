import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {

    /*renderTitleField(field) {
        return (
            <div className="form-group">
                <label>Title:</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                    {field.meta.error}
            </div>
        );
    }*/

    renderField(field) {
        return (
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                    <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit} = this.props;

        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field name ="title" label = "Title" component={this.renderField}/>
               <Field name ="categories" label="Categories" component={this.renderField}/>
               <Field name ="content" label="Post Content" component={this.renderField}/>
               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }
}

//values contains all the values that the user put in the form
function validate(values){
    const errors ={};

    //logic to validate values
    if(!values.title || values.title.length <3){
        errors.title ="Enter a title that is atleast 3 characters";
    }
    if(!values.categories){
        errors.categories ="Enter a category";
    }
    if(!values.content){
        errors.content ="Enter Content";
    }

    //if errors is empty then the form is fine to submit
    return errors;

}

export default reduxForm({
    validate,
    form: 'PostsNewForm' //name of the form you give, make sure it is unique
})(
connect(null,{createPost})(PostsNew)
);