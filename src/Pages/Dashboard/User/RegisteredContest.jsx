import useAuth from "../../../Hooks/useAuth";
import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";
import HorizontalCard from "./HorizontalCard";

const RegisteredContest = () => {
  const {user} = useAuth()
  const {data,isLoading} = useGetSecureData(`/user/participatedContests/${user?.email}/''`)

  if(isLoading) return <Spinner/>
  const {attemptedContests} = data

  return (
    <div className="grid gap-8 md:grid-cols-2 mx-8">
      {
        attemptedContests?.map(AtmContest => <HorizontalCard key={AtmContest._id} contest={AtmContest}> </HorizontalCard>)
      }
      
    </div>
  );
};

export default RegisteredContest;