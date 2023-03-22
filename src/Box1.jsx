import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css"
import Check1 from './Check1';
import Stepper1 from './Stepper1';
import Check2 from './Check2';
import SwitchLabels from './Switch';
import ContinueBtn from './ContinueBtn';

export default function Box1() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{
                    bgcolor: 'white',
                    height: 'auto',
                    border: '0.1px solid grey',
                    borderRadius: '5px',
                    paddingTop: '20px',
                    marginTop: "15px"
                }}>
                    <div>
                    <Stepper1 />
                        <div style={{paddingLeft:"40px"}}>
                            <Check1/>
                            <Check2 />
                            <SwitchLabels />
                        </div>
                        <ContinueBtn/>
                    </div>
                </Box>
            </Container>
        </>
    );
}