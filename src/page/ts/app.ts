import CabinetFabric from "./cabinet/CabinetFabric";
import CabinetInterface from "./interface/CabinetInterface";

const currentCabinet: CabinetInterface = CabinetFabric.makeCabinet();
browser.runtime.onMessage.addListener((request, sender, sendResponse)=> {
    console.log(request, sender, sendResponse)
    
});

currentCabinet.addEventsToButton('click', (event: Event)=> {
    event.preventDefault();
    console.log(123123)
})
