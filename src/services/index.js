import axios from "axios";

const axiosFactory = axios.create({
  baseURL: `https://dog.ceo/api`,
});

const dogAPI = {
  get: (url) => {
    return axiosFactory.get(url);
  },
  // More methods can be added if app evolves
};

export default dogAPI;
