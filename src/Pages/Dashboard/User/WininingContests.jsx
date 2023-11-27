import useAuth from "../../../Hooks/useAuth";
import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";

const WininingContests = () => {
  const { user } = useAuth();
  const { data, isLoading } = useGetSecureData(
    `/user/participatedContests/${user?.email}/winning`
  );
      if(isLoading) return <Spinner/>

      
  return (
    <div>
      <h1 className="text-8xl font-bold">{data?.length} Winning contests found</h1>
    </div>
  );
};

export default WininingContests;
