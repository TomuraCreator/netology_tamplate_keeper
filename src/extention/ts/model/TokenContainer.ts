import Context from "../Context";
import HTMLDocument from "./HTMLDocument";
import TokenList from "./TokenList";

export default class TokenContainer {
    private containerElement: HTMLElement;
    private tokenList: TokenList;
    
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.containerElement = <HTMLElement> doc.querySelector(".token_container");
    }

    // public filter(searchKey: string): TokenList {

    // }
}