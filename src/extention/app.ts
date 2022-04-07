import Button from "./ts/model/Button";
import Input from "./ts/model/Input";
import RunContextMap from "./ts/RunContextMap";

const contextMap: RunContextMap = RunContextMap.instance;

// const elem = <HTMLElement> document.querySelector(".btn-add-text");
// elem.addEventListener("click", (e)=> {
//     browser.tabs.executeScript({
//                 code: "console.log(1)"
//             })
// })
contextMap.add(Button.name, new Button())
contextMap.add(Input.name, new Input())