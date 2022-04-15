import Context from "../Context";
import Initiator from "../interfaces/Initiator";
import RunContextMap from "../RunContextMap";
import HTMLDocument from "./HTMLDocument";
import Input from "./Input";

export default class Button implements Initiator {
    private button: HTMLElement;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.button = <HTMLElement> document.querySelector(".btn-add-text");
        this.init();
    }

    public init() : void {
        const input: Input = RunContextMap.instance.get(Input.name);
        // this.button.addEventListener('click', (evt: Event) => {
        //     const gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        //     gettingActiveTab.then((tabs) => {
        //         browser.tabs.sendMessage(tabs[0].id, {test: 1234});
        //     });
        // })
    }
}