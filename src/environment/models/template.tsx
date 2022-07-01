import axios from "axios";
import { Endpoints } from "../api";


export async function getTemplateById(id:string){
    const url = `${Endpoints.Template.common}/${id}`;
    return await axios.get(url);
}