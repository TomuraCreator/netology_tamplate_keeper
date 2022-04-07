export default interface CabinetInterface {
    init(): void;
    addEventsToButton(events: string, handler: EventListener): void;
}