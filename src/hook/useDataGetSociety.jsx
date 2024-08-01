import {useEffect, useState} from "react";

import data from "../assets/data2.json"

const useDataGetSociety = (id) => {
    const [society, setSociety] = useState(null)

    useEffect(() => {

        const returnData =  data[id]
        setSociety(returnData)
        console.log(id)
    }, [id])

    return {
        society
    }
}

export default useDataGetSociety