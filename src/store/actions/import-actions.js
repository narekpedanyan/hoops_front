import {SELECT_CSV, SELECT_ZIP, SEND_STEP_ONE_DATA, SET_IMPORT_DATA, SET_PROPERTY} from "./action-types";


export const setCsv = (payload) => {
    return {
        type: SELECT_CSV,
        payload
    };
};

export const setZip = (payload) => {
    return {
        type: SELECT_ZIP,
        payload
    }
};

export const sendStepOneData = (payload) => {
    return {
        type: SEND_STEP_ONE_DATA,
        payload
    }
};

export const setCatalogImportData = (payload) => {
    return {
        type: SET_IMPORT_DATA,
        payload
    }
};

export const setImportedProperty = (payload) => {
    return {
        type: SET_PROPERTY,
        payload
    }
};