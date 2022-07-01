import axios from "axios";
import { Endpoints } from "../api";

export async function scheduleSurvey(object:any){
    const url = Endpoints.Survey.getCustomer+`?req=${JSON.stringify(object)}`
    return await axios.get(url);
}