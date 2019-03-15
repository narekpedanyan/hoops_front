import {Field} from "redux-form";
import React from "react";

export function RememberPasswordRow(){
    return (
        <div className='remember-password-row'>
            <div className='checkbox-ctrl'>
                <div className='custom-checkbox-style'>
                    <Field name='remember_pass' className='checkbox' component='input' id='forget_pass' type='checkbox'/>
                    <b className='icon-mark icon-check-mark-sign'/>
                </div>
                <label htmlFor='forget_pass'>Remember me</label>
            </div>
            <div className='rem-col'>
                <a href='#'>Forgot password ?</a>
            </div>
        </div>
    )
}