console.log("Script loaded...");
import CabinetFabric from "./cabinet/CabinetFabric";
import CabinetInterface from "./interface/CabinetInterface";
(() => {
    const href: string = document.location.href;
    const hrefSplit: string[] = href.split('/');
    if(hrefSplit[hrefSplit.length - 1] === "edit#end_form") {
        console.log("Мы в старом кабинете")
        const oldCabinet: CabinetInterface = CabinetFabric.makeCabinet();
        oldCabinet.init();
    } else {
        window.addEventListener("click", event => {
            const target: HTMLElement = <HTMLElement> event.target;
            const href: string = document.location.href;
            const hrefSplit: string[] = href.split('/');
            if(target.classList.contains("_-packages-ui-kit-components-v2-Button--button--27Ont")
                && hrefSplit[hrefSplit.length - 2] == "task") {
                console.log("мы в новом кабинете");
                const newCabinet: CabinetInterface = CabinetFabric.makeCabinet();
                newCabinet.init();
            }
        })
    }
})();



