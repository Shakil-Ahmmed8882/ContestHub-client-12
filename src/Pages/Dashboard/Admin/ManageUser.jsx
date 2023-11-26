import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../../../Components/Ui/Table/DataTable";
import { useState } from "react";

const ManageUser = () => {
  const [isDelete,setIsDelete] =  useState(false)
  const { data, isLoading,refetch } = useGetOpenData(`users`, isDelete);

 refetch()

  
  if (isLoading) return <Spinner></Spinner>;

  return (
    <div className="">
      <DataTable setIsDelete={setIsDelete} isDelete={isDelete} data={data}></DataTable>
    </div>
  );
};

export default ManageUser;
