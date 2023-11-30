
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usePublicApi from '../../../Hooks/usePublicApi';
import { useParams } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner';
import useGetOpenData from '../../../Hooks/useGetOpenData';


const MySubmittedPaage = () => {


  
// const rows = [
//   {
//     _id: 'participantID1',
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     role: 'Participant'
//   },
//   {
//     _id: 'participantID2',
//     name: 'Jane Smith',
//     email: 'jane_smith@testdomain.com',
//     role: 'Admin'
//   },
//   // Add other participant objects as needed
// ];


const {id} = useParams()

console.log()
const {data:rows,isLoading} = useGetOpenData(`/contestParticipants/${id}`,'contest-participants')

if(isLoading) return <Spinner></Spinner>

console.log(rows)
  

  return (
    <div>
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
    </div>
  );
};

export default MySubmittedPaage;