export default class RunContextMap {
    private contextMap: Map<string, any>;
    private static runContextMap: RunContextMap;

    private constructor() {
        this.contextMap = new Map<string, any>()
    }

    public static get instance(): RunContextMap{
        if(RunContextMap.runContextMap === undefined) {
            RunContextMap.runContextMap = new RunContextMap();
        }
        return RunContextMap.runContextMap;
    }

    public getClass(className: string): any {
        return this.contextMap.get(className);
    } 

    public add(name: string, obj: any): void {
        this.contextMap.set(name, obj);
    }

    public get(name: string): any {
        return this.contextMap.get(name);
    }

    public has(name: string): boolean {
        return this.contextMap.has(name);
    }

}