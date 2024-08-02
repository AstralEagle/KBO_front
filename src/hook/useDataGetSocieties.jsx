import {useEffect, useState} from "react";

import data from "../assets/data2.json"
import axios from "axios";

const isDev = false

const useDataGetSocieties = () => {
    const [societies, setSocieties] = useState([])

    const [valueSearch, setValueSearch] = useState(undefined);
    const [typeSearch, setTypeSearch] = useState(undefined);

    const isSearchable = Boolean(valueSearch && typeSearch);

    const filterInput = {
        "By enterprise number": "number",
        "By enterprise name": "name",
        "By enterprise activity": "activity",
        "By enterprise address": "address",
    }

    useEffect(() => {
        if (isDev) {
            const returnData = Object.entries(data).map(([key, value]) => ({...value, code: key}))
            setSocieties(returnData)
            return;
        }else {
            let isOnCharge = true;
            (async () => {
                if(isSearchable){
                    const data = (await axios.get(`${import.meta.env.VITE_URL_API}/data/search/${filterInput[typeSearch]}/${valueSearch}`)).data
                    if (isOnCharge)
                        setSocieties(data)
                }
                else{
                    const data = (await axios.get(`${import.meta.env.VITE_URL_API}/data/`)).data
                    if (isOnCharge)
                        setSocieties(data)
                }
            })()
            return () => {
                isOnCharge = false
            }
        }
    }, [valueSearch, typeSearch])

    const setSearch = async (type, search) => {
        await setTypeSearch(type);
        await setValueSearch(search)
    }

    return {
        societies,
        filterInput: Object.keys(filterInput),
        setSearch
    }
}

export default useDataGetSocieties