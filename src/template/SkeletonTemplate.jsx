import React, {useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Box, Typography, Popover} from "@mui/material";
import ProfilInput from "../component/input/ProfilInput.jsx";
import Profil from "../component/menu/user/Profil.jsx";
import Login from "../component/menu/user/Login.jsx";
import useDataGetUser from "../hook/useDataGetUser.jsx";

const isConnected = false

function SkeletonTemplate() {
    const navigate = useNavigate()

    const {user,login,signup} = useDataGetUser()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const goHome = () => {
        navigate("/")
    }


    return (
        <Box className="w-[100vw] h-[100vh] flex flex-col overflow-hidden"
             sx={{bgcolor: 'background.default', "& > .pages": {flex: 1}}}>
            <Box className="w-[100vw] h-[60px] flex justify-between items-center px-[40px]"
                 sx={{bgcolor: "background_header.default"}}>
                <Typography color="secondary" onClick={goHome} fontSize={36} fontWeight={800} className="cursor-pointer">Nom de l'App</Typography>
                <ProfilInput onClick={handleClick}/>
            </Box>
            <Popover
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
                {
                    user == null ?
                    <Profil user={user}/>
                     :
                     <Login login={login} signup={signup}/>
                }
            </Popover>
            <Outlet/>
        </Box>
    );
}

export default SkeletonTemplate;