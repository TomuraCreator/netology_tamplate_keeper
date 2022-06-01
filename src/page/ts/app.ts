
import CabinetFabric from "./cabinet/CabinetFabric";
import OldCabinet from "./cabinet/OldCadinet";
import NewCabinet from "./cabinet/NewCabinet";
import Teacher from "./model/Teacher";
import Exercise from "./model/Exercise";
// import { Message } from "./protocol/model/Message";
import Student from "./model/Student";
import Context from "./Context";
import { waitingContent } from "./utills";


document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded...");

    const href: string = document.location.href;
    const hrefSplit: string[] = href.split('/');
    if(hrefSplit[hrefSplit.length - 1] === "edit#end_form") {
        console.log("Мы в старом кабинете")
        // const oldCabinet: OldCabinet = <OldCabinet> CabinetFabric.makeCabinet();
        console.dir(document.querySelector(".features-trainer-trainerTask-components-Task-components-Header-components-User--userName--1WNyG"))
    } else {
        if(hrefSplit[hrefSplit.length - 2] == "task") {
            console.log("мы в новом кабинете 1");
            waitingContent().then(isExist => {
                if(isExist) {
                    try {
                        const newCabinet: NewCabinet = <NewCabinet> CabinetFabric.makeCabinet();
                        newCabinet.init()
                    } catch (e) {
                        console.log(e)
                    }
                }
            });
        }

        // window.addEventListener("click", event => {
        //     const target: HTMLElement = <HTMLElement> event.target;
        //     const href: string = document.location.href;
        //     const hrefSplit: string[] = href.split('/');
        //     if(target.classList.contains("_-packages-ui-kit-components-v2-Button--button--27Ont")
        //         && hrefSplit[hrefSplit.length - 2] == "task") {
                
        //         console.log("мы в новом кабинете");

        //         const newCabinet: NewCabinet = <NewCabinet> CabinetFabric.makeCabinet();
        //         newCabinet.init()
        //         const teacher: Teacher = newCabinet.getTeacher();
        //         const exercise: Exercise = newCabinet.getExercise();
        //         const student: Student = newCabinet.getStudent();
               

        //         // const port: browser.runtime.Port = browser.runtime.connect({name: "Netology_template_kepper"});
        //         // port.postMessage({email: teacher.getEmail});
        //         // port.onMessage.addListener( (msg: Message) => {
        //         //     if(msg.result) {
        //         //          // формируем новый объект для хранилища
        //         //         const storageValue: any = {
        //         //             global: {
        //         //                 data: []
        //         //             },
        //         //             local: {
        //         //                 data: []
        //         //             },
        //         //             page: {
        //         //                 data: []
        //         //             }
        //         //         }
        //         //         // Добавляем в объект для хранилища
        //         //         storageValue.page.data.push({token_name: "st_name", token_value: student.firstName})
        //         //         storageValue.page.data.push({token_name: "ex_name", token_value: exercise.getNameOfWork})
        //         //         // добавляем в хранилище
        //         //         sessionStorage.setItem("netology_state_keeper", JSON.stringify(storageValue))

        //         //         // проверяем есть ли он в хранилище
        //         //         if(sessionStorage.getItem("netology_state_keeper")) {
        //         //             console.log("В хранилище присутствует")
        //         //             const port2 = browser.runtime.connect({name: "popup_to"});
        //         //             port2.postMessage({
        //         //                 action: "reload",
        //         //                 data: storageValue
        //         //             })
        //         //         }
        //         //     }
        //         // }) 
        //     }
        // })
    }
})
