import Context from "../Context";
import HTMLDocument from "../model/HTMLDocument";
import UserAgent from "../UserAgent";
import CabinetInterface from "../interface/CabinetInterface";
import NewCabinet from "./NewCabinet";
import OldCabinet from "./OldCadinet";

export default class CabinetFabric {
    public static makeCabinet(): CabinetInterface {
        let document: HTMLDocument = Context.getContext.getDocument;
        return UserAgent.isThatNewCabinet() ? new NewCabinet(document) : new OldCabinet(document);
    }
}