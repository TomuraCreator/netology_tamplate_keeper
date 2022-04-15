export default class VarList {
    private varList: Map<string, string>;
    
    constructor() {
        this.varList = new Map();
        //TODO написать номральную подгрузку данных
        this.varList.set("test", "Это тестовая строка");
        this.varList.set("master", "Это тестовая строка");
    }

    public has(compairingString: string): boolean {
        return this.varList.has(compairingString);
    }

    public getValue(key: string): string | null {
        if(this.has(key)) {
            return this.varList.get(key);
        } else {
            return null;
        }
    }
}