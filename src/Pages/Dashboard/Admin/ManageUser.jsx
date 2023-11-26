import useGetOpenData from "../../../Hooks/useGetOpenData";
import Spinner from "../../../Shared/Spinner";
import DataTable from "../../../Components/Ui/Table/DataTable";

const ManageUser = () => {
  const { data, isLoading } = useGetOpenData(`users`, "manageusers");

  console.log(data)

  if (isLoading) return <Spinner></Spinner>;

  return (
    <div>
      <DataTable data={data}></DataTable>
    </div>
  );
};

export default ManageUser;
