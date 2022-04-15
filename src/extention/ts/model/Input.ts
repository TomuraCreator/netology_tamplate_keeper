import Context from "../Context";
import Initiator from "../interfaces/Initiator";
import HTMLDocument from "./HTMLDocument";

export default class Input implements Initiator {
    private txtInput: HTMLElement;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        // this.txtInput = <HTMLElement> document.getById("input-text");
        this.init();
    }

    public init(): void {
        // this.txtInput.addEventListener('change', (evt: Event) => {
        //     console.log(evt)
        // })
    }




    
}