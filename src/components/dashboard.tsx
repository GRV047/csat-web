import './css/dashboard.css';
import Header from './filter/header';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { questionContext } from './context/questionContext';
import { Survey } from './context/surveyFormContext';
import { getCustomerById } from '../environment/models/customer';


export default function Dashboard() {
    const nav = useNavigate();
    const contextData = useContext(Survey)
    let questions:any=[];
    let questionValues = useContext(questionContext);

    async function redirectToSurvey(e:any){
        e.preventDefault();
        let url = window.location.href;
        
        let splittedUrl = url.split('/');
        let count = splittedUrl.length-1
        contextData.saveClientId(splittedUrl[count]) //new Changes
        const setQuestionValues = await getData(splittedUrl[count]); //Old Convension. Although getting all details which are required
        questionValues.setValue(setQuestionValues)        
        console.log("This==>",setQuestionValues.data.data.template.templateJson)
        if(setQuestionValues.data.data.template.templateJson){
            setTimeout(()=>{
                nav("/survey")
            },1000)
        }
    }

    function getData(id:string):Promise<any>{
        return new Promise(async(resolve,reject)=>{
            // const res = questionValues.getClientData(id)
            const response = await getCustomerById(id);

            if(response) resolve(response)
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header/>
                    <div className="text_area">
                        <div className="text_inner_container mt-4">
                            <h4>Thank you for being a valuable customer, we appreciate your business with Successive Technologies.</h4>
                            <br />
                            <h4>We always want to improve — could you help us out for a few minutes and let us know about your experience working with us?</h4>
                        </div>
                    </div>
                    <button className="btn btn-dark mt-5 mb-4 button_margin" onClick={redirectToSurvey}>Sure, Let's Start</button>
                </div>
            </div>
        </>
    )
}