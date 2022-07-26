import { createContext, useContext, useState } from "react"


// Type defination of children props which we will pass across components at line 25
interface InputProviderProp {
    children: React.ReactNode
}

type questions = {
    question: string,
    response: any,
    questionId: string,
    expandableOptions: string[];
    id: string,
    time: number,
    isParent: string
}

//Creating Context type
type surveyContext = {
    responseArray: any[],
    clientId: string,
    surveyId: string,
    setValue: (res: questions) => void
    saveClientId: (id: string) => void
    saveSurveyId: (id: string) => void
}

//Creating context hear with type defined
export const Survey = createContext<surveyContext>({
    responseArray: [],
    clientId: '',
    surveyId: '',
    setValue: (res: questions) => { },
    saveClientId: (res: string) => { },
    saveSurveyId: (res: string) => { }
})


//Wrapper Component which holds contex in application
export const StateContainer = ({ children }: InputProviderProp) => {

    const [responseArray, setResponseArray] = useState([{
        question: "",
        response: "",
        questionId: "",
        id: "",
        time: new Date().getTime(),
        isParent: ""
    }])

    const [clientId, setClientId] = useState('');

    const [surveyId, setSurveyId] = useState('');

    function setValue(objects: questions) {
        let index = 0;
        index = responseArray.length > 1 ?
            responseArray.findIndex(val => val.id === objects.id)
            : 0;
        if (index > 0) {
            responseArray[index].response = objects.response;
            responseArray[index].time = objects.time;
            for (let i = index; i < responseArray.length; i++) {
                const element = responseArray[i];
                if (element.isParent.toLowerCase() === "no") {
                    responseArray.splice(i, 1);
                }
            }

        } else {
            setResponseArray(prevState => [
                ...prevState, {
                    "question": objects.question,
                    "response": objects.response,
                    "questionId": objects.questionId,
                    "id": objects.id,
                    "time": objects.time,
                    "isParent": objects.isParent
                }
            ]);
        }

    }

    function saveClientId(id: string) {
        setClientId(id);
    }

    function saveSurveyId(id:string){
        setSurveyId(id)
    }

    return (
        <>
            <Survey.Provider value={{ setValue, responseArray, clientId, saveClientId, surveyId, saveSurveyId}}>
                {children}
            </Survey.Provider>
        </>
    )
}


//Exporting instance of Use Context
export default function SurveyContext() {
    return useContext(Survey);
}