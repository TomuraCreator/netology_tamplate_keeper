import CabinetFabric from "./cabinet/CabinetFabric";
import CabinetInterface from "./interface/CabinetInterface";

const currentCabinet: CabinetInterface = CabinetFabric.makeCabinet();
console.log(2)

const handler = (request: any, sender: any, sendResponse: any)=> {
    console.log(request, sender, sendResponse)
}
browser.runtime.onMessage.addListener(handler);

currentCabinet.addEventsToButton('click', (event: Event)=> {
    event.preventDefault();
    console.log(123123)
})
