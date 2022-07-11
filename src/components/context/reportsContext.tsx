import { createContext, useState } from "react";
import { getAllCustomer } from "../../environment/models/customer";
import { getAllResponses } from "../../environment/models/rsponse";

interface InputProviderProp {
    children: React.ReactNode
}

type reports = {
    allSurvey: any[],
    setAllSurveyData: () => void,
    allCustomer: any[],
    setAllCustomerData: () => void
}

export const ReportContext = createContext<reports>({
    allSurvey: [],
    setAllSurveyData: () => { },
    allCustomer: [],
    setAllCustomerData: () => { }
})

export function RreportContainer({ children }: InputProviderProp) {

    const [allSurvey, setAllSurvey] = useState([]);

    const [allCustomer,setAllCustomer] = useState([]);

    async function setAllCustomerData(){
        let response:any = await getAllCustomer({
            skip:100,take:100
        })

        setAllCustomer(response.data.data);
    }

    async function setAllSurveyData() {
        let responses: any = await getAllResponses({ take: 100, skip: 100 })

        setAllSurvey(responses.data.data);
    }
    return (
        <>
            <ReportContext.Provider value={{ allSurvey, setAllSurveyData, allCustomer, setAllCustomerData }}>
                {children}
            </ReportContext.Provider>
        </>
    )
}