import Context from "../Context";
import HTMLDocument from "../model/HTMLDocument";
import UserAgent from "../UserAgent";
import CabinetInterface from "../interface/CabinetInterface";
import NewCabinet from "./NewCabinet";
import OldCabinet from "./OldCadinet";

export default class CabinetFabric {
    public static loadingCabinet(): Promise<CabinetInterface> {

        return new Promise((resolve, reject) => {
            // TODO: set interval limit into env 
            const totalCountIntervalTimeout: number = 20000;
            let interval = setInterval(() => {
                let document: HTMLDocument = new Context().getDocument;
                if (!UserAgent.isThatNewCabinet()) {
                    console.log("Мы в старом кабинете");
                    resolve(new OldCabinet(document));
                    clearInterval(interval);
                }

                if(UserAgent.isThatNewCabinet()) {
                    console.log("мы в новом кабинете");
                    resolve(new NewCabinet(document));
                    clearInterval(interval);
                }
            }, 500)
        })
    }
}