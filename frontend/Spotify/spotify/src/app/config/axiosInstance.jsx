import axios from "axios";
import { useDispatch } from "react-redux";

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
            
    }
);