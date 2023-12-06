import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../../../Components/Ui/Table/DataTable";
import { useState } from "react";
import Thead from "./Thead";
import TRow from "./Trow";

const ManageContest = () => {
  const [Reftech, setRefetch] = useState(false);
  const { data, isLoading, refetch } = useGetOpenData(`contests`, Reftech);

  refetch();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <table className=" bg-indigo-50 grid  divide-y divide-gray-200 ">
      <Thead></Thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data?.map((item) => (
          <TRow
            key={item._id}
            Refetch={Reftech}
            setRefetch={setRefetch}
            tItem={item}></TRow>
        ))}

        {/* More rows... */}
      </tbody>
    </table>
  );
};

export default ManageContest;
