import * as EasyMDE from "easymde";
import Context from "../Context";
import HTMLDocument from "./HTMLDocument";

export default class Editor {
    private editor: HTMLElement;
    private editorMDEContainer: EasyMDE;
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.editor = <HTMLElement> doc.getById("text_edit");
    }

    public init(settings: EasyMDE.Options) {
        this.editorMDEContainer = new EasyMDE(settings);
    }
}