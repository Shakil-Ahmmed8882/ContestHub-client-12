import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const DemoPaper = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function TabContents({contestItem}) {
//  console.log(Object.keys(item).join(','))
const {_id,contestName,image,description,prizeMoney,taskSubmissionInstructions,tags,deadline,status,creatorID,winnerID,type,participants} = contestItem 
  return (
    <Stack direction="row" spacing={2} >
      <DemoPaper square={false} >
            <img className='w-full h-40 object-cover' src={image}/>
            <h2>{contestName}</h2>
            <p><span>icon</span>Attempted:{participants?.length}</p>
            <p>{description}</p>
            <Link className='btn' to={`/contest/${_id}`} >Details</Link>
            </DemoPaper>

    </Stack>
  );
}
