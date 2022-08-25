import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'
import '../../bootstrap.css'

class TodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            description: 'Learn Forms now',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        {
        /*
        In JS, we can do:
        let testList = {a: '1', b: '2', c: '3'}
        let {a, b, c} = testList
        */
        }
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
                    >
                        

                    {/* Define method in Formik component that takes props as inputs and returns html of the form*/} 
                        {
                            (props) => (
                                <Form>
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