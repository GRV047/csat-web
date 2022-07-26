import '../css/survey-form.css'
import Label from './label'
import { useId, useState } from 'react'
import RadioInput from './radio-input'
import SurveyContext from '../context/surveyFormContext'


export default function SingleChoiceQuestion(props: any) {
    const contexData = SurveyContext()
    const {
        questionObject: {
            _id,
            questionText,
            options,
            expandableOptions,
            uniqueId,
            type,
            isParent,
            status,
            subquestions
        }
    } = props || {}

    // ID Hook for generatingb dynamic ID
    const id = useId();


    // useState for setting the value from the form
    const [response, setResponse] = useState([{
        selected: ""
    }]);


    // Calling Event onChange; and setting value of selection
    // From chield component
    let count = (response.length) - 1
    const handelInput = (event: any) => {
        const value = event.target.value;

        setResponse((prevRes: any) => [
            ...prevRes,
            {
                "selected": value
            }
        ])


        contexData.setValue({
            question: questionText,
            response: value,
            questionId: _id,
            expandableOptions:expandableOptions,
            id:_id,
            time:new Date().getTime(),
            isParent:isParent
        })
    }
    //veriable declaration for storing multiple
    // option templates
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

    // Rendering this component
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

            {/* *********************************************************************** */}
            {/* Calling Recursion for this component for renduring same component */}
            {/* *********************************************************************** */}
            {
                subquestions &&
                subquestions.length > 0 &&
                response.length > 0 &&
                (expandableOptions.indexOf(response[count].selected) !== -1) &&
                subquestions.map((val: any, i: number) =>
                    <div className="question_box mt-4" key={i}>
                        <SingleChoiceQuestion questionObject={val} />
                    </div>
                )
            }

        </>
    )
}