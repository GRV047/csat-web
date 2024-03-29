import axios from "axios";
import { Endpoints } from "../api";

export async function saveResponse(parameter:any){
    const url=Endpoints.Response.common+`/${parameter.customerId}`;
    return await axios.post(url,parameter)
}

export async function getAllResponses(param:{
    skip:number,
    take:number
}){
    const url = Endpoints.Response.getAll+`?${JSON.stringify(param)}`;
    return await axios.get(url);
}

export async function getResponseById(params:{
    responseId:string
}){
    const url = Endpoints.Response.common+`/${JSON.stringify(params.responseId)}`;
    return await axios.get(url);
}


export async function getResponseByClientId(params:{
    clientId:string,
    surveyId:string
}) {
    const url = `${Endpoints.Response.getResponseById}?clientId=${params.clientId}&surveyId=${params.surveyId}`
    return await axios.get(url)
}
