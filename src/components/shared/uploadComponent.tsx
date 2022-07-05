import "../css/emailComponent.css"
import { read, utils } from "xlsx";
import { scheduleSurvey } from "../../environment/models/surveyController";
import { useState } from "react";
export default function UploadComponent() {
    let allData: any[];

    const [file, setFile] = useState('')
    async function submitInput(event: any) {
        event.preventDefault();
        const response = await scheduleSurvey(file,event.target[0].files[0].name)

        console.log(response)
    }

    function handeInput(e: any) {
        setFile(e.target.value)
        let file = e.target.files;
        console.log(file)
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (event:any)=>{
            console.log("DATA",event.target.result)
            setFile(event.target.result)
        }
    }
    return (
        <>
            <form onSubmit={submitInput}>
                <input type="file" accept=".xls,.xlsx" onChange={handeInput} />
                <p>Drag your files here or click in this area.</p>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}