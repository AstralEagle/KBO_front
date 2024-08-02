import React, {useState} from 'react';
import {Box, Divider, Tab, Tabs, Typography, useTheme} from "@mui/material";

function InfoView({society}) {
    const theme = useTheme()

    const [tabValue, setTabValue] = useState(1)

    return (
        <Box className="flex flex-col py-[20px] rounded-[20px] min-w-[400px]" sx={{
            boxShadow: `0 0 19px 4px ${theme.palette.secondary.main}1C`,
            border: "1px solid",
            borderColor: "primary.main",
            minHeight: 400,
            bgcolor: "background.secondary",
            color: "text.primary"
        }}
        >

            <Typography className="px-[20px]" fontSize={30} fontWeight={800}>
                Infos
            </Typography>
            <Tabs value={tabValue} onChange={(_e, val) => setTabValue(val)}>
                <Tab label="Employée" value={0}/>
                <Tab label="Financial" value={1}/>
            </Tabs>
            <Divider/>
            <Box className="flex flex-col gap-[10px] p-[20px]">
                {tabValue === 0 ?
                    (<>
                        {
                            society.director !== "" &&
                        <Box className="flex gap-[10px] items-center">
                            <Typography fontWeight={800}>{society.director}</Typography>
                            <Typography color="primary">Director</Typography>
                        </Box>
                        }
                    </>):
                    (<>
                        {society.capital.map((finace,i) => (
                            <Box className="flex gap-[10px] items-center">
                                <Typography fontWeight={800}>{finace.year}</Typography>
                                <Typography color="primary">{finace.capital}</Typography>
                            </Box>
                        ))}
                    </>)

                }
            </Box>
        </Box>
    );
}




export default InfoView;