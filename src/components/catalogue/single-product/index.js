import React, {Component} from 'react';

class SingleProduct extends Component{
    render(){
        return(
            <div className='single-product-wrapper'>
                <div className='single-product-data'>
                    <div className='product-img-wrap'>
                        <img src='../../../../assets/resources/images/24365700.jpg'/>
                    </div>
                    <div className='product-info'>
                        <div className='product-head-info'>
                            <div className='product-heading-column'>
                                <a href='' className='product-link-to'>Example KEYCHAIN with prices based on different delivery times</a>
                                <div className='brand-row'>
                                    <span>Brand: </span>
                                    <span>Example Brand</span>
                                </div>
                            </div>
                            <div className='product-head-item'>
                                <span className='min-order'>Min order Qty: N/A</span>
                                <button className='edit-product'>
                                    <i className='material-icons'>edit</i>
                                    Edit
                                </button>
                            </div>
                            <div className='product-head-item'>
                                <span className='id-text'>Id: EX1003</span>
                            </div>
                        </div>
                        <div className='options-owner'>
                            <div className='item'>
                                <span>Vendor:</span>
                                 Example
                            </div>
                            <span className='line-b'/>
                            <div className='item'>
                                <span>Vendor:</span>
                                Example
                            </div>
                            <span className='line-b'/>
                            <div className='item'>
                                <span>Vendor:</span>
                                Example
                            </div>
                        </div>
                        <div className='price-options'>
                            <span className='price-p'>$1.15</span>
                            <span className='buy-b'>
                                <i className='material-icons'>local_mall</i>
                                Buy Price
                            </span>
                        </div>
                        <div className='tag-section-wrapper'>
                            <div className='tag-section'>
                                <div className='item'>
                                    <span className='properties'>Colors:</span>
                                    <div className='tags-wrapper'>
                                        <span className='tag'>Light Silver</span>
                                        <span className='tag'>Dark Silver</span>
                                        <span className='tag'>Black Alloy</span>
                                    </div>
                                </div>
                                <div className='item'>
                                    <span className='properties'>Sizes:</span>
                                    <div className='tags-wrapper'>
                                        <span className='sizes'>6 x 4 x 0.5cm</span>
                                    </div>
                                </div>
                            </div>
                            <div className='tag-section'>
                                <div className='item'>
                                    <span className='properties'>Tags:</span>
                                    <div className='tags-wrapper'>
                                        <span className='tag'>Best Seller</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProduct;