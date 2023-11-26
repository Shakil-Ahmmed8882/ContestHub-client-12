import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// delete icons
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ToasMessage } from "../../../Utils/ToastMessage";
import { ToastError } from "../../../Utils/ToastError";
import useSecureApi from "../../../Hooks/useSecureApi";

// update icon
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";

const columns = [
  //   { id: "_id", label: "", minWidth: 170

  { id: "contestName", label: "Contest Name", minWidth: 170 },
  { id: "image", label: "Image", minWidth: 170 },
  { id: "prizeMoney", label: "Prize Money", minWidth: 170 },
  { id: "taskSubmissionInstructions", label: "Instructions", minWidth: 170 },
  { id: "tags", label: "Tags", minWidth: 170 },
  { id: "deadline", label: "Deadline", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "participants", label: "Participants", minWidth: 170 },
  { id: "Action", label: "Action", minWidth: 170 },
];

const ContestTable = ({ rows,refetch }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const xiosSecure = useSecureApi();
  const goTo = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleContestDelete = async(id, status) => {
    if (status !== "pending") {
      return ToastError("Sorry! you cannot delete approved contest");
    }
    const res = await xiosSecure.delete(`contest/?id=${id}`)
    if(res.data.deletedCount > 0){
      refetch()
      ToasMessage('Deleted')
    }
  };

  const handleContestEdit = (id, status) => {
    if (status !== "pending") {
      return ToastError("Sorry! you cannot edit approved contest");
    }
      goTo(`/dashboard/edit/${id}`)
  };

  const handleSubmittedPage = (id, status) => {
    if (status !== "pending") {
      return ToastError("Sorry! you cannot edit approved contest");
    }
      goTo(`/dashboard/MySubmittedPage/${id}`)
  };

  return (
    <Paper sx={{ width: "95%", marginInline: "auto", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="left">
                      {column.id === "image" ? (
                        <img
                          src={row[column.id]}
                          alt="Contest Image"
                          width="100"
                          height="100"
                        />
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                  {/* update */}
                  <div className="flex gap-2">
                    
                  <Tooltip onClick={() => handleContestEdit(row?._id, row?.status)}  title="Edit">
                    <Button>Edit</Button>
                  </Tooltip>

                  {/* delete */}
                  <Tooltip
                    onClick={() => handleContestDelete(row?._id, row?.status)}
                    title="Delete"
                    sx={{ paddingRight: "30px" }}>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Submitted  */}
                  
                  <Tooltip onClick={() => handleSubmittedPage(row?._id, row?.status)}  title="Submitted page">
                    <Button>Eye</Button>
                  </Tooltip>


                  </div>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContestTable;
