import React, {useState} from 'react';
import {Box, Divider, Tab, Tabs, Typography, useTheme} from "@mui/material";
import {Description} from "@mui/icons-material";
import PDF from "../../assets/PDF.svg"

function InfoView({society}) {
    const theme = useTheme()

    const [tabValue, setTabValue] = useState( society.files ? Object.keys(society.files)[0]: null)

    return (
        <Box className="flex-1 flex flex-col py-[20px] rounded-[20px]" sx={{
            boxShadow: `0 0 19px 4px ${theme.palette.secondary.main}1C`,
            bgcolor: "white",
            border: "1px solid",
            borderColor: "primary.main",
        }}
        >

            <Typography className="px-[20px]" fontSize={30} fontWeight={800}>
                Fichiers
            </Typography>
            <Tabs value={tabValue} onChange={(_e, val) => setTabValue(val)}>
                {
                    society.files &&
                    Object.keys(society.files).map((name, i) => (
                        <Tab label={name} value={name} key={i}/>
                    ))
                }
            </Tabs>
            <Divider/>
            <Box className="flex flex-1 p-[20px] gap-[20px] items-center">
                {
                    society.files &&
                    Object.entries(society.files[tabValue]).map(([name,url],i) => (
                        <Box className="flex flex-col justify-center items-center cursor-pointer" onClick={() => console.log(url)}>
                            <img src={PDF} alt="pdf image" className="flex-1"/>
                            <Typography>{name}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default InfoView;