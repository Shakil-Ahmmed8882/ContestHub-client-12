import useAuth from "../../../Hooks/useAuth";
import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";

// delete tooltip
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContestTable from "./Table";

const MyCreatedContests = () => {
  const { user, loading } = useAuth();

  const { data, isLoading } = useGetSecureData(
    `/contests/${user?.email}`,
    user?.email
  );

  if (isLoading) return <Spinner></Spinner>;

  console.log(data)

  return (
    <div>
      {data?.length}
      {/* <Tooltip sx={{color:'red'}} title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip> */}
      <ContestTable rows={data}></ContestTable>
    </div>
  );
};

export default MyCreatedContests;
