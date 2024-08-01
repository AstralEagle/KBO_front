import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {Construction, Search} from "@mui/icons-material";
import TextInput from "../component/input/TextInput.jsx";
import SelectInput from "../component/input/SelectInput.jsx";
import SubmitInput from "../component/input/SubmitInput.jsx";
import SocietyCard from "../component/SocietyCard.jsx";
import useDataGetSocieties from "../hook/useDataGetSocieties.jsx";

import data from "../assets/data.json"

function Index(props) {
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState("")
    const [activityValue, setActivityValue] = useState(undefined)

    const {societies} = useDataGetSocieties()

    const onClickCard = (id) => {
        navigate(`society/${id}`)
    }

    return (
        <Box className="pages flex flex-col items-center p-[20px] gap-[20px]">
            <Box className="flex gap-[15px]">
                <TextInput icon={<Search/>} placeholder="Search" value={searchValue} setValue={setSearchValue}/>
                <SelectInput icon={<Construction/>} placeholder="Activity" listSelect={["test", "test1"]}
                             value={activityValue} setValue={setActivityValue}/>
                <SubmitInput value="Search" onClick={() => {
                    console.log(submit)
                }}/>
            </Box>

            <Box className="flex-1 flex flex-wrap gap-[20px] justify-center content-baseline">
                {
                    societies.map((society, i) => (
                        <SocietyCard society={society} key={i} onClick={onClickCard}/>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Index;