import FilterInput from "./ts/model/FilterInput";
import TokenContainer from "./ts/model/TokenContainer";
import TokenList from "./ts/model/TokenList";
import RunContextMap from "./ts/RunContextMap";
const filterInput: FilterInput = new FilterInput();
const tokenList: TokenList = new TokenList();
// const contextMap: RunContextMap = RunContextMap.instance;
const tokenContainer: TokenContainer = new TokenContainer();
tokenList.add(TokenContainer.buildHTML("new", "This is not new string", Math.random()))
tokenList.add(TokenContainer.buildHTML("token", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("harasov", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token2", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token3", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token4", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token5", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token6", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token", "On the one side, i dont understand!", Math.random()))
tokenList.add(TokenContainer.buildHTML("token", "On the one side, i dont understand!", Math.random()))

filterInput.addEvent("input", function(e) {
    const target = <HTMLInputElement> e.target;
    console.log(target.value)
    tokenContainer.render(tokenList.filter(target.value))
})

tokenContainer.render(tokenList.list);




// contextMap.add(Button.name, new Button())
// contextMap.add(Input.name, new Input())
// const menu_preshow_list: MenuPreshowList = new MenuPreshowList();
// const menu_list: MenuPreshow[] = menu_preshow_list.menuList;

