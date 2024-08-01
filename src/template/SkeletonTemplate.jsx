import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {Box, Button, IconButton, Menu, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {Person} from '@mui/icons-material';
import ProfilInput from "../component/input/ProfilInput.jsx";
import Profil from "../component/menu/user/Profil.jsx";

function SkeletonTemplate() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box className="w-[100vw] h-[100vh] flex flex-col overflow-hidden"
             sx={{bgcolor: 'background.default', "& > .pages": {flex: 1}}}>
            <Box className="w-[100vw] h-[60px] flex justify-between items-center px-[40px]"
                 sx={{bgcolor: "background_header.default"}}>
                <Typography color="secondary">Nom de l'App</Typography>
                <ProfilInput onClick={handleClick}/>
            </Box>
            {/*<Button variant="contained" color="primary" onClick={() => dispatch(changeMode())}>
                    Change Mode
                </Button>*/}
            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Profil/>
            </Menu>
            <Outlet/>
        </Box>
    );
}

export default SkeletonTemplate;