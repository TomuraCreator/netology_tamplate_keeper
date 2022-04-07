export default class ListenerAdaptor {
    public static add(bindContext: Element, event: string, handler: EventListener ): void {
        bindContext.addEventListener(event, handler)
    }
}