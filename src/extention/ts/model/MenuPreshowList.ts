import Context from "../Context";
import HTMLDocument from "./HTMLDocument";
import MenuPreshow from "./MenuPreshow";

export default class MenuPreshowList {
    private menuPreshowList: NodeList;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.menuPreshowList = <NodeList> document.querySelectorAll("#Flat");
    }

    public get menuList(): MenuPreshow[] {
        if(this.menuPreshowList.length > 0) {
            const newList: MenuPreshow[] = new Array<MenuPreshow>();
            for (let index = this.menuPreshowList.length - 1; index >= 0; index--) {
                newList.push(new MenuPreshow(this.menuPreshowList.item(index)))
            }
            return newList;
        }
        return null;
    }
}