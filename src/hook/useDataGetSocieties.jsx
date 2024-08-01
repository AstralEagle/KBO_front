import {useEffect, useState} from "react";

import data from "../assets/data2.json"

const useDataGetSocieties = () => {
    const [societies, setSocieties] = useState([])

    useEffect(() => {
        const returnData = Object.entries(data).map(([key, value]) => ({...value, code: key}))
        setSocieties(returnData)
    }, [])

    return {
        societies
    }
}

export default useDataGetSocieties