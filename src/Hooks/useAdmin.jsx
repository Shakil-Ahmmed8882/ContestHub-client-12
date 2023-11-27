import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureApi from "./useSecureApi";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureApi();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    // queryKey: [user?.email, "isAdmin"],
    queryKey: ["isAdmin"],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/users/admin/${user.email}`);
      const res = await axiosSecure.get(`/users/admin/shakilahmmed8882@gmail.com`);
      // console.log(res.data);
      return res.data?.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
