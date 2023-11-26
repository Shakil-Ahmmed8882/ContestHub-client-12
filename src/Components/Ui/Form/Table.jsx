import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  
  { id: 'contestName', label: 'Contest Name', minWidth: 170 },
  { id: 'image', label: 'Image', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'prizeMoney', label: 'Prize Money', minWidth: 170 },
  { id: 'taskSubmissionInstructions', label: 'Submission Instructions', minWidth: 170 },
  { id: 'tags', label: 'Tags', minWidth: 170 },
  { id: 'deadline', label: 'Deadline', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'creatorID', label: 'Creator ID', minWidth: 170 },
  { id: 'winnerID', label: 'Winner ID', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'participants', label: 'Participants', minWidth: 170 },
];

const ContestTable = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
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
                      {row[column.id]}
                    </TableCell>
                  ))}
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