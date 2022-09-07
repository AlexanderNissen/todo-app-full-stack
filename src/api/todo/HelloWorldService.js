import axios from 'axios';
import AuthenticationService from '../../components/todo/AuthenticationService';

class HelloWorldService {
  
  executeHelloWorldService() {
    // console.log('executed service');

    // axios.get() returns an AxiosResponse
    return axios.get('http://localhost:8080/hello-world')
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldPathVariableService(name) {
    // let username = 'username'
    // let password = 'password'

    // Base64 encoding
    // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
    // , 
    //   {
    //     headers: {
    //       authorization: basicAuthHeader
    //     }
    //   }
    )
  }
}

export default new HelloWorldService();