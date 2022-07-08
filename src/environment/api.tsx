import { ENVIRONMENT } from "./environment"
const apiAtEndpoint = ENVIRONMENT.url;

class Template{
    readonly common = apiAtEndpoint+'/template';
}
class SurveyController{
    readonly common = apiAtEndpoint+'/survey';
    readonly getCustomer = this.common+'/scheduleSurvey'
}

class Response{
    readonly common = apiAtEndpoint+'/response';
    readonly getAll = this.common+'/all';
}

class Customer{
    readonly common = apiAtEndpoint+'/customer'
}

class API{
    readonly Template = new Template();
    readonly Survey =new SurveyController();
    readonly Response = new Response();
    readonly Customer = new Customer();
}

export const Endpoints=new API()