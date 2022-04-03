import CabinetFabric from "./cabinet/CabinetFabric";
import CabinetInterface from "./interface/CabinetInterface";

const currentCabinet: CabinetInterface = CabinetFabric.makeCabinet();
currentCabinet.addEventsToButton('click', (event: Event)=> {
    event.preventDefault();
    console.log(123123)
})
