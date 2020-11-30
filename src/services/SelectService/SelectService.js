import appConfig from '../../Helpers/appConfig'

const SelectService = (type) => {
    console.log('type', type)
    const body =
    {
        "search": [
            { "searchfield": "marking.data.facility-type", "searchvalue": type, "criteria": "eq", "datatype": "objectid" }
        ]
    }
    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'facilities/filter', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export { SelectService };