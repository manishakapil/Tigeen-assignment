import React,{useContext,} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './App.css';
import DrawerHeader from './DrawerHeader';
import DrawerHeaderRight from './DrawerHeaderRight';
import CSS from './Context';

const Header = () => {
    const [css, setCss] = useContext(CSS);
    const [cssColor, setCssColor] = useContext(CSS);
    const [cssHeader, setCssHeader] = useContext(CSS);
    var condition = cssHeader;
    if(condition === "hidden"){
        condition = ""
    } else if(condition === ""){
        condition = "hidden"
    }
    return (
        <>
            <Box style={{ backgroundColor: cssColor, visibility: condition}}>
                <AppBar style={{ backgroundColor: cssColor}} position='static'>
                    <Row>
                        <Col style={{ margin: "auto", textAlign: "center" }}>
                            <DrawerHeader />
                        </Col>
                        <Col style={{ textAlign: css }} xs={10} md={10}>
                            <Typography component="div" className='header-logo' sx={{ flexGrow: 0 }} >
                                <img src="../images/logo.png" alt="logo" />
                            </Typography>
                        </Col>
                        <Col style={{ margin: "auto", textAlign: "center" }}>
                            <DrawerHeaderRight />
                        </Col>
                    </Row>

                </AppBar>
            </Box>
        </>
    )
}

export default Header