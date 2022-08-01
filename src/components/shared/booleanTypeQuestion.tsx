import { useContext, useId, useState } from "react"
import Label from "./label"
import RadioInput from "./radio-input"
import SurveyContext from "../context/surveyFormContext"

export default function BooleanTeypeQuestion(props:any){

    const contextData = SurveyContext()
    const id = useId()
    const {
        questionObject:{
            _id,
            questionText,
            options,
            expandableOptions,
            isParent,
            subquestions,
            localDisplayOrder
        }
    }=props||{}

    const [response,setResponse] = useState([{
        selected:""
    }])
 

    let count = (response.length) - 1
    function handelInput(event:any){
        const value = event.target.value;
        let dispOrderArr = localDisplayOrder.split(".")
        setResponse((prevRes: any) => [
            ...prevRes,
            {
                "selected": value
            }
        ])


        contextData.setValue({
            question: questionText,
            response: value,
            questionId: _id,
            expandableOptions:expandableOptions,
            isParent:isParent,
            status:true,
            displayOrderArray:dispOrderArr
        })
    }

    const option: any = []

    // Creating and pushing all options value inside a Array
    options.forEach((element: any, i: number) => {
        option.push(
            <RadioInput
                onChange={handelInput}
                id={id}
                text={element}
                value={element}
                name={_id}
                className="options_section"
                key={i}
            />
        )
    })

    return (
        <>
            <div className="question_container mt-5">
                <Label labelName="Question"
                    className="form-label"
                    text={questionText} />
            </div>
            <div className="options_section">
                {option}
            </div>

            {
                subquestions &&
                subquestions.length > 0 &&
                response.length > 0 &&
                (expandableOptions.indexOf(response[count].selected) !== -1) &&
                subquestions.map((val: any, i: number) =>
                    <div className="question_box mt-4" key={i}>
                        <BooleanTeypeQuestion questionObject={val} />
                    </div>
                )
            }
        </>
    )
}