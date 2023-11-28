import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatars({img}) {
      return (
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
      );
    }