export default class Token {
    private token?: HTMLElement;
    private token_key?: HTMLElement;
    private token_value?: HTMLElement;

    constructor(node: Node) {
        this.token = <HTMLElement> node;
        this.token_key = <HTMLElement> this.token.querySelector(".token_key");
        this.token_value = <HTMLElement> this.token.querySelector(".token_value");
    }

    public toggleVisible() {
        this.token.classList.toggle("show");
    }
}