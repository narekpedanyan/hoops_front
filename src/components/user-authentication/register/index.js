import ContactForm from "../../user-authentication/contact-form";
import {REGISTER_FIELD_GROUP} from '../../../constants/index'
import ContactPage from '../contact-form/index';
import User from '../../../core/user.actions';
import LoginRegisterLogo from '../logo/index';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UserLoggedIn, SetUserData} from "../../../store/actions/user"



class Register extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.login = this.login.bind(this);
    }
    login(token){
        localStorage.setItem('userToken', token);
        User.getUser(token).then((data) => {
            this.props.dispatch(SetUserData(data));
        }).then(() => {
            this.props.dispatch(UserLoggedIn(true));
        });
    }
    submit(values) {
        User.loginRegister(values, '/api/auth/register').then((data) => {
            if(data && data["access_token"]){
                this.login(data["access_token"]);
            }
        })
    }

    render() {
        return (
            <div className='main-wrapper-layout light-blue'>
                <div className='login-register-wrapper'>
                    <div className='field-set'>
                        <div className='logo-col'>
                            <LoginRegisterLogo />
                        </div>
                        <div className='user-fields'>
                            <ContactForm onSubmit={this.submit} formGroup={REGISTER_FIELD_GROUP}/>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

function mapStateToProps (state) {
    return {
        userInfo: state.userInfoReducer,
    };
}

export default connect(mapStateToProps)(Register);