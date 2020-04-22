import axios from 'axios';
const service = axios.create({
  timeout: 50000
})

service.interceptors.response.use((response: any) => {
  if(response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, (error: any) => {
  if(error.response.status) {
    switch(error.response.status) {
      case 401: 
        break;
      case 403:
        break;
    }
  }
})

export default service;