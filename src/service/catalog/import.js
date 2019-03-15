import {sendStepOneData} from '../../store/actions/import-actions';
require('whatwg-fetch');
import getApiCredentials, {catalogImportUri} from '../../core/constants';

export const onUpload = (uploadData) => {
    return dispatch => {
        const reqUri = getApiCredentials.host + catalogImportUri;
        const userToken = localStorage.getItem("userToken");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                // 'Authorization': "Bearer " + userToken
            },
            body: uploadData
        };
        const reqInstance = new Request(reqUri, requestOptions);
        return fetch(reqInstance)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
            })
            .then(data => {                
                dispatch(sendStepOneData(true));
                return data;
            }).catch((err) => console.log(err, "error111"))
    }
}