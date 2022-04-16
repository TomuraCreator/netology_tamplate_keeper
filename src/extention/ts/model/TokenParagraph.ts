import TokenKey from "./TokenKey";
import TokenValue from "./TokenValue";

export default class TokenParagraph {

    constructor() {}

    public compareKey(compairingKey: string): boolean {
        return false;
    }

    // public toggleVisible() {
    //     this.token.classList.toggle("show");
    // }

    public static buildHTML(key: string, value: string): HTMLElement {
        const paragraph: HTMLElement = document.createElement("P");
        paragraph.classList.add("preshow_textarea", "unselectable")
        paragraph.appendChild(TokenKey.buildHTML(key));
        paragraph.appendChild(TokenValue.buildHTML(value));
        return paragraph;
    }
}