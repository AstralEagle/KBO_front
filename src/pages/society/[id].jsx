import React, {useState} from 'react';
import {Box, Divider, Tab, Tabs, Typography, useTheme} from "@mui/material";
import {useParams} from "react-router-dom";

import data from "../../assets/data.json"
import {Email, Language, LocationOn, Phone, Print} from "@mui/icons-material";
import GlobalView from "../../component/detail/GlobalView.jsx";
import InfoView from "../../component/detail/InfoView.jsx";
import FileView from "../../component/detail/FileView.jsx";
import useDataGetSociety from "../../hook/useDataGetSociety.jsx";

function Id(props) {
    const {id} = useParams();

    const realId = [
        id.slice(0, 4), // "0257"
        id.slice(4, 7), // "883"
        id.slice(7)     // "408"
    ].join(".");

    const {society} = useDataGetSociety(realId)

    if (society)
        return (
            <Box className="flex-1 flex flex-col gap-[60px] py-[40px] px-[80px]">
                <Box className="flex">
                    <GlobalView society={society} id={realId}/>
                    <InfoView society={society}/>
                </Box>
                <FileView society={society}/>
            </Box>
        );
}

export default Id;