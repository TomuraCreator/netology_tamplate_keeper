import Token from "./Token";

export default class TokenList {
    private tokenList: NodeList;
    private tokenArray: Token[];
    constructor() {

        this.tokenList = <NodeList> document.querySelectorAll(".token");
    }

    public get tokenLists(): Token[] {
        if(this.tokenList.length > 0) {
            const newTokens: Token[] = new Array<Token>();
            for (let index = this.tokenList.length - 1; index >= 0; index--) {
                newTokens.push(new Token(this.tokenList.item(index)))
            }
            return newTokens;
        }
        return null;
    }


}