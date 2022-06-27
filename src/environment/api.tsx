import { ENVIRONMENT } from "./environment"
const apiAtEndpoint = ENVIRONMENT.url;
export const template = {
    getTemplate: apiAtEndpoint+'/template'
}

class Template{
    readonly common = apiAtEndpoint+'/template';
}

class API{
    readonly Template = new Template();
}

export const Endpoints=new API()