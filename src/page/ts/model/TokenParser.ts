import { Token } from "../enums/Token";
import VarList from "../storage/VarList";

export default class TokenParser {

    private static searchPrefixIndex(originalText: string): number {
        return originalText.indexOf(Token.PREFIX);
    }

    public static catchVar(originalText: string): string | null {
        let isFind: number = TokenParser.searchPrefixIndex(originalText);
        if(isFind > -1) {
            let akumString: string = "";
            for(let i: number = isFind + Token.PREFIX.length; i < originalText.length; i++) {
                if(originalText[i] != Token.POSTFIX) {
                    akumString += originalText[i];
                } else {
                    break;
                }
            }
            const varList = new VarList();
            return varList.has(akumString) ? akumString : null;
        } else {
            return null;
        }
    }

    public static replace(originalText: string, varKey: string) {
        return originalText.replace(Token.PREFIX + varKey + Token.POSTFIX, new VarList().getValue(varKey));
    }
}