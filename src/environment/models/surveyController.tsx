import axios from "axios";
import { Endpoints } from "../api";

export async function scheduleSurvey(file:any){
    const url = Endpoints.Survey.getCustomer
    var bodyFormData =  new FormData();
    bodyFormData.append('customers',file)
    return await axios.post(url,bodyFormData);
}

export async function get(filter:any) {
    const url = `${Endpoints.Survey.common}/?where=${JSON.stringify(filter.where)}`;
    return await axios.get(url);
}

export async function surveyStates(){
    const url = `${Endpoints.Survey.surveyStates}`;
    return await axios.get(url);
}