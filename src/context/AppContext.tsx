import { createContext } from "react";
import { initialState } from "../types";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {childeren: React.ReactNode})=>{

    const navigate = useNavigate()
    const [user, setUser] = useState<User></User>(null)
    const [isUserFetched, setIsUserFetched] = useState(false)
    const [onboardingCompleted, setonboardingCompleted] = useState(false)
    const [allFoodLogs, setAllFoodlogs] = useState<FoodEntry[]>([])
    const [allActivityLogs, setAllActivitylogs] = useState<ActivityEntry[]>([])

    const signup = async 

    const value = {}

    return <AppContext.Provider value={value}>
         {children}

    </AppContext.Provider>
}

export const useAppContext = ()=> useContext(AppContext)