import {SELECT_CSV, SELECT_ZIP, SEND_STEP_ONE_DATA, SET_IMPORT_DATA, SET_PROPERTY} from "../actions/action-types";

const initialState = {
    csv: false,
    zip: false,
    upload: false,
    importData: null,
    properties: []
};

const importCatalogFiles = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CSV:
            return{
                ...state,
                csv: action.payload
            };
        case SELECT_ZIP:
            return{
                ...state,
                zip: action.payload
            };
        case SEND_STEP_ONE_DATA:
            return {
                ...state,
                upload: action.payload
            }
        case SET_IMPORT_DATA:
            return {
                ...state,
                importData: action.payload
            };
        case SET_PROPERTY:
            const properties = state.properties.filter(item => item.name !== action.payload.name);
            properties.push(action.payload);
            return {
                ...state,
                properties
            };
        default:
            return state;
    }
};

export default importCatalogFiles;