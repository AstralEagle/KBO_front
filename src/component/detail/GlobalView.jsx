import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {CalendarMonth, Email, Groups, Language, LocationOn, Phone, Print} from "@mui/icons-material";

function GlobalView({society, id}) {
    const theme = useTheme();

    return (
        <Box className="flex-1 flex flex-col gap-[10px]">
            <Typography color="text.primary" fontSize="48px" fontWeight={800}>{society.name}</Typography>
            <Box className="flex gap-[15px]">
                <Typography color="text.secondary">{id}</Typography>
                <Typography>.</Typography>
            </Box>
            <Typography color="primary">{society.activity}</Typography>
            <Typography  color="text.primary" className="text-ellipsis overflow-hidden max-h-[100px]">{society.description}</Typography>
            <Box className="flex flex-col gap-[5px]">
                {society?.address &&
                    <Box className="flex gap-[10px] items-center">
                        <LocationOn sx={{color: "text.primary"}}/>
                        <Typography color="text.primary" size={12}>{society.address}</Typography>
                    </Box>
                }
                {society.contact?.phone &&
                    <Box className="flex gap-[10px] items-center">
                        <Phone sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">{society.contact.phone}</Typography>
                    </Box>
                }
                {society.contact?.email &&

                    <Box className="flex gap-[10px] items-center">
                        <Email sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">{society.contact.email}</Typography>
                    </Box>}
                {society.contact?.fax &&

                    <Box className="flex gap-[10px] items-center">
                        <Print sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">{society.contact.fax}</Typography>
                    </Box>}
                {society.website &&

                    <Box className="flex gap-[10px] items-center cursor-pointer" onClick={() => {
                        location.href = society.website
                    }}>
                        <Language sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">{society.website}</Typography>
                    </Box>
                }
                {society.employees &&
                    <Box className="flex gap-[10px] items-center" >
                        <Groups sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">{society.employees} employees</Typography>
                    </Box>
                }
                {society.startDate &&
                    <Box className="flex gap-[10px] items-center" >
                        <CalendarMonth sx={{color: "text.primary"}}/>
                        <Typography color="text.primary">Founded at {society.startDate}</Typography>
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default GlobalView;