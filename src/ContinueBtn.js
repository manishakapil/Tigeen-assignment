import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ContinueBtn() {
  return (
    <Stack spacing={2} direction="row" style={{paddingLeft:"40px", borderTop:"0.1px solid grey"}}>
      <Button variant="contained" style={{marginTop:"20px",marginBottom:"20px"}}>CONTINUE</Button>
    </Stack>
  );
}