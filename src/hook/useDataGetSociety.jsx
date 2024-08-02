import {useEffect, useState} from "react";
import axios from "axios";

const useDataGetSociety = (id) => {
    const [society, setSociety] = useState(null)

    useEffect(() => {
        let isOnCharging = true;
        (async () => {
            const data = (await axios.get(`${import.meta.env.VITE_URL_API}/data/search/scrapping/${id}`)).data[id];
            const data2 = (await axios.get(`${import.meta.env.VITE_URL_API}/data/unique/${id}`)).data;
            if (isOnCharging)
                setSociety({...data, ...data2})
        })()
        return () => {
            isOnCharging = false
        }
    }, [id])

    return {
        society
    }
}

export default useDataGetSociety