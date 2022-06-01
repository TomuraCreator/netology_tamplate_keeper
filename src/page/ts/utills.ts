/**
 * 
 * @returns Promise
 */
function waitingContent(): Promise<boolean> {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            const selector = "features-trainer-trainerTask-components-Task-components-Header-components-User--userName";
            let waitingFlag = false;
            const wa = findElementBySubstringSelector(selector, 'span');
            if(wa) {
                waitingFlag = !waitingFlag
            }
            if(waitingFlag) {
                clearInterval(interval);
                resolve(true);
            }
        }, 500)
    })
    
}

/**
 * Ищет на странице {@param elementTagStr @link string} элемент с классом подстрокой.
 * @param subselector 
 * @param elementTagStr 
 * @returns {@link HTMLElement} || null
 */
function findElementBySubstringSelector(subselector: string, elementTagStr: string): HTMLElement {
    const elements: NodeList = document.querySelectorAll(elementTagStr);
    const element: HTMLElement = <HTMLElement> Array.from(elements).find((element: HTMLElement) => {
        return Array.from(element.classList).find((el: string) => el.includes(subselector))
    })
    return element;
}

export {findElementBySubstringSelector, waitingContent};