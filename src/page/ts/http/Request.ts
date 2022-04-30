import { HTTPMethods } from "../enums/HTTPMethods";
import { Message } from "../protocol/model/Message";

export class Request {    
    constructor(private method: HTTPMethods, private host: string,  private body: Message) {}

    private getFetch(): Promise<Response> {
        return fetch(this.host + this.body.data.email);
    }

    private otherFetch(): Promise<Response> {
        return fetch(this.host, {
            method: this.method.toString(),
            headers: {
                "Content-Type": "application/json:charset=utf-8"
            },
            body: JSON.stringify(this.body)
        });
    }

    public fetch(): Promise<Response> {
        if(this.method == HTTPMethods.GET) {
            return this.getFetch();
        }
        return this.otherFetch();
    } 
}