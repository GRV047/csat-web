import axios from "axios";
import { Endpoints } from "../api";

export async function scheduleSurvey(file:any){
    const url = Endpoints.Survey.getCustomer
    var bodyFormData =  new FormData();
    bodyFormData.append('customers',file)
    console.log(bodyFormData)
    return await axios.post(url,bodyFormData);
}
