import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useGetOpenData = (endpoint,key) => {
      
      const xios = usePublicApi()
      const {data} = useQuery({
            queryKey:[key],
            queryFn:async () => {
                  const res = await xios.get('users')
                  return res.data
            }
      })

      return [data]
};

export default useGetOpenData;