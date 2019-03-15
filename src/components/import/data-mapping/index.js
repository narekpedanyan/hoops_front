import SelectDropdown from '../../../components/shared/select-dropdown';
import StepButtons from '../shared/step-buttons';
import VideoBtn from '../../shared/video-btn';
import AddVendor from '../shared/add-vendor';
import CatalogImport from '../../../core/import.actions';
import {setCsv, setZip} from '../../../store/actions/import-actions';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class UploadFiles extends Component{
    constructor(props){
        super(props)
        this.formData = new FormData();
        this.state = {
            csv: null,
            zip: null,
            selectValue: null,
            isUploaded: false
        }
    }
    onChange(type){
        return () => {
            let file1 = this.refs && this.refs.file1 && this.refs.file1.files[0],
                file2 = this.refs && this.refs.file2 && this.refs.file2.files[0];

            // console.log(type);
            if(file1 && type === "csv"){
                this.formData.append('file', file1)
                this.props.dispatch(setCsv(true));
            } else if(file2 && type === "zip"){
                this.formData.append('file', file2)
                this.props.dispatch(setZip(true));
            }
            // console.log(formData, "filefilefilefilefiel");
        }
    }

    setSelectValue(){
        // console.log(this.target.value, 'asd')
    }

    render(){
        return(
            <div className='upload-file-step step-1'>
                <div className='custom-container'>
                    <div className='heading-row'>
                        <h5 className='heading-text'>Upload file</h5>
                        <VideoBtn />
                    </div>
                    <div className='upload-body'>
                        <div className='field-control'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-7 col-lg-7 col-xl-7'>
                                    <div className='field-col'>
                                        <div className='action-info'>
                                            <span className='action-heading'>Select vendor</span>
                                            <span className='action-priority required'>Required</span>
                                            <a href='#' className='action-hint'>What's This?</a>
                                        </div>
                                        <div className='custom-field-row'>
                                            <SelectDropdown />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                                    <div className='cloud-down-col'>
                                        <div className='download-row'>
                                            <span className='down-link'>
                                                <i className="material-icons">cloud_download</i>
                                                <a href="../../../../assets/resources/CSV/Catalog-Import-Template-Complete.csv" download>
                                                    Download the basic template
                                                </a>
                                            </span>
                                            <span className='description'>Great for simple products like apparel.</span>
                                        </div>
                                        <div className='download-row'>
                                            <span className='down-link'>
                                                <i className="material-icons">cloud_download</i>
                                                <a href="../../../../assets/resources/CSV/Catalog-Import-Template-Complete.csv" download>
                                                    Download the complete template
                                                </a>
                                            </span>
                                            <span className='description'>Great for complex products like promotional products.</span>
                                        </div>
                                        <div className='download-row'>
                                            <span className='down-link'>
                                                <i className="material-icons">cloud_download</i>
                                                <a href="../../../../assets/resources/CSV/Catalog-Import%20Explanations-and%20-Examples.xlsx" download>
                                                    Download field explanations & example products
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className='drag-section'>
                            <div className='action-info'>
                                <span className='action-heading'>Upload product csv</span>
                                <span className='action-priority required'>Required</span>
                                <a href='#' className='action-hint'>What's This?</a>
                            </div>
                            <div className='drag-arrow'>
                                <div className='arrow-info-data'>
                                    <div className='drag-icon-wrap'>
                                        <i className="material-icons">cloud_download</i>
                                    </div>
                                    <div className='drag-description'>
                                        <p>Drag and drop</p>
                                        <p>Your file here, or <u>click to locate file</u></p>
                                    </div>
                                </div>
                                <input type='file' onChange={this.onChange("csv")} ref="file1" id="csv"/>
                            </div>
                        </div>
                        <div  className='drag-section'>
                            <div className='action-info'>
                                <span className='action-heading'>Upload product images (.zip file) </span>
                                <span className='action-priority recommended'>Recommended</span>
                                <a href='#' className='action-hint'>What's This?</a>
                            </div>
                            <div className='drag-arrow'>
                                <div className='arrow-info-data'>
                                    <div className='drag-icon-wrap'>
                                        <i className="material-icons">cloud_download</i>
                                    </div>
                                    <div className='drag-description'>
                                        <p>Drag and drop</p>
                                        <p>Your file here, or <u>click to locate file</u></p>
                                    </div>
                                </div>
                                <input type='file' onChange={this.onChange("zip")} ref="file2" id="zip"/>
                            </div>
                        </div>
                        <div className="next-prev-control">
                        {/*<div className="right-side">*/}
                                {/*<button className="next">*/}
                                    {/*<span>Next</span>*/}
                                    {/*<i className="material-icons">trending_flat</i>*/}
                                {/*</button>*/}
                            {/*</div>*/}

                        </div>
                        <StepButtons formData={this.formData}/>
                    </div>
                </div>
                {this.props.selectVendor.addNewVendor && <AddVendor />}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        selectVendor: state.selectVendor,
        importSteps: state.importStepsReducer,
        importFiles: state.importCatalogFiles
    }
}

export default connect(mapStateToProps)(UploadFiles)
