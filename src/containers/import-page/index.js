import GlobalStep from "../../components/import/shared/import-global-step";
import ImportStateChart from "../../components/import/shared/state-chart";
import AdditionalCoast from '../../components/import/additional-cost';
import StepButtons from "../../components/import/shared/step-buttons";
import PreviewImport from '../../components/import/preview-import';
import ShippingInfo from '../../components/import/shipping-info';
import UploadFiles from '../../components/import/data-mapping';
import ProductInfo from '../../components/import/product-info';
import Pricing from '../../components/import/pricing';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class ImportPage extends Component {
    render() {
        const stepData = this.props.importStep;
        return (<div className='import-page-wrapper'>
            <div className='shared-scroll-view'>
                {stepData.stepState === 0 ? <UploadFiles /> : ''}
                {stepData.stepState !== 0 ? (
                    <div className='step-shared-wrapper'>
                        <div className='main-header-control-wrapper'>
                            <div className='shared-header-control'>
                                <StepButtons />
                                <ImportStateChart />
                            </div>
                            <div className='user-status-info'>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-8 col-lg-8 col-xl-8'>
                                        <div className='info-wrapper'>
                                            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 info-item'>
                                                 <div className='text'>Vendor</div>
                                                 <div className='text'>Product csv files</div>
                                            </div>
                                            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 info-item'>
                                                <div className='text'>
                                                    <i className='material-icons info-person'>person</i>
                                                </div>
                                                <div className='text csv-upload-name'>
                                                    <span>CSV</span>
                                                    <span>ex-8.csv</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                        <div className='info-to-import'>
                                            <button className='to-import-btn'>
                                                <i className='material-icons'>edit</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {stepData.stepState === 1 ? <ProductInfo importFileData={this.props.importFileData.importData} /> : null}
                        {stepData.stepState === 2 ? <ShippingInfo  importFileData={this.props.importFileData.importData}/> : null}
                        {stepData.stepState === 3 ? <Pricing importFileData={this.props.importFileData.importData} /> : null}
                        {stepData.stepState === 4 ? <AdditionalCoast  importFileData={this.props.importFileData.importData} /> : null}
                        {stepData.stepState === 5 ? <PreviewImport  importFileData={this.props.importFileData.importData} /> : null}
                        <StepButtons />
                    </div>
                ) : null }
            </div>
            <GlobalStep />
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        importStep: state.importStepsReducer,
        importFileData: state.importCatalogFiles
    };
}

export default connect(mapStateToProps)(ImportPage);