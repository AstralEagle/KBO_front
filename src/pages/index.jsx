import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {Input, Search} from "@mui/icons-material";
import TextInput from "../component/input/TextInput.jsx";
import SelectInput from "../component/input/SelectInput.jsx";
import SubmitInput from "../component/input/SubmitInput.jsx";
import SocietyCard from "../component/SocietyCard.jsx";
import useDataGetSocieties from "../hook/useDataGetSocieties.jsx";


function Index() {
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState("")
    const [activityValue, setActivityValue] = useState(undefined)


    const {societies, filterInput, setSearch} = useDataGetSocieties()

    const onClickCard = (id) => {
        navigate(`society/${id}`)
    }
    const onSubmitFilter = () => {
        setSearch(activityValue, searchValue)
    }

    return (
        <Box className="pages flex flex-col items-center p-[20px] gap-[20px]">
            <Box className="flex gap-[15px]">
                <SelectInput icon={<Input/>} placeholder=" Filter by " listSelect={filterInput}
                             value={activityValue} setValue={setActivityValue}/>
                <TextInput icon={<Search/>} placeholder="Search" value={searchValue} setValue={setSearchValue}/>
                <SubmitInput value="Search" onClick={onSubmitFilter}/>
            </Box>

            <Box className="flex-1 flex flex-wrap gap-[40px] justify-center content-baseline">
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