import {ACCOUNT_DROP_DOWN} from '../../../constants/side.bar.constants';
import DropDown from '../../shared/dropdown-menu';
import React, {Component} from 'react';

class AccountInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCollapseOpen: false
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    collapse(){
        if(this.state.isCollapseOpen === true){
            this.setState({
                isCollapseOpen: false
            })
        }else{
            this.setState({
                isCollapseOpen: true
            })
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Click handled outside
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.activeBtn !== false) {
            this.setState({
                isCollapseOpen: false
            })
        }
    }

    render(){
        return(
            <div className='account-row'  onClick={() => this.collapse()} ref={this.setWrapperRef}>
                <div className='account-img'>
                    <img src='https://s3.us-east-2.amazonaws.com/hoops-profile-pics-resized/resized-images/EFM76ufjd5T4vFj.jpg' />
                </div>
                <div className='account-info'>
                    <span>Demo Account</span>
                    <i className="material-icons">keyboard_arrow_down</i>
                </div>
                {this.state.isCollapseOpen && <DropDown group={'ACCOUNT_GROUP'}/>}
            </div>
        )
    }
}


export default AccountInfo;