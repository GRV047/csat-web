import { createContext, useState } from "react"
import { getCustomerById } from "../../environment/models/customer"
import { getTemplateById } from "../../environment/models/template"

interface InputProviderProp {
    children: React.ReactNode
}

type question = {
    questionObject: any[],
    clientData: any
    setValue: (params:any) => void,
}

export const questionContext = createContext<question>({
    questionObject: [],
    clientData: [],
    setValue: (params:any) => { }
})
export function QuestionContainer({ children }: InputProviderProp) {

    const [questionObject, setQuestionObject] = useState([]);

    const [clientData, setClientData] = useState([]);

    let questions: any

    function setValue(params:any){
        setQuestionObject(params.data.data.template.templateJson);

        setClientData(params.data.data)
    }



    return (
        <>
            <questionContext.Provider value={{ questionObject, setValue, clientData }}>
                {children}
            </questionContext.Provider>
        </>
    )
}


