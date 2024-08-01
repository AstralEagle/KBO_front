import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {CalendarMonth, Email, Groups, Language, LocationOn, Phone, Print} from "@mui/icons-material";

function GlobalView({society, id}) {

    return (
        <Box className="flex-1 flex flex-col gap-[10px]">
            <Typography fontSize="48px" fontWeight={800}>{society.name}</Typography>
            <Box className="flex gap-[15px]">
                <Typography color="text.secondary">{id}</Typography>
                <Typography>.</Typography>
            </Box>
            <Typography color="primary">{society.activity}</Typography>
            <Typography className="text-ellipsis overflow-hidden max-h-[100px]">{society.description}</Typography>
            <Box className="flex flex-col gap-[5px]">
                {society.contact.adress &&
                    <Box className="flex gap-[10px] items-center">
                        <LocationOn/>
                        <Typography size={12}>{society.adress}</Typography>
                    </Box>
                }
                {society.contact.phone &&
                    <Box className="flex gap-[10px] items-center">
                        <Phone/>
                        <Typography>{society.contact.phone}</Typography>
                    </Box>
                }
                {society.contact.email &&

                    <Box className="flex gap-[10px] items-center">
                        <Email/>
                        <Typography>{society.contact.email}</Typography>
                    </Box>}
                {society.contact.fax &&

                    <Box className="flex gap-[10px] items-center">
                        <Print/>
                        <Typography>{society.contact.fax}</Typography>
                    </Box>}
                {society.contact.website &&

                    <Box className="flex gap-[10px] items-center cursor-pointer" onClick={() => {
                        location.href = society.contact.website
                    }}>
                        <Language/>
                        <Typography>{society.contact.website}</Typography>
                    </Box>
                }
                {society.employees &&
                    <Box className="flex gap-[10px] items-center" >
                        <Groups/>
                        <Typography>{society.employees} employees</Typography>
                    </Box>
                }
                {society.founded &&
                    <Box className="flex gap-[10px] items-center" >
                        <CalendarMonth/>
                        <Typography>Founded at {society.founded}</Typography>
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default GlobalView;