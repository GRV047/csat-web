import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { Endpoints } from '../environment/api';
import { HomeContext } from './context/homePageContext';
import './css/home.css'

type dashboardValues = {
    totalTemplate: number,
    totalCustomer: number,
    totalSurveyConducted: number,
    totalResponseRecive: number,
    totalPendingSurvey: number,
    totalMailSent: number
}

export function MainDashboard() {
    const homeContext = useContext(HomeContext)
    const [dashboardValue, setDashboardValue] = useState({
        totalTemplate: 1,
        totalCustomer: 9,
        totalSurveyConducted: 1,
        totalResponseRecive: 0,
        totalPendingSurvey: 1,
        totalMailSent: 0
    });


    let attended = homeContext.surveyStatus.attended??[];
    let notAttended = homeContext.surveyStatus.notAttended??[];

    useEffect(() => {
        
            axios.get(Endpoints.Template.getAllTemplateCount)
            .then((res:any)=>{
                let template:number=res.data.data.templateCount
                let customer:number = res.data.data.customerCount
                let survey:number = res.data.data.surveyCount
                let response:number = res.data.data.responceCount
                setDashboardValue({...dashboardValue,
                    totalTemplate: template,
                    totalCustomer: customer,
                    totalSurveyConducted: survey,
                    totalResponseRecive: response,
                    totalPendingSurvey: 0,
                    totalMailSent: 0
                })
                
            }).catch(err=>{
                console.log(err);
            })

    }, [])




    return (
        <>
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-6">
                        <div className="card has-background-gradient-teal">
                            <div className="my-card">
                                <div className="my-auto mx-auto mt-1">
                                    <h2>{dashboardValue.totalTemplate}</h2>
                                </div>
                                <div className="my-auto px-4 text-center">
                                </div>
                            </div>
                            <div className="card-name">
                                <h5 className="mb-1 mt-2">Total Template</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card has-background-gradient-green">
                            <div className="my-card">
                                <div className="d-flex justify-content-around w-100">
                                    <div className="my-auto px-4 text-center">
                                        <h2>{attended.length}</h2>
                                        <h6 className="mt-1">Total Attended Survey</h6>
                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2></h2>
                                        <h6 className="mt-1"></h6>
                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2>{notAttended.length}</h2>
                                        <h6 className="mt-1">Total Non Attended Survey</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card-name">
                                <h5 className="mb-1">Total Survey Conducted: {dashboardValue.totalSurveyConducted}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card has-background-gradient-blue">
                            <div className="my-card">
                                <div className="d-flex justify-content-around w-100">
                                    <div className="my-auto px-4 text-center">
                                        <h2>{dashboardValue.totalResponseRecive}</h2>
                                        <h6 className="mt-1">Total Responces Recived</h6>
                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2>{dashboardValue.totalPendingSurvey}</h2>
                                        <h6 className="mt-1">Total Pending Survey</h6>
                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2>{dashboardValue.totalMailSent}</h2>
                                        <h6 className="mt-1">Total Mail Sent</h6>
                                    </div>

                                </div>
                            </div>
                            <div className="card-name">

                                <h5 className="mb-1">Survey Reports</h5>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-6">
                        <div className="card has-background-gradient-pink">
                            <div className="my-card">
                                <div className="d-flex justify-content-around w-100">
                                    <div className="my-auto px-4 text-center">
                                        <h2>0</h2>
                                        <h6 className="mt-1">Corner</h6>

                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2>{0}</h2>
                                        <h6 className="mt-1">Music Club</h6>
                                    </div>
                                    <div className="my-auto px-3 text-center">
                                        <h2>{0}</h2>
                                        <h6 className="mt-1">Book Club</h6>
                                    </div>

                                </div>
                            </div>
                            <div className="card-name">

                                <h5 className="mb-1">TBBT Club</h5>
                            </div>

                        </div>
                    </div> */}
                </div >
            </div >
        </>
    )
}