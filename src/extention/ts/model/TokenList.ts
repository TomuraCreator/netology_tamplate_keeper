import Token from "./TokenParagraph";

export default class TokenList {
    private tokenArray: Token[];
    constructor() {
        this.tokenArray = new Array<Token>();
    }

    public add(token: Token): void {
        this.tokenArray.push(token);
    }

    public filter(searchKey: string): Token[] {
        return this.tokenArray.filter(function(token) {

        })
    }

    // private tokenLists(): Token[] {
    //     if(this.tokenList.length > 0) {
    //         const newTokens: Token[] = new Array<Token>();
    //         for (let index = this.tokenList.length - 1; index >= 0; index--) {
    //             newTokens.push(new Token(this.tokenList.item(index)))
    //         }
    //         return newTokens;
    //     }
    //     return null;
    // }


}