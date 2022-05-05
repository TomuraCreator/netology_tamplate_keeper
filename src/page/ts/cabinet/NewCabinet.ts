import CabinetInterface from "../interface/CabinetInterface";
import Exercise from "../model/Exercise";
import Student from "../model/Student";
import Teacher from "../model/Teacher";
import TeacherBuilder from "../model/TeacherUtil";
import HTMLDocument from "../model/HTMLDocument";
import StudentUtil from "../model/StudentUtil";
import Initiator from "../interface/Initiator";
import Evention from "../interface/Evention";

export default class NewCabinet implements CabinetInterface, Initiator, Evention {
    private studentInitials: Student;
    private teacherInitials: Teacher;
    private exercise: Exercise;
    private button: HTMLElement;

    constructor(document: HTMLDocument) {
        let studentFullName: string = this.getStudentFullName(document);
        let splitStudentFullName: Array<string> = studentFullName.split(" ");
        this.button = this.getButtonElement(document);
        this.studentInitials = StudentUtil.makeStudentForNewCabinet(splitStudentFullName);
        this.teacherInitials = TeacherBuilder.makeTeacher();
        this.exercise = new Exercise(this.getExerciseTitle(document));
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

    

    private getStudentFullName(document: HTMLDocument): string {
        return document.querySelector("span.components-trainer-TaskPage-components-Header-components-User--userName--1K9q-").innerHTML;
    }

    private getButtonElement(document: HTMLDocument): HTMLElement {
        const element: HTMLElement = <HTMLElement> document.querySelector(".components-trainer-TaskPage-components-Header--buttonReview--2y1-7");
        return element;
    }

    private getExerciseTitle(document: HTMLDocument): string {
        return document.querySelector("a.components-trainer-TaskPage-components-Title--titleLink---0uEG").innerHTML;
    }

    public addEventsToButton(events: string, handler: EventListener): void {
        this.button.addEventListener(events, handler);
    }
}