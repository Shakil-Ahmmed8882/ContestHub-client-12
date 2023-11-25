import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../Table/DataTable";

const ManageUser = () => {
  const { data, isLoading } = useGetOpenData(`contests`, "manageuser");

  if(isLoading) return <Spinner></Spinner>

  console.log(data)

  return (
    <div>
      <DataTable
      data={data}
      ></DataTable>
    </div>
  );
};

export default ManageUser;
