import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Check1() {
 
  function position_left() {
    alert("position left");
  }
  function position_right() {
    alert("position right");
  }
  function position_center() {
    alert("position center");
  }
  function position_disable() {
    alert("position disable");
  }
  return (
    <FormControl style={{ paddingTop: '20px' }}>
      <FormLabel id="demo-row-radio-buttons-group-label" >I want a company logo.</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="left"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={position_left} value="left" control={<Radio />} label="Left" />
        <FormControlLabel onClick={position_right} value="right" control={<Radio />} label="Right" />
        <FormControlLabel onClick={position_center} value="center" control={<Radio />} label="Center" />
        <FormControlLabel onClick={position_disable} value="disable" control={<Radio />} label="Disable" />
      </RadioGroup>
    </FormControl>
  );
}