window.addEventListener("click", event => {
    const target: HTMLElement = <HTMLElement> event.target;
    const href: string = document.location.href;
    const hrefSplit: string[] = href.split('/');
    if(target.classList.contains("_-packages-ui-kit-components-v2-Button--button--27Ont")
        && hrefSplit[hrefSplit.length - 2] == "task") {
        console.log("мы в новом кабинете")
        console.log(document.querySelector(".components-trainer-TaskPage-components-Header--buttonReview--2y1-7"))
    }
    console.log(hrefSplit)
})