import appConfig from '../../Helpers/appConfig'
import { authenticateUser } from '../../Helpers/Auth'

const LoginService = (data) => {
    const body = JSON.stringify(data)
    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: body
    };
    return fetch(appConfig.baseUrl + 'auth/login', requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export { LoginService };

// return fetch(appConfig.baseUrl + 'auth/login', requestOptions)
//         .then(response => authenticateUser(response.json()))
//         .catch(error => {
//             console.error('There was an error!', error);
//         });