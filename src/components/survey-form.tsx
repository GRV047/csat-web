import Header from "./filter/header";
import './css/survey-form.css';

import Label from "./shared/label";
import InputField from "./shared/input-field";
import { useContext, useId, useState } from "react";
import SingleChoiceQuestion from "./shared/single-choice-question";
import TextAreaSection from "./shared/textArea"

import { Survey } from "./context/surveyFormContext";
import { questionContext } from "./context/questionContext";
import { saveResponse } from "../environment/models/rsponse";
import BooleanTeypeQuestion from "./shared/booleanTypeQuestion";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SurveyForm() {

    const nav = useNavigate();

    //Getting access to Survey Context
    // All survey related oprations like saveing response and building final object done hear
    const response = useContext(Survey);

    // getting Access to questionContext
    // to get questions based on costomerId we are getting on the URL
    const questionDataSet = useContext(questionContext)

    console.log(questionDataSet.clientData)


    let customerDetails = questionDataSet.clientData ?? {
        firstName: "",
        lastName: "",
        project: "",
        email: ""
    };
    const questionArea: any = [];
    const id = useId()

    // setting Default values
    const [formValue, setFormValue] = useState({
        name: customerDetails.firstName + ' ' + customerDetails.lastName,
        company: customerDetails.project,
        email: customerDetails.email,
        commants: ""
    })

    //    Ggetting Question Array of Object containig nested  object.
    let questions = questionDataSet.questionObject;

    // condition check weate what type of question it is
    questions.forEach((element, i) => {
        if (element.type === 2) {
            questionArea.push(
                <div className="question_box mt-4" key={i}>
                    <SingleChoiceQuestion questionObject={element} />
                </div>
            )
        } else if (element.type === 4) {
            <div className="question_box mt-4">
                <BooleanTeypeQuestion questionObject={element} />
            </div>
        }
    })

    // managing input state for Form Value
    const handelInput = (e: any) => {
        const key = e.target.name;
        const value = e.target.value;

        setFormValue({ ...formValue, [key]: value });
    }


    // Form Submit Operations
    const sumbmitForm = async (event: any) => {
        event.preventDefault()

        // creating Final Object to be send on End point URL.

        let parameter: any = {
            name: formValue.name,
            company: formValue.company,
            email: formValue.email,
            comments: formValue.commants,
        };
        let resArray: any[] = []
        response.responseArray.forEach(element => {
            if (element.id !== '') {
                resArray.push(element);
            }
        })

        parameter.responseJson = resArray
        parameter.customerId = response.clientId;
        parameter.surveyId = response.surveyId;

        // getting Ip Aaddress of current device
        const ip = await axios.get("https://api.ipify.org?format=json&callback=getIP");

        // checking Final Object

        parameter.ipAddress = ip.data.ip

        // Consuming HTTP request for saving Data
        console.log(parameter)
        const res: any = await saveResponse(parameter);

        // handling success and faliour of http request.
        if (res.status === 201) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: true,
                timer: 2000
            }).then(res=>{
                nav("/exitPage");
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 2000
            })
        }
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
                                        className="form-label" text="Name" />
                                    <InputField id="name"
                                        className="form-control"
                                        defaultValue={formValue.name}
                                        onChange={handelInput} />
                                </div>
                                <div className="col-lg-4">
                                    <Label labelName="company"
                                        className="form-label" text="Company / Project" />
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