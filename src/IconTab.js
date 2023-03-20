import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./App.css"
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

export default function IconTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className='center'
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      centered
    >
      <Tab  icon={<EmailIcon />} iconPosition="start" label="MAILS" />
      <Tab icon={<AccessAlarmsIcon />} iconPosition="start" label="ALARMS" />
      <Tab icon={<MovieCreationIcon />} iconPosition="start" label="MOVIES" />
    </Tabs>
  );
}