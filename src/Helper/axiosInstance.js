import axios from "axios";

const axiosInstanse = axios.create(); //Create a new instance of axios

axiosInstanse.defaults.baseURL = process.env.REACT_APP_BACKEND_URL; //Set the base URL


axiosInstanse.defaults.withCredentials = true //Allow cookies to be sent with requests

export default axiosInstanse;