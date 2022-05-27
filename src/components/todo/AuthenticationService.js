class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout(username) {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export default new AuthenticationService();