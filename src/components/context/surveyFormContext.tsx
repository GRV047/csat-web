import { createContext, useContext, useState } from "react"


// Type defination of children props which we will pass across components at line 25
interface InputProviderProp {
    children: React.ReactNode
}

type questions = {
    question: string,
    response: any,
    uniqueId: string,
    expandableOptions: string[];
    id: string,
    time: number,
    isParent: string
}

//Creating Context type
type surveyContext = {
    responseArray: any[],
    clientId: string,
    setValue: (res: questions) => void
    saveClientId: (id: string) => void
}

//Creating context hear with type defined
export const Survey = createContext<surveyContext>({
    responseArray: [],
    clientId: '',
    setValue: (res: questions) => { },
    saveClientId: (res: string) => { }
})


//Wrapper Component which holds contex in application
export const StateContainer = ({ children }: InputProviderProp) => {

    const [responseArray, setResponseArray] = useState([{
        question: "",
        response: "",
        uniqueId: "",
        id: "",
        time: new Date().getTime(),
        isParent: ""
    }])

    const [clientId, setClientId] = useState('');

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
                    "uniqueId": objects.uniqueId,
                    "id": objects.id,
                    "time": objects.time,
                    "isParent": objects.isParent
                }
            ]);
        }

    }

    function saveClientId(id:string){
        setClientId(id);
    }

    return (
        <>
            <Survey.Provider value={{ setValue, responseArray, clientId, saveClientId }}>
                {children}
            </Survey.Provider>
        </>
    )
}


//Exporting instance of Use Context
export default function SurveyContext() {
    return useContext(Survey);
}