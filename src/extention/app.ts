import Button from "./ts/model/Button";
import Input from "./ts/model/Input";
import MenuPreshow from "./ts/model/MenuPreshow";
import MenuPreshowList from "./ts/model/MenuPreshowList";
import RunContextMap from "./ts/RunContextMap";

const contextMap: RunContextMap = RunContextMap.instance;

contextMap.add(Button.name, new Button())
contextMap.add(Input.name, new Input())
const menu_preshow_list: MenuPreshowList = new MenuPreshowList();
const menu_list: MenuPreshow[] = menu_preshow_list.menuList;

menu_list.forEach((el: MenuPreshow) => el.createListener("click", function(e) {
    const father: HTMLElement = this.closest(".preshow");
    this.classList.toggle("rotate");

    if(father) {
        const show: HTMLElement = father.querySelector(".menu_list_wrapper");
        show.classList.toggle("show");
    }
}))
