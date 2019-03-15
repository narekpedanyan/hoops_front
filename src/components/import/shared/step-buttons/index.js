import {moveNextStep, movePrevStep} from '../../../../store/actions/catalogue-actions';
import {NEXT_STEP, PREV_STEP} from '../../../../store/actions/action-types';
import {onUpload} from '../../../../service/catalog/fake.service';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class StepButtons extends Component{
    constructor(props){
        super(props);
        this.renderSkipButton = this.renderSkipButton.bind(this);
        this.renderNextButton = this.renderNextButton.bind(this);
        this.changeNextStep = this.changeNextStep.bind(this);
        this.changePrevStep = this.changePrevStep.bind(this);
    }

    componentDidMount(prevProps) {
        
    }

    upload() {
        console.log('Upload');
    }

    changePrevStep() {
        this.props.movePrevStep()
    }

    changeNextStep(){
        const {csv} = this.props.importCatalogFiles;
        if (csv === true) {
            if (this.props.importSteps.stepState === 0 && !this.props.importCatalogFiles.upload) {
                console.log('upload')
                this.props.onUpload(this.props.formData);
            }
            this.props.moveNextStep()
        }
    }

    renderSkipButton(param){
        if(param === 0 || param ===5){
            return(
                <button className='disabled' disabled>
                    <span>Skip</span>
                    <i className='material-icons'>skip_next</i>
                </button>
            )
        }else{
            return(
                <button>
                    <span>Skip</span>
                    <i className='material-icons'>skip_next</i>
                </button>
            )
        }
    }

    renderNextButton(param){
        if(param === 5){
            return(
                <button onClick={this.changeNextStep} className='next disabled' disabled>
                    <span>Next</span>
                    <i className='material-icons'>trending_flat</i>
                </button>
            )
        }else{
            return(
                <button onClick={this.changeNextStep} className='next'>
                    <span>Next</span>
                    <i className='material-icons'>trending_flat</i>
                </button>
            )
        }
    }

    render(){
        const stepData = this.props.importSteps;
        console.log('steprender')
        return(
            <div className='next-prev-control'>


                        <div className='left-side'>
                            <button onClick={this.changePrevStep} className={stepData['stepState'] === 0 ? 'disabled' : ''}>
                                <i className='material-icons'>trending_flat</i>
                                <span>Back</span>
                            </button>
                        </div>


                <div className='right-side'>
                    {
                        this.renderSkipButton(stepData['stepState'])
                    }
                    {
                        this.renderNextButton(stepData['stepState'])
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        importSteps: state.importStepsReducer,
        importCatalogFiles: state.importCatalogFiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpload: (formData) => {
            dispatch(onUpload(formData));
        },
        moveNextStep: () => {
            dispatch(moveNextStep)
        },
        movePrevStep: () => {
            dispatch(movePrevStep)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepButtons)
