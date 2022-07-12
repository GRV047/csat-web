import './css/home.css'
import { useContext, useState } from 'react';
import TableComponent from './shared/tabelComponent';
import ResponseComponent from './shared/responseConponent';
import surveyReponse from '../surveyResponses';
import { ReportContext } from './context/reportsContext';




export default function SurveyReports() {

    const reportContext = useContext(ReportContext)
    const [viewTabel, setViewTabel] = useState(true);
    
    let responses = reportContext.allCustomer

    console.log(responses)
    async function openDetails(e: any) {
        e.preventDefault();
        console.log(e.target.value)
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
                    viewTabel===false && (
                        <div className="row mt-5 tabel_container">
                            <ResponseComponent dataSource={surveyReponse}/>
                        </div>
                        )
                }
            </div>
        </>
    )
}