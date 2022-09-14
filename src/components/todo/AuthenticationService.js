import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser' // Available to other modules

class AuthenticationService {

  executeBasicAuthService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: {authorization: this.createBasicAuthToken(username, password)}
    })
  }

  executeJwtAuthService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    })
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password)
  }

  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password)

    console.log('registerSuccessfulLogin');
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  registerSuccesfulLoginForJwt(username, token) {
    console.log('registerSuccesfulLoginForJwt')
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    this.setupAxiosInterceptors(this.createJwtToken(token))
  }

  createJwtToken(token) {
    return 'Bearer ' + token
  }

  logout(username) {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user===null) {
      return false;
    }
    return true;
  }

  getLoggedInUsername() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return '';
    return user
  }

  setupAxiosInterceptors(token) {
    console.log(token)

    axios.interceptors.request.use(
      // config is the configuration of the request. The interceptors job is to add the auth header to the request
      (config) => {
        if (this.isUserLoggedIn()) {
          config.headers.authorization = token
        }

        return config
      }
    )
  }
}

export default new AuthenticationService();