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

class API{
    readonly Template = new Template();
    readonly Survey =new SurveyController();
    readonly Response = new Response();
}

export const Endpoints=new API()