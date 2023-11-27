import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useSecureApi from '../../../Hooks/useSecureApi';
import { ToasMessage } from '../../../Utils/ToastMessage';
import { Rating } from '@mui/material';
import { ToastError } from '../../../Utils/ToastError';




export default function UserTable({userData,refetch}) {

      
      const xiosSecure = useSecureApi()
      const handleDeletecreator = async(_id) => {

      const res = await xiosSecure.delete(`user/?id=${_id}`)
      if(res.data.deletedCount > 0){
        refetch()
        ToasMessage('Deleted')
      }
}

const handleRatingChange = async (event, newValue,email) => {

            event.preventDefault()
            const res = await xiosSecure.patch(`bestContestCreator/${email}`, {
                  newValue: newValue 
                });

            if(res.data.modifiedCount > 0){
                  ToasMessage('Rating updated')
            } else{
                  ToastError('Somethng went wrong')
            }
    };
  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>Creator ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            {/* Add other columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <div className='flex gap-4 items-center'>
              <Rating name="customized-icons" defaultValue={user.bestCreatorRating} onChange={(e)=>handleRatingChange(e,e.target.value,user?.email)} />
              <button onClick={(e)=>handleDeletecreator(user._id)} className='btn bg-red-500 hover:bg-red-600 text-white'>delete</button>

              </div>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}