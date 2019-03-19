// import axios from "axios";

// export default axios.create({
//   baseURL: process.env.VUE_APP_API_ENDPOINT
// });

const BASE_URL = process.env.VUE_APP_API_ENDPOINT;
class Client {
  get(path) {
    return fetch(`${BASE_URL}${path}`);
  }
}
export default new Client();
