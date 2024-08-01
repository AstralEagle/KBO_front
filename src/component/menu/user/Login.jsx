import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import SubmitInput from "../../input/SubmitInput.jsx";
import TextInput from "../../input/TextInput.jsx";
import {Email, Password, Person, Search} from "@mui/icons-material";

function Login(props) {
    const [isLogin, setIsLogin] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const changeIsLogin = () => {
        setIsLogin((value) => !value)
    }


    if(isLogin)
        return (
            <Box className="flex flex-col items-center p-[20px] gap-[20px]">
                <Typography fontSize={24}>Connexion</Typography>
                <Box className="flex flex-col gap-[10px]">
                    <TextInput icon={<Email/>} placeholder="Email" value={email} setValue={setEmail}/>
                    <TextInput password icon={<Password/>} placeholder="Password" value={password} setValue={setPassword}/>
                </Box>
                <SubmitInput value="Logout" onClick={() => {
                    console.log("Logout")}}/>
                <Typography className="cursor-pointer" color="secondary" onClick={changeIsLogin}>Créer un compte</Typography>
            </Box>
        );
    else
        return (
            <Box className="flex flex-col items-center p-[20px] gap-[20px]">
                <Typography fontSize={24}>S'inscrire</Typography>
                <Box className="flex flex-col gap-[10px]">
                    <TextInput icon={<Person/>} placeholder="FirstName" value={firstName} setValue={setFirstName}/>
                    <TextInput icon={<Person/>} placeholder="LastName" value={lastName} setValue={setLastName}/>
                    <TextInput icon={<Email/>} placeholder="Email" value={email} setValue={setEmail}/>
                    <TextInput password icon={<Password/>} placeholder="Password" value={password} setValue={setPassword}/>
                </Box>
                <SubmitInput value="Logout" onClick={() => setIsLogin((val) => !val)}/>
                <Typography className="cursor-pointer" color="secondary" onClick={changeIsLogin}>Se connecter</Typography>
            </Box>
        );
}

export default Login;