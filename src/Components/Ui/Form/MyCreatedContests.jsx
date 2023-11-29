import useAuth from "../../../Hooks/useAuth";
import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";

// delete tooltip
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContestTable from "./Table";
import Searching from "../../../Pages/Demo/Searching";

const MyCreatedContests = () => {
  const { user, loading } = useAuth();

  const { data, isLoading ,refetch} = useGetSecureData(
    `/contests/${user?.email}`,
    user?.email
  );

  if (isLoading) return <Spinner></Spinner>;

  return (
    <div>
      {
       data.length?
       <div>
        {/* <Tooltip sx={{color:'red'}} title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <ContestTable rows={data} refetch={refetch}></ContestTable>
      </div>: <Searching></Searching>

      }
      </div>
  );
};

export default MyCreatedContests;
