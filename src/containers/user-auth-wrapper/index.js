import AccountInfo from "../../components/side-bar-options/account-info";
import SingleProduct from "../../components/catalogue/single-product"
import VideoModal from '../../components/shared/video-modal';
import {Route, Switch, Redirect} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Sidebar from '../../containers/side-bar';
import { withRouter } from 'react-router-dom';
import Dashboard from '../dashboard';
import Catalogue from '../catalogue';
import ImportPage from "../import-page";
import {connect} from "react-redux";

class UserRouteWrapper extends Component {
    render() {
        const videoData = this.props.videoData;
        return (
            <div className='main-layout-container'>
                <Sidebar />
                <div className='main-layout'>
                <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} className='header'>
                        <i style={{ color: 'white', marginRight: '25px' }} className="material-icons">settings</i>
                        <i style={{ color: 'white', marginRight: '25px' }} className="material-icons">notifications</i>
                    </header>
                    <Switch>
                        <Redirect exact from="/" to="/catalogue" />
                        <Route exact path='/dashboard' component={Dashboard}/>
                        <Route path='/catalogue' component={Catalogue}/>
                        <Route path='/import' component={ImportPage}/>
                        <Route path='/single-product' component={SingleProduct}/>
                        <Route render={() => <Redirect to="/catalogue" />} />
                    </Switch>
                </div>
                {videoData.openVideoOpened && <VideoModal />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { videoData: state.playVideo };
};

export default withRouter(
    connect(mapStateToProps)(UserRouteWrapper)
);