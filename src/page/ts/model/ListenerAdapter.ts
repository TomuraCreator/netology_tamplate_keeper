export default class ListenerAdapter {
    public static add(bindContext: Element, event: string, handler: EventListener ): void {
        bindContext.addEventListener(event, handler)
    }
}