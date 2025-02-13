import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
});

export const ThemeContextProvide = ThemeContext.Provider


export default function useTheme (){
    return useContext(ThemeContext);
}