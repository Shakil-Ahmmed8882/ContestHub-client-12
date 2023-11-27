import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";
import UserTable from "./CreatorTable";


const AllContestCreators = () => {
      const {data,isLoading,refetch} =useGetSecureData('/allContestCreators')

      if(isLoading) return <Spinner></Spinner>

      console.log(data)


      return (
            <div>
            <UserTable refetch={refetch} userData={data}></UserTable>
            </div>
      );
};

export default AllContestCreators;