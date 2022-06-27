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
    isParent:string
}

//Creating Context type
type surveyContext = {
    responseArray: any[],
    setValue: (res: questions) => void
}

//Creating context hear with type defined
const Survey = createContext<surveyContext>({
    responseArray: [],
    setValue: (res: questions) => { }
})


//Wrapper Component which holds contex in application
export const StateContainer = ({ children }: InputProviderProp) => {

    const [responseArray, setResponseArray] = useState([{
        question: "",
        response: "",
        uniqueId: "",
        id: "",
        time: new Date().getTime(),
        isParent:""
    }])
    function setValue(objects: questions) {
        console.log("Hello World", objects)
        let index = 0;
        index = responseArray.length > 1 ?
            responseArray.findIndex(val => val.id === objects.id)
            : 0;
        if (index > 0) {
            responseArray[index].response=objects.response;
            responseArray[index].time=objects.time;
            for (let i = index; i < responseArray.length; i++) {
                const element = responseArray[i];
                if(element.isParent.toLowerCase()==="no"){
                    responseArray.splice(i,1);
                }
            }
            console.log(responseArray[index+1])

        } else {
            setResponseArray(prevState => [
                ...prevState, {
                    "question": objects.question,
                    "response": objects.response,
                    "uniqueId": objects.uniqueId,
                    "id": objects.id,
                    "time": objects.time,
                    "isParent":objects.isParent
                }
            ]);
        }

    }

    return (
        <>
            <Survey.Provider value={{ setValue, responseArray }}>
                {children}
            </Survey.Provider>
        </>
    )
}


//Exporting instance of Use Context
export default function SurveyContext() {
    return useContext(Survey);
}