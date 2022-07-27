
import { useState, createContext } from "react"
import { surveyStates } from "../../environment/models/surveyController"

interface InputProviderProp {
    children: React.ReactNode
}



type home = {
    isVisible: boolean,
    setVisibility: (flag: boolean) => void,
    surveyStatus: any,
    setSurveyStatus: () => void
}
export const HomeContext = createContext<home>({
    isVisible: true,
    setVisibility: (flag: boolean) => { },
    surveyStatus: {},
    setSurveyStatus: () => { }
})

export function HomeContainer({ children }: InputProviderProp) {

    const [isVisible, setIsVisible] = useState(true);

    const [surveyStatus, setSurveyStatusData] = useState({});

    function setVisibility(flag: boolean) {
        setIsVisible(flag)
    }

    async function setSurveyStatus() {
        const response = await surveyStates();
        console.log(response)
        setSurveyStatusData(response.data.data);
    }


    return (
        <>
            <HomeContext.Provider value={{ isVisible, setVisibility, surveyStatus, setSurveyStatus }}>
                {children}
            </HomeContext.Provider>
        </>
    )
}