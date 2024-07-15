import { createContext, useContext, useState } from "react";
import { ThemeOptions } from "../Utils/Themes";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{

    const defaultTheme = JSON.parse(localStorage.getItem('theme')) || ThemeOptions[1].value;
    const[theme, setTheme] = useState(defaultTheme);

    const values = {
        theme,
        setTheme
    }
    return(<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}

export const useTheme = () => (useContext(ThemeContext));