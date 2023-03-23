import React, { useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CSS from './Context';
 
const SwitchLabels = () => {
  const [cssHeader, setCssHeader] = useContext(CSS);
  const [cssFooter, setCssFooter] = useContext(CSS);
  return (
    <FormGroup style={{paddingTop:"15px",paddingBottom:"20px"}}>
      <FormControlLabel onClick={() => setCssHeader((cssHeader === "") ? "hidden" : "")} control={<Switch defaultChecked />} label="I want a Header" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Footer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Drawer Overlay Mode(requires Header or Footer)" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Left-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Right-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want Navigation tabs(require Header)" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Bottom Menu(requires Footer)" />
    </FormGroup>
  );
}

export default SwitchLabels