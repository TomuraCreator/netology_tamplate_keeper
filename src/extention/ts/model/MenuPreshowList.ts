import Context from "../Context";
import HTMLDocument from "./HTMLDocument";
import MenuPreshow from "./MenuPreshow";

export default class MenuPreshowList {
    private menuPreshowList: NodeList;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.menuPreshowList = <NodeList> document.querySelectorAll("#Flat");
    }

    public *iterator(): Generator<MenuPreshow> {
        if(this.menuPreshowList.length > 0) {
            for (let index = 0; index < this.menuPreshowList.length; index++) {
                yield new MenuPreshow(this.menuPreshowList.item(index));
            }
        }
        return null;
    }
}