import axios from "axios";
import { Endpoints } from "../api";

export async function getCustomerById(id:string){
    const url = Endpoints.Customer.common+`/${id}`
    return await axios.get(url);
}

export async function getAllCustomer(filter:any) {
    const url = Endpoints.Customer.getAllCustomer+`?${JSON.stringify(filter)}`;
    return await axios.get(url);
}