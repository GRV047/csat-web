import { createContext, useContext, useState } from "react"


// Type defination of children props which we will pass across components at line 25
interface InputProviderProp {
    children: React.ReactNode
}

type questions = {
    question: string,
    response: any,
    questionId: string,
    expandableOptions: string[],
    isParent: string,
    status:boolean,
    displayOrderArray:any
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
        isParent: "",
        status:true,
        displayOrderArr:[]
    }])

    const [clientId, setClientId] = useState('');

    const [surveyId, setSurveyId] = useState('');

    function setValue(objects: questions) {
        let index = 0;
        index = responseArray.length > 1 ?
        responseArray.findIndex(val => val.questionId === objects.questionId)
        : 0;
        
        if (index > 0) {
            responseArray[index].response = objects.response;
            for (let i = index; i < responseArray.length; i++) {
                const element = responseArray[i];
                if (element.isParent.toLowerCase() === "no") {
                    element.status=false;
                }
            }
            
        } else {
            setResponseArray(prevState => [
                ...prevState, {
                    "question": objects.question,
                    "response": objects.response,
                    "questionId": objects.questionId,
                    "isParent": objects.isParent,
                    "status":objects.status,
                    "displayOrderArr":objects.displayOrderArray
                }
            ]); 
        }
        console.log("ENDING",responseArray)
    }
    
    console.log("THIS====>",responseArray);
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