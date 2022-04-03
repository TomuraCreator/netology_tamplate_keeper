import CabinetInterface from "../interface/CabinetInterface";
import Exercise from "../model/Exercise";
import Student from "../model/Student";
import Teacher from "../model/Teacher";
import TeacherBuilder from "../model/TeacherBuilder";
import HTMLDocument from "../model/HTMLDocument";

export default class NewCabinet implements CabinetInterface {
    private studentInitials: Student;
    private teacherInitials: Teacher;
    private exercise: Exercise;
    
    constructor(document: HTMLDocument) {
        let studentFullName: string = this.getStudentFullName(document);
        let splitStudentFullName: Array<string> = studentFullName.split(" ");
        this.studentInitials = this.makeStudentInitials(splitStudentFullName);
        this.teacherInitials = TeacherBuilder.makeTeacher();
        this.exercise = new Exercise(this.getExerciseTitle(document));
    }
    
    public buttonClick(): void {
        console.log(this.exercise, this.studentInitials, this.teacherInitials)
    }

    private getStudentFullName(document: HTMLDocument): string {
        return document.querySelector("span.components-trainer-TaskPage-components-Header-components-User--userName--1K9q-").innerHTML;
    }

    private getExerciseTitle(document: HTMLDocument): string {
        return document.querySelector("a.components-trainer-TaskPage-components-Title--titleLink---0uEG").innerHTML;
    }
    
    private makeStudentInitials(innerText: Array<string>): Student {
        if(innerText.length == 0) {
            return new Student(null, null); 
        }
        console.log(innerText)
        let trimFirstName = innerText[0].trim();
        let trimLastName = innerText[1].trim();
        let firstName: string = trimFirstName ? trimFirstName : null;
        let lastName: string = trimLastName ? trimLastName: null;
        return new Student(firstName, lastName); 
    }
}