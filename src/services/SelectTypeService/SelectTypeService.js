import appConfig from '../../Helpers/appConfig'

const SelectTypeService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "5e426741d466f1115c2e7d50",
            "criteria": "eq",
            "datatype": "ObjectId"
        },
        { "searchfield": "addedby", "searchvalue": "5fbf8f809c28220330088e84", "criteria": "eq" },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }
        ]
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