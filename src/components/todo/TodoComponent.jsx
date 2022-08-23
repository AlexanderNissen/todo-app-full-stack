import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik';

class TodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
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