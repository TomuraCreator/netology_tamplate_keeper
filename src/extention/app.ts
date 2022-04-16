import FilterInput from "./ts/model/FilterInput";
import TokenContainer from "./ts/model/TokenContainer";
import TokenList from "./ts/model/TokenList";
import RunContextMap from "./ts/RunContextMap";
import * as EasyMDE from 'easymde';
import AddTokenBtn from "./ts/model/AddTokenBtn";
import Editor from "./ts/model/Editor";

const filterInput: FilterInput = new FilterInput();
const tokenList: TokenList = new TokenList();
const addTokenBtn: AddTokenBtn = new AddTokenBtn();

const tokenContainer: TokenContainer = new TokenContainer();

filterInput.addEvent("input", function(e) {
    const target = <HTMLInputElement> e.target;
    console.log(target.value)
    tokenContainer.render(tokenList.filter(target.value))
})

addTokenBtn.addEvent("click", function(e) {
    console.log(1)
})

tokenContainer.render(tokenList.list);

// const easy: EasyMDE = new EasyMDE({
//     autofocus: true,
//     autosave: {
//         enabled: true,
//         uniqueId: "MyUniqueID",
//         delay: 1000,
//         submit_delay: 5000,
//         timeFormat: {
//             locale: 'en-US',
//             format: {
//                 year: 'numeric',
//                 month: 'long',
//                 day: '2-digit',
//                 hour: '2-digit',
//                 minute: '2-digit',
//             },
//         },
//         text: "Autosaved: "
//     },
//     blockStyles: {
//         bold: "__",
//         italic: "_",
//     },
//     element: document.getElementById("text_edit"),
//     forceSync: true,
//     hideIcons: ["guide", "heading"],
//     indentWithTabs: false,
//     initialValue: "Hello world!",
//     insertTexts: {
//         horizontalRule: ["", "\n\n-----\n\n"],
//         image: ["![](http://", ")"],
//         link: ["[", "](https://)"],
//         table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
//     },
//     lineWrapping: false,
//     minHeight: "500px",
//     parsingConfig: {
//         allowAtxHeaderWithoutSpace: true,
//         strikethrough: false,
//         underscoresBreakWords: true,
//     },
//     placeholder: "Type here...",

//     previewClass: "my-custom-styling",
//     promptURLs: true,
//     promptTexts: {
//         image: "Custom prompt for URL:",
//         link: "Custom prompt for URL:",
//     },
//     renderingConfig: {
//         singleLineBreaks: false,
//         codeSyntaxHighlighting: true
//     },
//     shortcuts: {
//         drawTable: "Cmd-Alt-T"
//     },
//     showIcons: ["code", "table"],
//     spellChecker: false,
//     status: false, // Optional usage
//     styleSelectedText: false,
//     sideBySideFullscreen: false,
//     syncSideBySidePreviewScroll: false,
//     tabSize: 4,
//     toolbar: false,
//     toolbarTips: false,
// })
