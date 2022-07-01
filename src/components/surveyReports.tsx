import './css/home.css'
import { useEffect, useState } from 'react';
import TableComponent from './shared/tabelComponent';
import { getAllResponses, getResponseById } from '../environment/models/rsponse';




export default function SurveyReports() {

    const [viewTabel, setViewTabel] = useState(true);
    let responses: any = [
        {
            "id": "1",
            "templateName": "Leanne Graham",
            "status": "Pending",
            "date": "30-01-2022",
            "phone": "1-770-736-8031 x56442",
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"

        },
        {
            "id": "2",
            "templateName": "Ervin Howell",
            "status": "Pending",
            "date": "30-01-2022",
            "phone": "010-692-6593 x09125",
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        },
        {
            "id": "3",
            "templateName": "Clementine Bauch",
            "status": "Pending",
            "date": "30-01-2022",
            "phone": "1-463-123-4447",
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        },
        {
            "id": "4",
            "templateName": "Patricia Lebsack",
            "status": "Done",
            "date": "30-01-2022",
            "phone": "493-170-9623 x156",
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        },
        {
            "id": "5",
            "templateName": "Chelsey Dietrich",
            "phone": "(254)954-1289",
            "status": "Pending",
            "date": "30-01-2022",
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        },
        {
            "id": "6",
            "templateName": "Mrs. Dennis Schulist",
            "status": "Pending",
            "date": "30-01-2022",
            "phone": "1-477-935-8478 x6430",
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        },
    ];

    // useEffect(()=>{
    //     responses = getAllResponses({take:100,skip:100})
    // },[])

    console.log(responses)
    async function openDetails(e: any) {
        e.preventDefault();
        console.log(e.target.value)
        let parameter = {
            responseId:e.target.value
        }
        const response:any = await getResponseById(parameter);

        if(response.length>0){
            setViewTabel(false);
        }
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
            </div>
        </>
    )
}