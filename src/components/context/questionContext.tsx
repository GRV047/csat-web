import { createContext, useState } from "react"
import { getTemplateById } from "../../environment/models/template"

interface InputProviderProp {
    children: React.ReactNode
}

type question = {
    questionObject: any[],
    getQuestion: () => void
}

export const questionContext = createContext<question>({
    questionObject: [],
    getQuestion: () => { }
})
export function QuestionContainer({ children }: InputProviderProp) {

    const [questionObject, setQuestionObject] = useState([]);

    let questions:any

    async function getQuestion() {
        questions = await getTemplateById("62bc5101cdd79e5f9ba6d694");

        setQuestionObject(questions.data.data.templateJson);
    }

    return (
        <>
            <questionContext.Provider value={{ questionObject, getQuestion }}>
                {children}
            </questionContext.Provider>
        </>
    )
}


