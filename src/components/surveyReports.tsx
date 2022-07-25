import './css/home.css'
import { useContext, useState } from 'react';
import TableComponent from './shared/tabelComponent';
import ResponseComponent from './shared/responseConponent';
import { ReportContext } from './context/reportsContext';
import { get } from '../environment/models/surveyController';
import { getCustomer } from '../environment/models/customer';

import './css/reports.css'



let customerDetails: any
let surveyDetailTabel: any = []
let clientDetailsTabel: any = []

export default function SurveyReports() {

    const reportContext = useContext(ReportContext)
    const [viewTabel, setViewTabel] = useState(true);
    let responses = reportContext.allCustomer


    async function openDetails(e: any) {
        e.preventDefault();


        const surveyResponses: any = await get({ where: {} });


        if (surveyResponses.data.data.length > 0) {
            surveyResponses.data.data.forEach((element: any, i: number) => {
                const res = element.customersPassed.filter((x: string) => x.toString() === e.target.value.toString())
                if (res) {
                    surveyDetailTabel[i] = element
                }
            });
        }

        if (surveyDetailTabel.length > 0) {
            customerDetails = await getCustomer({ where: { _id: e.target.value } })
        }

        if (surveyDetailTabel.length > 0 && customerDetails.status === 200) {
            setViewTabel(false)

            clientDetailsTabel[0] = (
                <div className="row mt-5 tabel_container">
                    <ResponseComponent dataSource={surveyDetailTabel} customerDetails={customerDetails.data.data} />
                </div>
            )
        }
    }

    function handelVisibility(e: any) {
        e.preventDefault();
        setViewTabel(true)
    }

    return (
        <>
            <div className="container">
                {
                    viewTabel && (
                        <div className="row mt-5 tabel_container">
                            <TableComponent openDetails={openDetails} dataSource={responses} />
                        </div>
                    )
                }
                {
                    viewTabel === false ? clientDetailsTabel : null
                }
            </div>
            {
                viewTabel === false ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                                <button type="button" className="btn btn-dark button_report" onClick={handelVisibility}>Back</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}