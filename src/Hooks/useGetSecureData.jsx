import { useQuery } from "@tanstack/react-query";
import useSecureApi from "./useSecureApi";

const useGetSecureData = (endpoint, key) => {
  const xios = useSecureApi();
  // send the req and get data
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await xios.get(endpoint);
      return res.data;
    },
  });
};

export default useGetSecureData;
