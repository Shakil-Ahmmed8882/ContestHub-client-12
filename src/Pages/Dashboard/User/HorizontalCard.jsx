import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useSecureApi from '../../../Hooks/useSecureApi';
import e from 'cors';
import useAuth from '../../../Hooks/useAuth';
import { ToasMessage } from '../../../Utils/ToastMessage';

export default function HorizontalCard({ contest }) {
  const theme = useTheme();
  const xiosSecure = useSecureApi()
  const {user} = useAuth()
  const handleParticipate = async(_id) => {
       const res = await xiosSecure.post('participateContest',{id:_id,userEmail:user?.email})
       if(res.data.modifiedCount > 0){
            ToasMessage(`Participated on ${contest.contestName}`)
       }
  }


  return (
    <Card sx={{ display: 'flex' }}>
      <Box className='flex' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {contest.contestName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Description: {contest.description}
          </Typography>
          {/* Display other properties as needed */}
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
          {/* Add your IconButton components here */}
        </Box>
        <div className="w-1/3 sm:mt-0 sm:ml-3 mb-3">
                <button 
                  onClick={()=> handleParticipate(contest._id)}
                  href=""
                  className="text-primary">
                  Participate
                </button>
              </div>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={contest.image} // Use contest image from props
        alt={`Cover for ${contest.contestName}`}
      />
    </Card>
  );
}
