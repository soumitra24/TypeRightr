import { createContext, useContext, useState } from "react"


const TestTimerContext = createContext();
export const TestTimerContextProvider = ({children}) => {
    const [testTime, setTestTime] = useState(15);

    const values = {
        testTime,
        setTestTime
    }

    return (<TestTimerContext.Provider value = {values}>{children}</TestTimerContext.Provider>)
}

export const useTestMode = ()=> useContext(TestTimerContext);