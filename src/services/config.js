import axios from "axios";

export const client = axios.create({
 baseURL: "http://localhost:9000/api",
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    console.log(error,"re")
    if (response?.data?.responseCode === 401) {
      return response;
    }
    if (response?.data?.responseCode === 400) {
      console.log(response, "reponsnsn");

      // console.log(message);
      return response;
    }
    return response;
    // console.log(message);

    return Promise.reject(error.response);
  }
);
