import Context from "./Context"
import HTMLDocument from "./model/HTMLDocument";

export default class UserAgent {
    public static isThatNewCabinet(): boolean {
        let document: HTMLDocument = new Context().getDocument;
        let href: string = document.location.href;
        const pathElement: Array<string> = href.split("/");
        return !pathElement.includes("backend");
    }
}