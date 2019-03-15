import React, {Component} from 'react';

class FilterDropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggled: false
        }
    }
    toggle(){
        if(this.state.isToggled){
            this.setState({
                isToggled: false
            })
        }else{
            this.setState({
                isToggled: true
            })
        }
    }
    render(){
        return(
            <div className='filter-dropdown'>
                <span className='head'>Vendor</span>
                <div className='select' onClick={() => this.toggle()}>
                    Select
                    <i className="material-icons dop-icon">keyboard_arrow_down</i>
                </div>
                <div className={this.state.isToggled ? 'toggle open' : 'toggle'}>
                    <div className='row-toggle-wrap'>
                        <div className='shared-scroll-view'>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_1'/>
                                <label htmlFor='_1'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_2'/>
                                <label htmlFor='_2'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_3'/>
                                <label htmlFor='_3'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_4'/>
                                <label htmlFor='_4'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_6'/>
                                <label htmlFor='_5'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_7'/>
                                <label htmlFor='_7'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_8'/>
                                <label htmlFor='_8'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_9'/>
                                <label htmlFor='_9'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_10'/>
                                <label htmlFor='_10'>Select</label>
                            </div>
                            <div className='toggle-row'>
                                <input type='checkbox' id='_11'/>
                                <label htmlFor='_11'>Select</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterDropdown;