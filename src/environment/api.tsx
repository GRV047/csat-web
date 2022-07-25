import { ENVIRONMENT } from "./environment"
const apiAtEndpoint = ENVIRONMENT.url;

class Template {
    readonly common = apiAtEndpoint + '/template';
    readonly getAllTemplate = this.common + '/getAllTemplate'
    readonly getAllTemplateCount = this.common + '/getAllTemplateCount'
}
class SurveyController {
    readonly common = apiAtEndpoint + '/survey';
    readonly getCustomer = this.common + '/scheduleSurvey'
}

class Response {
    readonly common = apiAtEndpoint + '/response';
    readonly getAll = this.common + '/all';
    readonly getResponseById = this.common+'/getResponseById'
}

class Customer {
    readonly common = apiAtEndpoint + '/customer'
    readonly getAllCustomer = this.common+'/all'
}

class API {
    readonly Template = new Template();
    readonly Survey = new SurveyController();
    readonly Response = new Response();
    readonly Customer = new Customer();
}

export const Endpoints = new API()