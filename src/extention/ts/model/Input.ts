import ListenerAdaptor from "../adaptor/ListenerAdaptor";
import Context from "../Context";
import Initiator from "../interfaces/Initiator";
import HTMLDocument from "./HTMLDocument";

export default class Input implements Initiator {
    private txtInput: HTMLElement;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.txtInput = <HTMLElement> document.getById("input-text");
        this.init();
    }

    public init(): void {
        ListenerAdaptor.add(this.txtInput, 'change', (evt: Event) => {
            console.log(evt)
        })
    }




    
}