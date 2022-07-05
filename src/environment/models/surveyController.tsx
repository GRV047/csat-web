import axios from "axios";
import { Endpoints } from "../api";

export async function scheduleSurvey(object:any,fileNam:string){
    const url = Endpoints.Survey.getCustomer
    return await axios.post(url,object);
}