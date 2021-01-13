import appConfig from '../../Helpers/appConfig'

const MyServiceOngoingService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "pending",
            "criteria": "eq",
            "datatype": "text"
        },
        {
            "searchfield": "attendee",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "Objectid"
        }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };
    return fetch(appConfig.baseUrl + 'appointments/filter', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

const MyServiceLastService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "paid",
            "criteria": "eq",
            "datatype": "text"
        },
        {
            "searchfield": "attendee",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "Objectid"
        }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };
    return fetch(appConfig.baseUrl + 'appointments/filter', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export { MyServiceOngoingService, MyServiceLastService };