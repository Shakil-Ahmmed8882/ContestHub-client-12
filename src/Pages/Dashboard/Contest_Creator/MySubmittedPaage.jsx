import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, role) {
  return { name, email, role };
}

const participants = [
  {
    _id: 'participantID1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Participant'
  },
  {
    _id: 'participantID2',
    name: 'Jane Smith',
    email: 'jane_smith@testdomain.com',
    role: 'Admin'
  },
  // Add other participant objects as needed
];

const rows = participants.map(participant => {
  return createData(participant.name, participant.email, participant.role);
});

export default function ParticipantTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="participant table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}