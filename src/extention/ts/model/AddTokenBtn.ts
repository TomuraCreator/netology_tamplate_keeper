import Context from "../Context";
import HTMLDocument from "./HTMLDocument";

export default class AddTokenBtn {
    private containerElement: HTMLElement;
    
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.containerElement = <HTMLElement> doc.querySelector(".token_container");
    }

    public addEvent(event: string, handler: EventListener): void {
        this.containerElement.addEventListener(event, handler);
    }

}