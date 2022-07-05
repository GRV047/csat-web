import Header from "./filter/header";
import './css/survey-form.css';

import Label from "./shared/label";
import InputField from "./shared/input-field";
import { useContext, useEffect, useId, useState } from "react";
import SingleChoiceQuestion from "./shared/single-choice-question";
import { dataSet } from "../dataset";
import TextAreaSection from "./shared/textArea"

import  { Survey } from "./context/surveyFormContext";
import { questionContext } from "./context/questionContext";
import { saveResponse } from "../environment/models/rsponse";
import BooleanTeypeQuestion from "./shared/booleanTypeQuestion";

export default function SurveyForm() {
    
    const response = useContext(Survey);
    const questionDataSet = useContext(questionContext)
    const questionArea: any = [];
    const id = useId()
    const [formValue, setFormValue] = useState({
        name: "",
        company: "",
        email: "",
        commants:"",
        customerId:""
    })
    useEffect(()=>{
        questionDataSet.getQuestion();
    },[])

    let questions = questionDataSet.questionObject;
    console.log(questions)
    questions.forEach((element, i) => {
        if (element.type===2) {
            questionArea.push(
                <div className="question_box mt-4" key={i}>
                    <SingleChoiceQuestion questionObject={element} />
                </div>
            )
        }else if(element.type ===4){
            <div className="question_box mt-4">
                <BooleanTeypeQuestion questionObject={element}/>
            </div>
        }
    })

    const handelInput = (e:any) => {
        const key=e.target.name;
        const value=e.target.value;

        setFormValue({...formValue,[key]:value});
    }

    const sumbmitForm = (event:any) => {
        event.preventDefault()
        let parameter:any = {
            name:formValue.name,
            company:formValue.company,
            email:formValue.email,
            comments:formValue.commants,
        };
        let resArray: any[] = []
        response.responseArray.forEach(element=>{
            if(element.id !==''){
                resArray.push(element);
            }
        })
        
        parameter.surveyResponse=resArray
        console.log(parameter)

        const res = saveResponse(formValue.customerId,parameter);
    }

    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header />
                    <div className="question_container mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Label labelName="name"
                                        className="form-label" text="First Name, Last Name" />
                                    <InputField id="name"
                                        className="form-control"
                                        defaultValue={formValue.name}
                                        onChange={handelInput} />
                                </div>
                                <div className="col-lg-4">
                                    <Label labelName="company"
                                        className="form-label" text="Company" />
                                    <InputField id="company"
                                        className="form-control"
                                        defaultValue={formValue.company}
                                        onChange={handelInput} />
                                </div>
                                <div className="col-lg-4">
                                    <Label labelName="email"
                                        className="form-label" text="Email" />
                                    <InputField id="email"
                                        inputType="email"
                                        className="form-control"
                                        defaultValue={formValue.email}
                                        onChange={handelInput} />
                                </div>
                            </div>

                            <div className="row">
                                {questionArea}
                            </div>

                            <div className="row mt-5">
                                <TextAreaSection id={id}
                                    name={"commants"}
                                    rows={4}
                                    cols={40}
                                    placeHolder={"Please enter your feedback"}
                                    value={formValue.commants}
                                    onChange={handelInput} />
                            </div>

                            <div className="row button">
                                <button className="btn btn-dark mt-5 survey_button" onClick={sumbmitForm}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




//isParent Key need to be maintain at DB in order to manage handeling in survey form context.