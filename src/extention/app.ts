import Button from "./ts/model/Button";
import Input from "./ts/model/Input";
import MenuPreshow from "./ts/model/MenuPreshow";
import MenuPreshowList from "./ts/model/MenuPreshowList";
import RunContextMap from "./ts/RunContextMap";

const contextMap: RunContextMap = RunContextMap.instance;

contextMap.add(Button.name, new Button())
contextMap.add(Input.name, new Input())
const menu_list: MenuPreshowList = new MenuPreshowList();
const generator_menu_list: Generator<MenuPreshow> = menu_list.iterator(); 

console.log(generator_menu_list)