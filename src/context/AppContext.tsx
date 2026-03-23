import { createContext } from "react";
import { initialState, type Credentials } from "../types";
import mockApi from "../assets/mockApi";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {childeren: React.ReactNode})=>{

    const navigate = useNavigate()
    const [user, setUser] = useState<User></User>(null)
    const [isUserFetched, setIsUserFetched] = useState(false)
    const [onboardingCompleted, setonboardingCompleted] = useState(false)
    const [allFoodLogs, setAllFoodlogs] = useState<FoodEntry[]>([])
    const [allActivityLogs, setAllActivitylogs] = useState<ActivityEntry[]>([])


    const signup = async (credentials: Credentials)=> {
        const {data} = await mockApi.auth.register(credentials)
        setUser(data.user)
        if(data?.user.age && data?.user?.weight && data?.user?.goal){
            setonboardingCompleted(true)
        }
        localStorage.setItem('token', data.jwt)
    }

    const login = async (credentials: Credentials)=>{
        const {data} = await mockApi.auth.login(credentials)
        setUser({...data.user, token: data.jwt})
        if(data?.user.age && data?.user?.weight && data?.user?.goal){
            setonboardingCompleted(true)
        }
          localStorage.setItem('token', data.jwt)
    }

    const fetchUser = async (token: string)=>{
        const {data} = await mockApi.user.me()
        setUser({...data,token})
    }

    const value = {}

    return <AppContext.Provider value={value}>
         {children}

    </AppContext.Provider>
}

export const useAppContext = ()=> useContext(AppContext)