import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Check2() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" >Present Color</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="blue"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
      </RadioGroup>
    </FormControl>
  );
}