import useGetOpenData from "../Hooks/useGetOpenData";
import Spinner from "../Shared/Spinner";


const BestCreators = () => {
      const {data,isLoading,refetch} = useGetOpenData('/allContestCreators')

      if(isLoading) return <Spinner/>

      console.log(data)
      return (
            <div>
                Best Creator  
            </div>
      );
};

export default BestCreators;