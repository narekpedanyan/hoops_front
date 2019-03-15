import ForgetPassword from '../../components/user-authentication/forget-password';
import Register from '../../components/user-authentication/register';
import LogIn from '../../components/user-authentication/log-in';
import {Route, Switch, Redirect} from 'react-router-dom';
import React, {Component, Fragment} from 'react';

class AuthRouteWrapper extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path='/login' component={LogIn}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/forget-password' component={ForgetPassword}/>
                    <Route render={() => <Redirect to="/login" />} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default AuthRouteWrapper;