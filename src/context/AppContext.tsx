import { createContext } from "react";
import { initialState } from "../types";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {childeren: React.ReactNode})=>{

    return <AppContext.Provider>

    </AppContext.Provider>
}