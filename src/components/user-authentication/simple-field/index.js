import { Field } from 'redux-form'
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SimpleField extends Component {
    render() {
        const {icon,name, fieldType, label, id} = this.props.data;
        return (
            <div className='input-field input-white untouched'>
                <div className='icon-section'>
                    <i className='material-icons'>{icon}</i>
                </div>
                <Field name={name} className='exact-field' component="input" type={fieldType} placeholder={label}/>
                {/*<div className='field-animation-wrapper'>*/}
                    {/*<label className='input-label' htmlFor={name}>{label}</label>*/}
                {/*</div>*/}
            </div>
        )
    }
};

SimpleField.propTypes = {
    data: PropTypes.object,
    fieldEmpty: PropTypes.func,
    touchedId: PropTypes.array
};

export default SimpleField;


