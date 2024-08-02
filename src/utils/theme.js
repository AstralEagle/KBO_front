import {
    DarkBackground, DarkBackgroundHeader, DarkBackgroundSecondary,
    DarkSecondary,
    LightBackground,
    LightPrimary,
    LightSecondary,
    LightSecondaryText, White
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
                secondary: White
            },
            background_header:{
                default: DarkBackground,
            },
            divider: "#847979",
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
                main: LightPrimary
            },
            secondary: {main: LightSecondary},
            divider: {main: DarkSecondary},
            background: {
                default: DarkBackground,
                paper: DarkBackground,
                secondary: DarkBackgroundSecondary
            },
            background_header:{
                default: DarkBackgroundHeader,
            },
            text: {
                primary: '#fff',
                secondary: LightSecondaryText
            },
            reversText: {
                primary: "#000",
            },
        }),
});

export default getDesignTokens;