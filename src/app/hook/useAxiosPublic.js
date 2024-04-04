import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://portfolio-backend-30mp.onrender.com'
    
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;