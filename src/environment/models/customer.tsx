import axios from "axios";
import { Endpoints } from "../api";

export function getCustomerById(id:string){
    const url = Endpoints.Customer.common+`/${id}`
    return axios.get(url);
}