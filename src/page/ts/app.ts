
import CabinetFabric from "./cabinet/CabinetFabric";
import CabinetInterface from "./interface/CabinetInterface";
import OldCabinet from "./cabinet/OldCadinet";
import NewCabinet from "./cabinet/NewCabinet";
import RequestBuilder from "./http/RequestBuilder";
import { Request } from "./http/Request";


(() => {
    console.log("Script loaded...");
    const href: string = document.location.href;
    const hrefSplit: string[] = href.split('/');
    if(hrefSplit[hrefSplit.length - 1] === "edit#end_form") {
        console.log("Мы в старом кабинете")
        const oldCabinet: OldCabinet = <OldCabinet> CabinetFabric.makeCabinet();
    } else {
        window.addEventListener("click", event => {
            const target: HTMLElement = <HTMLElement> event.target;
            const href: string = document.location.href;
            const hrefSplit: string[] = href.split('/');
            if(target.classList.contains("_-packages-ui-kit-components-v2-Button--button--27Ont")
                && hrefSplit[hrefSplit.length - 2] == "task") {
                console.log("мы в новом кабинете");
                const newCabinet: NewCabinet = <NewCabinet> CabinetFabric.makeCabinet();
                fetch("localhost:3000/api/experts/s").then(console.log)
                const req: Request = new RequestBuilder().setHost("http://localhost:3000/api/expert/")
                .setData({
                    data: {
                        email: "sadasd"
                    }
                }).build();

                req.fetch().then(console.log)
                
            }
        })
    }
})();



