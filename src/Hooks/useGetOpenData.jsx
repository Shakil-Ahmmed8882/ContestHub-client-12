import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useGetOpenData = (endpoint, key) => {
// send the req and get data 
  const xios = usePublicApi();
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await xios.get(endpoint);
      return res.data;
    },
  });
};

export default useGetOpenData;
