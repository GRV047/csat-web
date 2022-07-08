import { createContext, useState } from "react"
import { getCustomerById } from "../../environment/models/customer"
import { getTemplateById } from "../../environment/models/template"

interface InputProviderProp {
    children: React.ReactNode
}

type question = {
    questionObject: any[],
    getQuestion: (id: string) => void,
    getClientData: (id: string) => void,
    clientData: any
}

export const questionContext = createContext<question>({
    questionObject: [],
    getQuestion: (id: string) => { },
    getClientData: (id: string) => { },
    clientData: []
})
export function QuestionContainer({ children }: InputProviderProp) {

    const [questionObject, setQuestionObject] = useState([]);

    const [clientData, setClientData] = useState([]);

    let questions: any

    async function getQuestion(id: string) {
        questions = await getTemplateById(id);
        //"62bc5101cdd79e5f9ba6d694"

        setQuestionObject(questions.data.data.templateJson);

        console.log(questions)
    }
    let client:any
    async function getClientData(id: string) {
        client = await getCustomerById(id);
        setClientData(client.data);
        getQuestion(client.data.data.template._id)
    }

    return (
        <>
            <questionContext.Provider value={{ questionObject, getQuestion, getClientData, clientData }}>
                {children}
            </questionContext.Provider>
        </>
    )
}


