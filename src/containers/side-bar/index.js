import AccountInfo from '../../components/side-bar-options/account-info';
import {SIDE_BAR_NAV_ITEMS} from '../../constants/side.bar.constants';
import NavItem from '../../components/side-bar-options/nav-item';
import Logo from '../../components/side-bar-options/logo';
import React, {Component, Fragment} from 'react';
import {PRODUCT_VIEW_TYPE} from "../../constants/catalogue.constants";


class Sidebar extends Component{
    render(){
        const NavItemGroup = SIDE_BAR_NAV_ITEMS.group;
        return(
            <div className='side-bar'>
                <Logo />
                <div className='bar-items' ref={this.setWrapperRef}>
                    <AccountInfo />
                    <div className='route-tabs'>
                        {
                            NavItemGroup.map((item, index) => (<NavItem key={index} data={item}/>))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;