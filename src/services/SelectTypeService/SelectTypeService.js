import appConfig from '../../Helpers/appConfig'

const SelectTypeService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "5fc7438c99e17f020480ac01",
            "criteria": "eq",
            "datatype": "ObjectId"
        }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'formdatas/filter', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export { SelectTypeService };