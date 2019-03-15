import React from 'react';
require('whatwg-fetch');
import getApiCredentials from './constants';

const CatalogImport = {};

CatalogImport.upload = (uploadData, uri) => {
    const reqUri = getApiCredentials.host + uri;
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
            //Fetched user register data is stored
            // console.log(data, 'data');
            return data;
        }).catch((err) => console.log(err, "error111"))
}

export default CatalogImport;