import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CSS from './Context';

export default function Check2() {
  const [cssColor, setCssColor] = useContext(CSS);
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" >Present Color</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="blue"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={() => setCssColor('#1976d2')} value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel onClick={() => setCssColor('#ff0000')} value="red" control={<Radio />} label="Red" />
      </RadioGroup>
    </FormControl>
  );
}