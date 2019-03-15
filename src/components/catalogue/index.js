import {collectSelectedIds} from '../../store/actions/catalogue-actions'
import {PRODUCT_VIEW_TYPE} from '../../constants/catalogue.constants';
import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from "react-redux";

class SimpleProduct extends Component{
    constructor(props){
        super(props);
    }

    handleProductId(events, id){
            this.props.dispatch(collectSelectedIds(id));
    }

    render(){
        const {viewType, simpleProduct, bulkEdit} = this.props;
        let item_view_class_name = 'col-sm-12 col-md-6 col-lg-4 col-xl-3 column-view',
            grid_view_class_name = 'grid-view';
        return(
            <div className={viewType === PRODUCT_VIEW_TYPE['col_view'] ? item_view_class_name : grid_view_class_name}>
                <div className='custom-item'>
                    {
                        bulkEdit && (
                            <div className='catalogue-product-check'>
                                <div className='checkbox-ctrl'>
                                    <div className='custom-checkbox-style'>
                                        <input name='select_product' className='checkbox' type='checkbox' onChange={(event) => this.handleProductId(event, simpleProduct['id'])}/>
                                        <b className='icon-mark icon-check-mark-sign'/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <Link to='/single-product' className='product-image-frame'>
                        <img src='../../../assets/resources/images/24365700.jpg'/>
                    </Link>
                    {viewType === PRODUCT_VIEW_TYPE['col_view'] ? <ColumnItemView simpleProduct={simpleProduct}/> : <GridItemView simpleProduct={simpleProduct}/>}
                </div>
            </div>
        )
    }
}

function ColumnItemView(props){
    const simpleProduct = props.simpleProduct;
    return(
        <div className='item-info'>
            <div className='custom-row'>
                <a href='#' className='simple-product-ref'>{simpleProduct.simple_product_head}</a>
            </div>
            <div className='custom-row'>
                <span className='product-id'>{simpleProduct.id}</span>
                <span className='price'>$<span>{simpleProduct.product_price}</span></span>
            </div>
            <div className='custom-row'>
                <div className='brand'>
                    <span>Brand</span>:
                    <span>{simpleProduct.brand}</span>
                </div>
                <span className='price-text'>BUY PRICE</span>
            </div>
            <div className='custom-row'>
                <div className='category-row'>
                    <span>Category</span>
                    <span>: |</span>
                    <span>{simpleProduct.category}</span>
                    <span>:</span>
                    <span>{simpleProduct.seller_name}</span>
                </div>
            </div>
        </div>
    )
}

function GridItemView(props){
    const simpleProduct = props.simpleProduct;
    return(
        <div className='item-info'>
            <div className='custom-row'>
                <div className='custom-col-1'>
                    <a href='#' className='simple-product-ref'>{simpleProduct.simple_product_head}</a>
                    <span className='product-id'>{simpleProduct.id}</span>
                </div>
                <div className='custom-col-2'>
                    <span className='price'>$<span>{simpleProduct.product_price}</span></span>
                </div>
            </div>
            <div className='custom-row'>
                <div className='brand'>
                    <span>Brand</span>:
                    <span>{simpleProduct.brand}</span>
                </div>
                <div className='category-row'>
                    <span>Category</span>
                    <span>: |</span>
                    <span>{simpleProduct.category}</span>
                    <span>:</span>
                    <span>{simpleProduct.seller_name}</span>
                </div>
                <span className='price-text'>BUY PRICE</span>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        catalogueStates: state.catalogueReducer
    }
}

export default connect(mapStateToProps)(SimpleProduct);