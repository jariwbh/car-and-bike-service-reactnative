import appConfig from '../../Helpers/appConfig'

const userid = '5fbf8f809c28220330088e84'

const UserService = () => {

    const requestOptions = {
        method: 'GET',
        headers: appConfig.headers,
    };

    return fetch(appConfig.baseUrl + 'users/' + userid, requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export { UserService };