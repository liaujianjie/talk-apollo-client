import axios from "axios";

const setAxiosDefaults = () => {
  axios.defaults.baseURL = "http://localhost:3001/api";
  axios.defaults.timeout = 2500;
};

export default setAxiosDefaults;
