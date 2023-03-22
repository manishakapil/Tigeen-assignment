import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CSS from './Context';

export default function Check1() {
  const [css, setCss] = useContext(CSS);

  return (
    <>
    <FormControl style={{ paddingTop: '20px' }}>
      <FormLabel id="demo-row-radio-buttons-group-label" >I want a company logo.</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="left"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={() => setCss('left')} value="left" control={<Radio />} label="Left" />
        <FormControlLabel onClick={() => setCss('right')} value="right" control={<Radio />} label="Right" />
        <FormControlLabel onClick={() => setCss('center')} value="center" control={<Radio />} label="Center" />
        <FormControlLabel onClick={() => setCss('disable')} value="disable" control={<Radio />} label="Disable" />
      </RadioGroup>
    </FormControl>
   
    </>
  );
}

