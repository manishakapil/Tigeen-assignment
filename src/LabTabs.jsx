import React from 'react'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./App.css"
import Box1 from './Box1';

export default function LabTabs() {
  const [value, setValue] = React.useState(0)
  const handleTabs = (e, val) => {
    console.warn(val)
    setValue(val)
  }

  return (
    <>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="TAB ONE" />
          <Tab label="TAB TWO" />
          <Tab label="TAB THREE" />
        </Tabs>
      </AppBar>
      <TabPanel classname="center" value={value} index={0}>
        <>
          <Box1 />
        </>
      </TabPanel>
      <TabPanel value={value} index={1} centered>Item two details</TabPanel>
      <TabPanel value={value} index={2}>Item three details</TabPanel>
    </>
  )
}

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <>
      {
        value === index && (
          <h1>{children}</h1>
        )
      }
    </>
  )
}

