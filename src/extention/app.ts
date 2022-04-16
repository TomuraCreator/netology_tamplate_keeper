import Button from "./ts/model/Button";
import Input from "./ts/model/Input";
import MenuPreshow from "./ts/model/MenuSVGButton";
import MenuPreshowList from "./ts/model/MenuPreshowList";
import RunContextMap from "./ts/RunContextMap";

const contextMap: RunContextMap = RunContextMap.instance;

contextMap.add(Button.name, new Button())
contextMap.add(Input.name, new Input())
const menu_preshow_list: MenuPreshowList = new MenuPreshowList();
const menu_list: MenuPreshow[] = menu_preshow_list.menuList;

