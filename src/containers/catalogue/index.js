import {CSV_DROP_ITEMS, CATALOGUE_CONTROL_BTN_TYPES} from '../../constants/catalogue.constants';
import {PRODUCT_VIEW_TYPE} from '../../constants/catalogue.constants';
import {setProducts} from '../../store/actions/catalogue-actions';
import FilterBar from '../../components/catalogue/filter-bar';
import DropDown from '../../components/shared/dropdown-menu';
import BulkEdit from '../../components/catalogue/bulk-edit';
import {SIMPLE_PRODUCTS} from '../../constants/fake.data';
import SimpleProduct from "../../components/catalogue";
import getApiCredentials from "../../core/constants";
import Loader from '../../components/shared/loader';
import Filter from '../../components/shared/filter';
import React, {Component} from 'react';
import {connect} from "react-redux";

class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewType: PRODUCT_VIEW_TYPE['col_view'],
            activeBtn: false,
            bulkEdit: false
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.getProductList = this.getProductList.bind(this);
    }

    componentDidMount() {
        this.getProductList();
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
                activeBtn: false
            })
        }
    }

    changeProductView(expectedType){
        if(expectedType === this.state.viewType){
            return;
        }else{
            this.setState({
                viewType: expectedType
            })
        }
    }

    showControlDropDown(currentState){
        if(this.state.activeBtn === currentState){
            return;
        }else{
            this.setState({
                activeBtn: currentState
            })
        }
    }

    getProductList(){
        let token = localStorage['userToken'];
        let uri = getApiCredentials.host + "api/products";
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "Bearer " + token
            }
        };
        const reqInstance = new Request(uri, requestOptions);
        fetch(reqInstance)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then(data => {
                //Fetched products
                this.props.dispatch(setProducts(data));
            }).catch((err) => console.log(err, "error111"))
    };

    render(){
        const productsList = SIMPLE_PRODUCTS['group'];
        const {catalogueStates, products} = this.props;
        return(
        <div className='catalogue-wrapper'>
            <div className='catalogue-header-roww'>
                Catalogue
                <a href='#' className='row-link'>
                    <div className='row-i-ic'>
                        <i className='material-icons'>book</i>
                    </div>
                    Automate your processes by adding catalogues
                </a>
            </div>
            <div className='catalogue-functional-header'>
                <div className='action-buttons' ref={this.setWrapperRef}>
                    <button onClick={() => this.changeProductView(PRODUCT_VIEW_TYPE['col_view'])} className={this.state.viewType === PRODUCT_VIEW_TYPE['col_view'] ? 'active' : ''}>
                        <i className='material-icons'>view_module</i>
                    </button>
                    <button onClick={() => this.changeProductView(PRODUCT_VIEW_TYPE['grid_view'])} className={this.state.viewType === PRODUCT_VIEW_TYPE['grid_view'] ? 'active' : ''}>
                        <i className='material-icons'>view_list</i>
                    </button>
                    <button className={this.state.activeBtn === CATALOGUE_CONTROL_BTN_TYPES['csv'] ? 'active' : ''} onClick={() => this.showControlDropDown(CATALOGUE_CONTROL_BTN_TYPES['csv'])}>
                        <i className='material-icons'>file_download</i>
                        {this.state.activeBtn === CATALOGUE_CONTROL_BTN_TYPES['csv'] && <DropDown group={'DOWNLOAD_CSV'} />}
                    </button>
                    <button className={this.state.activeBtn === CATALOGUE_CONTROL_BTN_TYPES['import'] ? 'active' : ''} onClick={() => this.showControlDropDown(CATALOGUE_CONTROL_BTN_TYPES['import'])} >
                        <i className='material-icons'>more_horiz</i>
                        {this.state.activeBtn === CATALOGUE_CONTROL_BTN_TYPES['import'] && <DropDown group={'CSV_IMPORT_ITEMS'} />}
                    </button>
                </div>
                {!catalogueStates.bulkEdit ? <Filter /> : null}
            </div>
            <div className='catalogue-body'>
                <div className='shared-scroll-view'>
                    <div className='catalogue-grid'>
                        {catalogueStates['bulkEdit'] && <BulkEdit />}
                        <div className={`catalogue-item-wrapper ${this.state.viewType}`}>
                            <div className='row'>
                                {!products['data'] && <Loader />}
                                {
                                    products['data'] && products['data'].map((item, index) => <SimpleProduct simpleProduct={item} key={index} viewType={this.state.viewType} bulkEdit={catalogueStates['bulkEdit']}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FilterBar />
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        catalogueStates: state.catalogueReducer,
        products: state.catalogueReducer.products
    };
}

export default connect(mapStateToProps)(Catalogue);