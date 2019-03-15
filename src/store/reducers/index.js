import { reducer as formReducer } from 'redux-form';
import importStepsReducer from "./import-steps";
import selectVendor from './select.vendor';
import catalogueReducer from './catalogue';
import userInfoReducer from './userInfo';
import importCatalogFiles from './import';
import {combineReducers} from 'redux';
import playVideo from './video.play';
import appReducer from './app';

export default combineReducers({
    catalogueReducer,
    userInfoReducer,
    appReducer,
    importStepsReducer,
    selectVendor,
    form: formReducer,
    importCatalogFiles,
    playVideo
});