import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../../../Components/Ui/Table/DataTable";
import { useState } from "react";

const ManageContest = () => {
  const [Reftech,setRefetch] =  useState(false)
  const { data, isLoading,refetch } = useGetOpenData(`contests`, Reftech);

 refetch()

  
  if (isLoading) return <Spinner></Spinner>;
  console.log(data)

  return (
    <div className="">
      
    </div>
  );
};

export default ManageContest;
