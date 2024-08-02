import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../stores/reducers/userReducer.js";

const useDataGetUser = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)

    const [token, setToken] = useState(null)

    const signup = async (firstName, lastName, email, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/users/register`, {
                firstName, lastName, email, password
            });
            setToken(response.data.token);
        } catch (e) {
            console.error(e)
        }
    }
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/users/login`, {
                email, password
            });
            setToken(response.data.token);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if(token)
            getUser(token)

    }, [token] )

    const getUser = async (token) => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/users/me`, {
                headers: { 'x-auth-token': token }
            });
            dispatch(userLogin(response.data));
        }catch(e) {
            console.error(e)
        }
    }

    return {
        user,
        signup,
        login
    }
}


export default useDataGetUser;