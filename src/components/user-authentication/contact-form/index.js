require('whatwg-fetch');
import FormBtn from '../../../components/user-authentication/form-btn'
import {RememberPasswordRow} from '../remember-password'
import SimpleField from '../simple-field/index'
import {reduxForm} from 'redux-form'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from '../../../core/user.actions';

class ContactForm extends Component {
    render() {
        const {handleSubmit, formGroup} = this.props;
        return (
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='fields-heading'>{formGroup.headingLabel}</div>
                {
                    formGroup['group'].map((item, index) =>
                        <SimpleField key={index} data={item}/>
                    )
                }
                {
                    formGroup.name === 'login' ? (<RememberPasswordRow/>) : null
                }
                <FormBtn type={formGroup['name']} label={formGroup['headingLabel']}/>
            </form>
        )
    }
}

// ContactForm = reduxForm({
//     // a unique name for the form
//     form: 'contact'
// })(ContactForm);

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(reduxForm({form: 'contact'})(ContactForm));
