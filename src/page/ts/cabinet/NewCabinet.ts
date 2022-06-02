import CabinetInterface from "../interface/CabinetInterface";
import Exercise from "../model/Exercise";
import Student from "../model/Student";
import Teacher from "../model/Teacher";
import TeacherBuilder from "../model/TeacherUtil";
import HTMLDocument from "../model/HTMLDocument";
import StudentUtil from "../model/StudentUtil";
import Initiator from "../interface/Initiator";
import Evention from "../interface/Evention";
import { findElementBySubstringSelector } from "../utills";
import { ElementAwaiter } from "../interface/ElementAwaiter";


export default class NewCabinet implements CabinetInterface, Initiator, Evention, ElementAwaiter {
    private studentInitials: Student;
    private teacherInitials: Teacher;
    private exercise: Exercise;
    private button: HTMLElement;

    constructor(document: HTMLDocument) {
        let studentFullName: string = this.getStudentFullName();
        let splitStudentFullName: Array<string> = studentFullName.split(" ");
        this.button = this.getButtonElement(document);
        this.studentInitials = StudentUtil.makeStudentForNewCabinet(splitStudentFullName);
        this.teacherInitials = TeacherBuilder.makeTeacher();
        this.exercise = new Exercise(this.getExerciseTitle());
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
    
    /**
     * @Override
     * 
     */
    public init(): void {
        console.log(this.exercise, this.studentInitials, this.teacherInitials)
    }

    

    private getStudentFullName(): string {
        const selector: string = "features-trainer-trainerTask-components-Task-components-Header-components-User--userName";
        const element:HTMLElement = findElementBySubstringSelector(selector, "span");
        
        return element.innerHTML;
    }

    private getButtonElement(document: HTMLDocument): HTMLElement {
        const element: HTMLElement = <HTMLElement> document.querySelector(".components-trainer-TaskPage-components-Header--buttonReview--2y1-7");
        return element;
    }

    private getExerciseTitle(): string {
        const selector: string = "features-trainer-trainerTask-components-Task-components-Title--titleLink";
        const element:HTMLElement = findElementBySubstringSelector(selector, "a");
        return element.innerHTML;
    }

    public addEventsToButton(events: string, handler: EventListener): void {
        this.button.addEventListener(events, handler);
    }
}