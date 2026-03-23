import { createContext } from "react";
import { initialState, type Credentials } from "../types";
import mockApi from "../assets/mockApi";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {children: React.ReactNode})=>{

    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null)
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
        if(data?.age && data?.weight && data?.goal){
            setonboardingCompleted(true)
    }
    setIsUserFetched(true)

}  
   const fetchFoodLogs = async ()=>{
    const { data } = await mockApi.foodLogs.list()
    setAllFoodlogs(data)
   }

    const fetchActivityLogs = async ()=>{
    const { data } = await mockApi.ActivityLogs.list()
    setAllActivitylogs(data)
   }

   const logout = ()=>{
    localStorage.removeItem('token')
    setUser(null)
   }

   useEffectEvent(()=>{
    const token = localStorage.getItem('token')
    if(token){
        (async ()=>{
            await fetchUser(token)
            await fetchFoodLogs()
            await fetchActivityLogs()
        })();
    }else{
        setIsUserFetched(true)
    }
   })

    const value = {
  user,
  signup,
  login,
  fetchUser,
  isUserFetched,
  onboardingCompleted,
  allFoodLogs,
  allActivityLogs
}

    return <AppContext.Provider value={value}>
         {children}

    </AppContext.Provider>
}

export const useAppContext = ()=> useContext(AppContext)