import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './App.css';
import DrawerHeader from './DrawerHeader';
import DrawerHeaderRight from './DrawerHeaderRight';

const Header = () => {
    return (
        <>
            <Box>
                <AppBar position='static'>
                        <Row>
                            <Col style={{ margin: "auto", textAlign: "center"}}>
                            <DrawerHeader/>
                            </Col>
                            <Col xs={10} md={10}>
                                <Typography component="div" className='header-logo' sx={{ flexGrow: 0 }} >
                                    <img src="../images/logo.png" alt="logo" />
                                </Typography>
                            </Col>
                            <Col style={{ margin: "auto", textAlign: "center" }}>
                              <DrawerHeaderRight/>
                            </Col>
                        </Row>
                   
                </AppBar>
            </Box>
        </>
    )
}

export default Header