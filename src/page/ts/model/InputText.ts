import ListenerAdapter from "./ListenerAdapter";
import Context from "../Context";
import Initiator from "../interface/Initiator";
import HTMLDocument from "./HTMLDocument";

export default class Input implements Initiator {
    private txtInput: HTMLElement;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.txtInput = <HTMLElement> document.querySelector(".CodeMirror-scroll");
        this.init();
    }

    public init(): void {
        ListenerAdapter.add(this.txtInput, 'change', (evt: Event) => {
            const target: HTMLElement = <HTMLElement> evt.target;
            console.log(target.innerHTML);
        })
    }
}