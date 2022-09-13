import axios from 'axios';

class AuthenticationService {

  executeBasicAuthService(username, password) {
    return axios.get('http://localhost:8080/basicauth', {
      headers: {authorization: this.createBasicAuthToken(username, password)}
    })
  }

  executeJwtAuthService(username, password) {
    return axios.post('http://localhost:8080/authenticate', {
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
    sessionStorage.setItem('authenticatedUser', username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  registerSuccesfulLoginForJwt(username, token) {
    console.log('registerSuccesfulLoginForJwt')
    sessionStorage.setItem('authenticatedUser', username)
    this.setupAxiosInterceptors(this.createJwtToken(token))
  }

  createJwtToken(token) {
    return 'Bearer ' + token
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