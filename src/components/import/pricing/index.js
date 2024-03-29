import ImportStateChart from '../../../components/import/shared/state-chart';
import StepButtons from '../shared/step-buttons';
import React, {Component} from 'react';
import ImportedProperty from "../../../containers/imported-property";
import VideoBtn from "../../shared/video-btn";

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.setAdditionalFields = this.setAdditionalFields.bind(this);
        this.addMoreService = this.addMoreService.bind(this);
        this.addMorePriceBreaks = this.addMorePriceBreaks.bind(this);
        this.state = {
            showAdditionalFields: false,
            serviceCount: 1,
            priceBreaksCount: 1,
            additionalField: 0
        }
    }

    setAdditionalFields(e) {
        const value = e.target.value;
        console.log(value);
        if (this.state.additionalField !== value) {
            this.setState({
                showAdditionalFields: true,
                additionalField: parseInt(value)
            });
        }
    }

    addMorePriceBreaks() {
        const {priceBreaksCount} = this.state;
        this.setState({
            priceBreaksCount: priceBreaksCount + 1
        });
    }

    addMoreService() {
        const {serviceCount} = this.state;
        this.setState({
            serviceCount: serviceCount + 1
        });
    }

    getService() {
        const {importFileData} = this.props;
        return (
            importFileData && importFileData.db_fields3.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <span>{item.label}</span>
                            {item.required &&
                            <button className="hoops_map_table_required_button">Required</button>}
                            {item.recomended && <button
                                className="hoops_map_table_recommended_button">Recommended</button>}
                            <a href="#" className="what_this_link">What's This?</a>
                        </td>
                        <td>
                            <i className="material-icons table_right_arrow">trending_flat</i>
                        </td>
                        <td>
                            <ImportedProperty propertyItem={item}
                                              propertyOptions={importFileData.csv_headers}/>
                        </td>
                    </tr>
                );
            })
        )
    }

    getServiceArray() {
        const {serviceCount} = this.state;
        let service = [];
        for (let i = 0; i < serviceCount; i++) {
            const singleRow = this.getService();
            service.push(singleRow);
        }
        return service;
    }
    getPriceBreak(i) {
        const {importFileData} = this.props;
        return (
            <div className="quantity_break_block" key={i}>
                <div className="quantity_break_block_content">
                    <div className="quantity_break_block_items">
                        <div className="minimum_order_block_title">
                            <h3>Quantity break point {i}</h3>
                            <button className="hoops_map_table_required_button">Required</button>
                            <a href="#" className="what_this_link">What's This?</a>
                        </div>
                        <ImportedProperty propertyItem={{name: `quantity_break_point_${i}`}}
                                          propertyOptions={importFileData.csv_headers}/>
                    </div>
                    <div className="quantity_break_block_items">
                        <div className="minimum_order_block_title">
                            <h3>Quantity break point {i} price</h3>
                            <button className="hoops_map_table_required_button">Required</button>
                            <a href="#" className="what_this_link">What's This?</a>
                        </div>
                        <ImportedProperty propertyItem={{name: `quantity_break_point_${i}_price`}}
                                          propertyOptions={importFileData.csv_headers}/>
                    </div>
                </div>
            </div>
        )
    }

    getPriceBreakArray() {
        const {priceBreaksCount} = this.state;
        let priceRows = [];
        for (let i = 0; i < priceBreaksCount; i++) {
            const singleRow = this.getPriceBreak(i + 1);
            priceRows.push(singleRow);
        }
        return priceRows;
    }

    render() {
        const {importFileData} = this.props;
        const {showAdditionalFields, additionalField, priceBreaksCount, serviceCount} = this.state;
        return (
            <div className="product_mapping_block">
                <div className="product_mapping_block_title">
                    <div className="product_info">
                        <div className="product_info_icon_block">
                            <i className="material-icons white-text product_info_icon_block_icon">beenhere</i>
                        </div>
                        <span className="product_info_icon_block_text">Services price mapping</span>
                    </div>
                    <div className="watch_the_video">
                        <VideoBtn/>
                    </div>
                </div>
                {
                    additionalField !== 2 &&
                    (<div className="step_3_catalogue_multiple">
                        <div className="step_3_catalogue_multiple_content">
                            <div className="step_3_catalogue_multiple_items">
                                <div className="step_3_catalogue_title">
                                    <h3>Does this catalogue have multiple service options?</h3>
                                    <a href="#" className="what_this_link">What's This?</a>
                                </div>
                                <p className="standard_product_step_3">Eg. Standard Production, Rush Service, Indent
                                    etc</p>
                            </div>
                            <div className="step_3_catalogue_multiple_items">
                                <label className="step_3_catalogue_multiple_items_label">
                                    <input type="radio" name="radio" value={1} onClick={this.setAdditionalFields}/>
                                    <span className="step_3_catalogue_multiple_items_label_checkmark"/>
                                    Yes
                                </label>
                                <label className="step_3_catalogue_multiple_items_label">
                                    <input type="radio" name="radio" value={2} onClick={this.setAdditionalFields}/>
                                    <span className="step_3_catalogue_multiple_items_label_checkmark"/>
                                    No
                                </label>
                            </div>
                        </div>
                    </div>)
                }
                {
                    showAdditionalFields && additionalField === 1 &&
                    (<div className="hoops_map_table step_3">
                        <table className="hoops_map_table_in_table">
                            <thead>
                            <tr>
                                <td><span>Map to fields in Hoops</span></td>
                                <td/>
                                <td><span>Fields in your file</span></td>
                                <td/>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.getServiceArray().map(service => service)
                            }
                            <tr>
                                <td/>
                                <td/>
                                <td/>
                                <td>
                                    <button onClick={this.addMoreService}>Add More</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>)
                }
                {
                    showAdditionalFields && additionalField === 2 &&
                    (
                        <div className="hoops_map_table step_3">
                            <div className="minimum_order_block">
                                <div className="minimum_order_block_content">
                                    <div className="minimum_order_block_title">
                                        <h3>Minimum Order Quantity</h3>
                                        <a href="#" className="what_this_link">What's This?</a>
                                    </div>
                                    <ImportedProperty propertyItem={{name: "min_order_quantity"}}
                                                      propertyOptions={importFileData.csv_headers}/>
                                </div>
                            </div>
                            {
                                this.getPriceBreakArray().map(item => item)
                            }
                            <div className="add_more_breaks">
                                <button onClick={this.addMorePriceBreaks}>Add More Price Breaks</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Pricing;