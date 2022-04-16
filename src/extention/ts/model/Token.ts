import TokenKey from "./TokenKey";
import TokenValue from "./TokenValue";

export default class Token {

    constructor(private token_key: TokenKey, private token_value: TokenValue, private token: HTMLElement) {}

    public compareKey(compairingKey: string): boolean {
        return false;
    }

    public toggleVisible() {
        this.token.classList.toggle("show");
    }

    public static buildHTML() {
        const div_token: HTMLElement = document.createElement("DIV");
        div_token.classList.add("token show");
        div_token
    }
}