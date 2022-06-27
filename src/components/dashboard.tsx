import './css/dashboard.css';
import Header from './filter/header';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const nav = useNavigate();
    function redirectToSurvey(e:any){
        e.preventDefault();
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