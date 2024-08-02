import {useEffect, useState} from "react";
import axios from "axios";

const useDataGetSociety = (id) => {
    const [society, setSociety] = useState(null)

    useEffect(() => {

        (async () => {
            const data = (await axios.get(`${import.meta.env.VITE_API_URL}/search/scrapping/${id}`)).data;
            setSociety(data)
        })()
    }, [id])

    return {
        society
    }
}

export default useDataGetSociety