import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../../../Components/Ui/Table/DataTable";
import { useState } from "react";

const ManageUser = () => {
  const [Reftech,setRefetch] =  useState(false)
  const { data, isLoading,refetch } = useGetOpenData(`users`, Reftech);

 refetch()

  
  if (isLoading) return <Spinner></Spinner>;

  return (
    <div className="">
      <DataTable setRefetch={setRefetch} Refetch={Reftech} data={data}></DataTable>
    </div>
  );
};

export default ManageUser;
