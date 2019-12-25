import axios from "axios";

const API = axios.create({
  baseURL: `https://juanprimal-tasks-api.herokuapp.com/`
});

export default API;
