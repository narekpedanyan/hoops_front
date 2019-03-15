import { filterShowHide } from '../../../store/actions/catalogue-actions';
import FilterDropdown from './dropdown';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';

class FilterBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: { min: 1, max: 100 },
            value2: { min: 2, max: 50 },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value, 'ad')
    }

    closeFilter() {
        this.props.dispatch(filterShowHide(false))
    }

    render() {
        const filterData = this.props.catalogueStates;
        const { value, value2 } = this.state;
        return (
            <div className='catalogue-filter-bar' id={filterData.filterIsOpened === true ? 'open' : null}>
                <div className='shared-scroll-view'>
                    <div className="filter_block">
                        <div className="filter_title_block">
                            <div className="filter_title">
                                <div className="filter_title_text">
                                    <h3>Filter</h3>
                                    <p>Select the following items to filter the Catalogues</p>
                                </div>
                                <span className="close_filther_block" onClick={() => this.closeFilter()} />
                            </div>
                            <div className="apply_btn">
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className="filter_search_block">
                            <input type="text" placeholder="Enter your search here..." />
                        </div>
                        <div className='dropdown-wrap'>
                            <FilterDropdown />
                            <FilterDropdown />
                            <FilterDropdown />
                        </div>
                        <div className='tags-sec'>
                            <span className='tag-head'>Tags</span>
                            <input type='text' className='tags-field' />
                        </div>
                        <div className='range-wrapper'>
                            <div className='range-head'>Min Order QTY</div>
                            <InputRange
                                maxValue={20}
                                minValue={0}
                                value={value}
                                onChange={value => this.setState({ value })} />
                        </div>
                        <div className='order-values'>
                            <div className='value-square'>{value.min}</div>
                            <span className='line-value' />
                            <div className='value-square'>{value.max}</div>
                        </div>
                        <div className='range-wrapper'>
                            <div className='range-head'>Price</div>
                            <InputRange
                                maxValue={20}
                                minValue={0}
                                value={value2}
                                onChange={value => this.setState({ value2: value })} />
                        </div>
                        <div className='order-values'>
                            <span>{`$${value2.min}`}</span>
                            <span>-</span>
                            <span>{`$${value2.max}`}</span>
                        </div>
                        <div className='apply-btn-wrapper'>
                            <button className='apply-btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        catalogueStates: state.catalogueReducer,
    };
}

export default connect(mapStateToProps)(FilterBar);