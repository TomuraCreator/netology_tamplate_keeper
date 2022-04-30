Request
import { HTTPMethods } from "../enums/HTTPMethods";
import { Message } from "../protocol/model/Message";
import { Request } from "./Request";

export default class RequestBuilder {
    private method: HTTPMethods = HTTPMethods.GET;
    private msg: Message;
    private host: string; 
    
    constructor() {}

    public setPostMethod(): RequestBuilder {
        this.method = HTTPMethods.POST;
        return this;
    }

    public setPutMethod(): RequestBuilder {
        this.method = HTTPMethods.PUT;
        return this;
    }

    public setDeleteMethod(): RequestBuilder {
        this.method = HTTPMethods.DELETE;
        return this;
    }

    public setPatchMethod(): RequestBuilder {
        this.method = HTTPMethods.PATCH;
        return this;
    }

    public setHost(host: string): RequestBuilder {
        this.host = host;
        return this;
    }

    public setData(message: Message): RequestBuilder {
        this.msg = message;
        return this;
    }

    public build(): Request {
        if(!!this.build && !!this.host) {
            throw Error("Request builder has not got build or host value")
        }
        return new Request(this.method, this.host, this.msg);
    }
}