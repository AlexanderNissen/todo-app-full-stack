import axios from 'axios';

class AuthenticationService {

  executeBasicAuthService(username, password) {
    return axios.get('http://localhost:8080/basicauth', {
      headers: {authorization: this.createBasicAuthToken(username, password)}
    })
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password)
  }

  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password)

    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout(username) {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user===null) {
      return false;
    }
    return true;
  }

  getLoggedInUsername() {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user === null) return '';
    return user
  }

  setupAxiosInterceptors(basicAuthHeader) {
    console.log(basicAuthHeader)

    axios.interceptors.request.use(
      // config is the configuration of the request. The interceptors job is to add the auth header to the request
      (config) => {
        if (this.isUserLoggedIn()) {
          config.headers.authorization = basicAuthHeader
        }

        return config
      }
    )
  }
}

export default new AuthenticationService();