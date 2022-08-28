import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../../bootstrap.css'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                id: moment(response.data.id).format('YYYY-MM-DD')
            }
            ))
    }


    onSubmit(values) {
        console.log(values)
    }


    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a description.'
        } else if (values.description.length < 5) {
            errors.description = 'Enter a description of at least 5 characters.'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid target date'
        }
        return errors
    }


    render() {
        /*
        In JS, we can do:
        let testList = {a: '1', b: '2', c: '3'}
        let {a, b, c} = testList
        */
        
        let {description, targetDate} = this.state

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    {/*
                    Below assignment of variables in Formik component is equal to:
                    initialValues = {{
                        description: description,
                        targetDate: targetDate
                    }}

                    JS infers values when a property name identical to the variable name is passed. 
                    */}
                    <Formik 
                        initialValues = {{
                            description,
                            targetDate
                        }}
                        onSubmit = {this.onSubmit}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                        validate = {this.validate}
                        enableReinitialize = {true}
                    >
                        

                    {/* Define method in Formik component that takes props as inputs and returns html of the form*/} 
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoComponent;