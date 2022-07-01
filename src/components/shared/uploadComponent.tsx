import "../css/emailComponent.css"
import { read, utils } from "xlsx";
import { scheduleSurvey } from "../../environment/models/surveyController";
export default function UploadComponent() {
    let allData :any[];
    async function submitInput(event:any){
        event.preventDefault();
        let workBook
        let reader = new FileReader();
        let file = event.target.value[0];
        // file? reader.readAsBinaryString(file):null;
        // reader.onload = async(event)=>{
        //     const data = reader.result;
        //     workBook = read(data,{type:"binary"});
        //     const sheedData= utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);
        //     allData = sheedData;
        // }

        const response = await scheduleSurvey(file)

        console.log(response)
    }
    return (
        <>
            <form onSubmit={submitInput}>
                <input type="file" accept=".xls,.xlsx"/>
                <p>Drag your files here or click in this area.</p>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}