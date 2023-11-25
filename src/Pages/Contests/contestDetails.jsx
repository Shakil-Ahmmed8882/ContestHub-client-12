import { useParams } from "react-router-dom";
import useGetOpenData from "../../Hooks/useGetOpenData";


const ContestDetails = () => {
      const {id} = useParams()
      const contest = useGetOpenData(`contest?id=${id}`)
      return (
            <div>
                  
            </div>
      );
};

export default ContestDetails;