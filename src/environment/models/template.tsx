import axios from "axios";
import { Endpoints } from "../api";


export async function getTemplateById(id:string){
    const url = `${Endpoints.Template.common}/${id}`;
    return await axios.get(url);
}

export async function getAllTemplate(param:{
    skip:number,
    take:number
}){
    const url = Endpoints.Template.getAllTemplate+`?${JSON.stringify(param)}`;
    return await axios.get(url);
}

