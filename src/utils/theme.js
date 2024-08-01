import {amber, deepOrange, grey} from "@mui/material/colors";
import {
    DarkBackground,
    DarkPrimary,
    DarkSecondary,
    LightBackground,
    LightPrimary,
    LightSecondary,
    LightSecondaryText
} from "./colors.js";

const getDesignTokens = (mode) => ({
    palette: (mode !== true
        ? {
            // Palette LightMode
            mode: "light",
            primary: {
                main: LightPrimary
            },
            secondary: {main: LightSecondary},
            background: {
                default: LightBackground,
            },
            background_header:{
                default: DarkBackground,
            },
            divider: amber[200],
            reversText: {
                primary: "#fff",
            },
            text: {
                primary: "#000000",
                secondary: LightSecondaryText
            },
        }
        : {
            // Palette DarkMode
            mode: "dark",
            primary: {
                main: DarkPrimary
            },
            divider: {main: DarkSecondary},
            background: {
                default: DarkBackground,
                paper: deepOrange[900],
            },
            background_header:{
                default: LightBackground,
            },
            text: {
                primary: '#fff',
                secondary: grey[500],
            },
            reversText: {
                primary: "#000",
            },
        }),
});

export default getDesignTokens;