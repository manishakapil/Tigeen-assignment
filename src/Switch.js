import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup style={{paddingTop:"15px",paddingBottom:"20px"}}>
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Header" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Footer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Drawer Overlay Mode(requires Header or Footer)" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Left-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Right-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want Navigation tabs(require Header)" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Bottom Menu(requires Footer)" />
    </FormGroup>
  );
}