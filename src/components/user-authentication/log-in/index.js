import ContactForm from '../../user-authentication/contact-form'
import LoginRegisterLogo from '../logo/index';
import {LOGIN_FIELD_GROUP} from '../../../constants/index'
import React, {Component} from 'react';
import User from "../../../core/user.actions";
import {SetUserData, UserLoggedIn} from "../../../store/actions/user";
import {connect} from 'react-redux';


class LogIn extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.login = this.login.bind(this);
    }

    submit(values) {
        User.loginRegister(values, '/api/auth/login').then((data) => {
            if(data && data["access_token"]){
                this.login(data["access_token"]);
            }
        })
    };
    login(token){
        localStorage.setItem('userToken', token);
        User.getUser(token).then((data) => {
            this.props.dispatch(SetUserData(data));
        }).then(() => {
            this.props.dispatch(UserLoggedIn(true));
        }).then(() => {
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div className='main-wrapper-layout light-blue'>
                <div className='login-register-wrapper'>
                    <div className='field-set'>
                        <div className='logo-col'>
                            <LoginRegisterLogo/>
                        </div>
                        <div className='user-fields'>
                            <ContactForm onSubmit={this.submit} formGroup={LOGIN_FIELD_GROUP}/>
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

export default connect(mapStateToProps)(LogIn);