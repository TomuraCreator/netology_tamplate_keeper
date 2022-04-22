import FilterInput from "./ts/model/FilterInput";
import TokenContainer from "./ts/model/TokenContainer";
import TokenList from "./ts/model/TokenList";
import AddTokenBtn from "./ts/model/AddTokenBtn";
import Editor from "./ts/model/Editor";
import Context from "./ts/Context";
import HTMLDocumentEvents from "./ts/model/HTMLDocumentEvents";

const htmlDocumentEvents: HTMLDocumentEvents = Context.getContext.getDocumentEvent;
const filterInput: FilterInput = new FilterInput();
const tokenList: TokenList = new TokenList();
const addTokenBtn: AddTokenBtn = new AddTokenBtn();
const editor: Editor = new Editor();
const tokenContainer: TokenContainer = new TokenContainer();
editor.init();

filterInput.addEvent("input", function(e) {
    const target = <HTMLInputElement> e.target;
    tokenContainer.render(tokenList.filter(target.value))
})

addTokenBtn.addEvent("click", function(e) {
    editor.show();
})

tokenContainer.render(tokenList.list);

htmlDocumentEvents.on("click", function(evt) {
    const target: HTMLElement = <HTMLElement> evt.target;
    if(target.classList.contains("add_new_token")) {
        const closest: HTMLElement = target.closest(".form_to_editor");
        const input: HTMLInputElement = <HTMLInputElement> closest.firstElementChild.firstElementChild;
        tokenList.add(TokenContainer.buildHTML(input.value, editor.easymde.value(), Math.random()*100))
        tokenContainer.render(tokenList.list);
        editor.hide();
    }

    if(target.classList.contains("window_token_close")) {
        editor.hide();
    }
})