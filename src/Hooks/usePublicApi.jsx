import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://contest-craft-server.vercel.app",
  
});

const usePublicApi = () => {
  return axiosPublic;
};

export default usePublicApi;
