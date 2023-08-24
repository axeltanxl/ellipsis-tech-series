import { createTheme } from "@mui/material/styles";
import { generateColors } from "./initialSettings";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "./tailwind.config.js";
// const config = resolveConfig(tailwindConfig);

const themeSetting = () => {
    const colors = generateColors();
    return ({
        palette : {
            primary : {
                main : colors.primary,
                contrastText : colors.text,
            },
            secondary : {
                main : colors.secondary,
                contrastText : colors.text,
            },
            background : {
                main : colors.bg,
                contrastText : colors.text,
            },
            text : {
                primary : colors.text,
            }
        },
        typography : {
            fontFamily : 'Nunito',
            fontSize : 14,

            h1 : {
                fontFamily : 'Nunito',
                fontSize : 36,
            },
            h2 : {
                fontFamily : 'Nunito',
                fontSize : 30,
            },
            h3 : {
                fontFamily : 'Nunito',
                fontSize : 24,
            },
            h4 : {
                fontFamily : 'Nunito',
                fontSize : 20,
            },
            h5 : {
                fontFamily : 'Nunito',
                fontSize : 14,
            },
            h6 : {
                fontFamily : 'Nunito',
                fontSize : 14,
            },
        }
    })
}

export const theme = createTheme(themeSetting());