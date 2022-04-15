export default class MenuPreshow {
    constructor(private txtMenu: Node) {}

    public createListener(event: string, handler: EventListener): void {
        this.txtMenu.addEventListener(event, handler)
    }   
}