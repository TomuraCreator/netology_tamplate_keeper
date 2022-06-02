export interface ElementAwaiter {
    // ожидает появления элемента в DOM дереве
    waitFor(selector: string, element?: string): Promise<boolean>;
}