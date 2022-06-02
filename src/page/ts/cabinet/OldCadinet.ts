import HTMLDocument from "../model/HTMLDocument";
import Student from "../model/Student";
import Teacher from "../model/Teacher";
import CabinetInterface from "../interface/CabinetInterface";
import TeacherBuilder from "../model/TeacherUtil";
import Exercise from "../model/Exercise";
import StudentUtil from "../model/StudentUtil";
import Initiator from "../interface/Initiator";
import Evention from "../interface/Evention";
import { ElementAwaiter } from "../interface/ElementAwaiter";

export default class OldCabinet implements CabinetInterface, Initiator, Evention, ElementAwaiter {
    private studentInitials: Student;
    private teacherInitials: Teacher;
    private exercise: Exercise;

    private button: HTMLElement;
    
    constructor(document: HTMLDocument) {
        let stringBreadcrumbs: string = this.getInnerTextBreadcrumbs(document);
        let splitStringBreadcrumbs: Array<string> = stringBreadcrumbs.split("|");

        
        this.studentInitials = StudentUtil.makeStudentForOldCabinet(splitStringBreadcrumbs[0]);
        this.teacherInitials = TeacherBuilder.makeTeacher();
        this.exercise = new Exercise(splitStringBreadcrumbs[1].trim());
    }

    /**
     * @override
     * @param selector
     * @param element 
     */
    waitFor(selector: string, element?: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


    /**
     * @override
     * 
     */
    getTeacher(): Teacher {
        return this.teacherInitials;
    }

    /**
     * @override
     * 
     */
    getStudent(): Student {
        return this.studentInitials;
    }

    /**
     * @override
     * 
     */
    getExercise(): Exercise {
        return this.exercise;
    }
    
    public init(): void {
        console.log(this.exercise, this.studentInitials, this.teacherInitials)
    }


    private getInnerTextBreadcrumbs(document: HTMLDocument): string {
        const element: HTMLElement = <HTMLElement> document.querySelector(".breadcrumb li:last-child");
        return element.innerText;
    }

    public addEventsToButton(events: string, handler: EventListener): void {
        this.button.addEventListener(events, handler);
    }
}