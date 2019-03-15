import {BulkEditProduct} from '../../../store/actions/catalogue-actions';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import User from '../../../core/user.actions'
import {SetUserData, UserLoggedIn} from "../../../store/actions/user";

class DropDown extends Component {
    constructor(props){
        super(props);
        this.renderImportEditBtns = this.renderImportEditBtns.bind(this);
        this.logout = this.logout.bind(this);
    }

    changeBulkEditState(){
        // console.log(this.props.catalogueStates, 'asd');
        this.props.dispatch(BulkEditProduct(true))
    }

    logout(){
        let token = localStorage.getItem('userToken');
        User.logout(token).then((data) => {
            console.log(data)
        });
        this.props.dispatch(SetUserData(null));
        this.props.dispatch(UserLoggedIn(false));
        localStorage.clear();
        this.props.history.push("/");

    }

    renderImportEditBtns(param){
        if(param === 'CSV_IMPORT_ITEMS') {
            return(
                <div>
                    <div className='collapse-btn' >
                        <i className="material-icons">open_in_browser</i>
                        <Link to={'/import'} className='collapse-btn-text'>Import</Link>
                    </div>
                    <div className='collapse-btn' onClick={() => this.changeBulkEditState()}>
                        <i className="material-icons">mode_edit</i>
                        <span className='collapse-btn-text'>Bulk Edit</span>
                    </div>
                </div>
            )
        }else if(param === 'DOWNLOAD_CSV'){
            return (
                <div className='collapse-btn'>
                    <i className="material-icons">library_books</i>
                    <a href="../../../../assets/resources/CSV/catalogue.csv" className='collapse-btn-text' download>CSV</a>
                </div>
            )
        }else if(param === 'ACCOUNT_GROUP') {
            return (
                <div>
                    <div className='collapse-btn'>
                        <i className="material-icons">account_circle</i>
                        <span className='collapse-btn-text'>My Profile</span>
                    </div>
                    <div className='collapse-btn'>
                        <i className="material-icons">https</i>
                        <span className='collapse-btn-text'>Change Password</span>
                    </div>
                    <div className='collapse-btn' onClick={this.logout}>
                        <i className="material-icons">power_settings_new</i>
                        <span className='collapse-btn-text'>Logout</span>
                    </div>
                </div>
            )
        }
    }

    render() {
        const {group, dropDownCallback, catalogueStates} = this.props;
        return (
            <div className='account-collapse'>
                {this.renderImportEditBtns(group)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        catalogueStates: state.catalogueReducer
    }
};

export default withRouter(connect(mapStateToProps)(DropDown));