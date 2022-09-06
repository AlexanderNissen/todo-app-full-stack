import axios from 'axios';

class AuthenticationService {

  registerSuccessfulLogin(username, password) {
    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
    this.setupAxiosInterceptors();
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

  setupAxiosInterceptors() {
    let username = 'username'
    let password = 'password'

    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
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