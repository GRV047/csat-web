import './css/dashboard.css';
import Header from './filter/header';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getTemplateById } from '../environment/models/template';
import { questionContext } from './context/questionContext';

export default function Dashboard() {
    const nav = useNavigate();
    let questions:any=[];
    let questionValues = useContext(questionContext);

    function redirectToSurvey(e:any){
        e.preventDefault();
        questionValues.getQuestion();
        nav("/survey")
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