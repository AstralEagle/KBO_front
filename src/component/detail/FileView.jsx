import React, {useState} from 'react';
import {Box, Divider, Tab, Tabs, Tooltip, Typography, useTheme} from "@mui/material";
import {Description} from "@mui/icons-material";
import PDF from "../../assets/PDF.svg"

function InfoView({society}) {
    const theme = useTheme()

    const [tabValue, setTabValue] = useState(society.files ? Object.keys(society.files)[0] : null)

    return (
        <Box className="flex-1 flex flex-col py-[20px] rounded-[20px]" sx={{
            boxShadow: `0 0 19px 4px ${theme.palette.secondary.main}1C`,
            border: "1px solid",
            borderColor: "primary.main",
            bgcolor: "background.secondary",
            color: "text.primary"
        }}
        >

            <Typography className="px-[20px] pb-[20px]" fontSize={30} fontWeight={800}>
                Fichiers
            </Typography>
            <Divider/>
            <Box className="flex flex-1 p-[20px] gap-[20px] items-center overflow-x-auto">
                {
                    society.juridical &&
                    society.juridical.map((file, i) => (
                        <Box className="flex flex-col justify-center items-center cursor-pointer"
                             onClick={() => window.open(file.url, '_blank').focus()}>
                            <img src={PDF} alt="pdf image" className="flex-1"/>
                            <Tooltip title={file.title}>
                                <Typography className="truncate max-w-[150px]">{file.title}</Typography>
                            </Tooltip>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default InfoView;