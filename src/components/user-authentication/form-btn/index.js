import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Field } from 'redux-form';

class FormBtn extends Component {
    constructor(props){
        super(props);
        this.currentButton = this.currentButton.bind(this);
    }
    currentButton(buttonType, label){
        switch (buttonType) {
            case 'register':
                return (<RegisterGroupBtn label={label}/>);
            case 'login':
                return (<LoginBtnGroup label={label} />);
            case 'forget-password':
                return (<ForgetPasswordBtn label={label} />)
        }
    }
    render() {
        const {type, label} = this.props;
        return (
            <React.Fragment>
                {this.currentButton(type, label)}
            </React.Fragment>
        )
    }
}

function RegisterGroupBtn(props){
    return (
        <React.Fragment>
            <div className='request-btn-wrapper register'>
                <button type="submit" className='btn'>{props.label}</button>
            </div>
            <p className='form-helper'>By clicking submit, you agree to our <a href='#'>Terms Of Service</a> and <a href='#'>Privacy Policy</a><span className='op-text'>Already a Member?</span> Sign In <Link to='/login' className='underline-none'>here</Link></p>
        </React.Fragment>
    )
}

function ForgetPasswordBtn(props){
    return (
        <React.Fragment>
            <div className='request-btn-wrapper recover'>
                <button type="submit" className='btn'>{props.label}</button>
            </div>
            <p className='form-helper lighten'>Are you a new Member? <Link to='/register'>Sign Up here</Link></p>
        </React.Fragment>
    )
}

function LoginBtnGroup(props){
    return (
        <React.Fragment>
            <div className='request-btn-wrapper login'>
                <button type="submit" className='btn'>{props.label}</button>
            </div>
            <p className='form-helper lighten'>Are you a new Member? <Link to='/register'>Sign Up here</Link></p>
        </React.Fragment>
    )
}



export default FormBtn;