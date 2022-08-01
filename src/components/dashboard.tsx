import './css/dashboard.css';
import Header from './filter/header';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { questionContext } from './context/questionContext';
import { Survey } from './context/surveyFormContext';
import { getCustomerById } from '../environment/models/customer';
import { getResponseByClientId } from '../environment/models/rsponse';
import Swal from 'sweetalert2';


export default function Dashboard() {
    const nav = useNavigate();
    const contextData = useContext(Survey)
    let questions: any = [];
    let questionValues = useContext(questionContext);

    // http://localhost:3000/customer/62df8584741551e5909fc9c0/survey/62df8584741551e5909fc9ba
    async function redirectToSurvey(e: any) {
        e.preventDefault();
        let url = window.location.href;

        let splittedUrl = url.split('/');
        let lastIndex = splittedUrl.length - 1
        let customerSection = splittedUrl.length - 3
        let params = {
            clientId: splittedUrl[customerSection],
            surveyId: splittedUrl[lastIndex]
        }

        // const preExistingResponse = await getResponseByClientId(params);

        // // console.log(JSON.stringify(preExistingResponse))
        // const setQuestionValues = await getData(splittedUrl[customerSection]);

        // console.log(JSON.stringify(setQuestionValues))
        // if (preExistingResponse.data.data.length === 0) {
        //     contextData.saveClientId(splittedUrl[customerSection]) //new Changes

        //     contextData.saveSurveyId(splittedUrl[lastIndex]) // saving surveyId as well
        //     const setQuestionValues = await getData(splittedUrl[customerSection]); //Old Convension. Although getting all details which are required
        //     questionValues.setValue(setQuestionValues)

        //     if (setQuestionValues.data.data.template.templateJson) {
        //         setTimeout(() => {
        //             nav("/survey")
        //         }, 1000)
        //     }
        // }else{
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Your Response Already Noted!',
        //       })
        // }

        nav("/survey")

    }

    function getData(id: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            // const res = questionValues.getClientData(id)
            const response = await getCustomerById(id);

            if (response) resolve(response)
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header />
                    <div className="text_area">
                        <div className="text_inner_container mt-2">
                            <h4>Thank you for being a valuable customer, we appreciate your business with Successive Technologies.</h4>
                            <h4>We always want to improve — could you help us out for a few minutes and let us know about your experience working with us?</h4>
                        </div>
                    </div>
                    <button className="btn btn-dark button_margin" onClick={redirectToSurvey}>Sure, Let's Start</button>
                </div>
            </div>
        </>
    )
}