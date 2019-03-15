import {BrowserRouter as Router} from 'react-router-dom';
import AuthRouteWrapper from './auth-route-wrapper';
import UserRouteWrappers from './user-auth-wrapper';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppReady} from "../store/actions/app";
import User from "../core/user.actions";
import {SetUserData, UserLoggedIn} from "../store/actions/user";

class App extends Component {
    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.login = this.login.bind(this);
    }
    init(){
        let userToken = localStorage.getItem("userToken");
        if(userToken){
            this.login(userToken);
        } else {
            this.props.dispatch(AppReady);
        }
    }
    login(token){
        User.getUser(token).then((data) => {
            if(!!data){
                this.props.dispatch(SetUserData(data))
            } else throw data;

        }).then(() => {
            this.props.dispatch(UserLoggedIn(true));
        }).then(() => this.props.dispatch(AppReady)).catch(() => this.props.dispatch(AppReady))

    }
    componentWillMount(){
        this.init()
    }
    render() {
        const {userInfo} = this.props;
        return (
            !!this.props.appReady && <Router>
                <div className='application'>
                    {!userInfo.isLoggedIn && <AuthRouteWrapper/>}
                    {userInfo.isLoggedIn && <UserRouteWrappers/>}
                </div>
            </Router>
        )
    }
}

function mapStateToProps (state) {
    return {
        userInfo: state.userInfoReducer,
        appReady: state.appReducer.appReady,
        playVideo: state.playVideo
    }
}

export default connect(mapStateToProps)(App);