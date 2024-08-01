import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import SwitchInput from "../../input/SwitchInput.jsx";
import SubmitInput from "../../input/SubmitInput.jsx";
import {useDispatch, useSelector} from "react-redux";
import {defineMode} from "../../../stores/reducers/themeReducer.js";

const firstName = "Arthur"
const lastName = "Dias"


function Profil(props) {
    const dispatch = useDispatch()
    const mode = useSelector((state) => state.darkMode.value)

    const changeMode = (value) => {
        // console.log(value)
        dispatch(defineMode(value))
    }

    useEffect(() => {
        console.log(mode)
    }, [mode]);


    return (
        <Box className="flex flex-col items-center p-[20px] gap-[20px]">
            <Typography fontSize={24}>Hello {firstName}, {lastName}</Typography>
            <Box className="flex flex-col">
                <SwitchInput label={"Dark Mode"} value={mode} setValue={changeMode}/>
                {/*<SwitchInput label={"Layout Grid"}/>*/}
            </Box>
            <SubmitInput value="Logout" onClick={() => {
                console.log("Logout")}}/>
        </Box>
    );
}

export default Profil;