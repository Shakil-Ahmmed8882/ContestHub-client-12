import Thead from "./THead";
import TRow from "./TRow";

const DataTable = ({setRefetch,data,Refetch}) => {
  
  
  return (
    <div>
      <table className="  mx-auto divide-y divide-gray-200 w-full">
         <Thead></Thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {
                  data?.map(item => <TRow key={item._id} Refetch={Refetch} setRefetch={setRefetch} tItem={item}></TRow> )
            }
      
          {/* More rows... */}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
