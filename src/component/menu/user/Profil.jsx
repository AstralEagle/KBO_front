import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import SwitchInput from "../../input/SwitchInput.jsx";
import SubmitInput from "../../input/SubmitInput.jsx";
import {useDispatch, useSelector} from "react-redux";
import {defineMode} from "../../../stores/reducers/themeReducer.js";

function Profil({user, logout}) {
    const dispatch = useDispatch()
    const mode = useSelector((state) => state.darkMode.value)

    const changeMode = (value) => {
        dispatch(defineMode(value))
    }


    return (
        <Box className="flex flex-col items-center p-[20px] gap-[20px]">
            <Typography fontSize={24}>Hello {user?.firstName || "Arthur"}, {user?.lastName || "DIAS"}</Typography>
            <Box className="flex flex-col">
                <SwitchInput label={"Dark Mode"} value={mode} setValue={changeMode}/>
            </Box>
            <SubmitInput value="Logout" onClick={logout}/>
        </Box>
    );
}

export default Profil;