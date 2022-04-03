import HTMLDocument from "../model/HTMLDocument";
import Student from "../model/Student";
import Teacher from "../model/Teacher";
import CabinetInterface from "../interface/CabinetInterface";
import TeacherBuilder from "../model/TeacherBuilder";
import Exercise from "../model/Exercise";

export default class OldCabinet implements CabinetInterface {
    private studentInitials: Student;
    private teacherInitials: Teacher;
    private exercise: Exercise;
    
    constructor(document: HTMLDocument) {
        let stringBreadcrumbs: string = this.getInnerTextBreadcrumbs(document);
        let splitStringBreadcrumbs: Array<string> = stringBreadcrumbs.split("|");
        this.studentInitials = this.makeStudentInitials(splitStringBreadcrumbs[0]);
        this.teacherInitials = TeacherBuilder.makeTeacher();
        this.exercise = new Exercise(splitStringBreadcrumbs[1].trim());
    }
    
    public buttonClick(): void {
        console.log(this.exercise, this.studentInitials, this.teacherInitials)
    }

    private getInnerTextBreadcrumbs(document: HTMLDocument): string {
        const element: HTMLElement = <HTMLElement> document.querySelector(".breadcrumb li:last-child");
        return element.innerText;
        
    }

    private makeStudentInitials(innerText: string): Student {
        let trimString: string = innerText.trim();
        if(trimString.length == 0 ) {
            return new Student(null, null); 
        } else {
            let splitInitials: Array<string> = trimString.split(" ");
            let firstName: string = splitInitials[0] ? splitInitials[0]: null;
            let lastName: string = splitInitials[1] ? splitInitials[1]: null;
            return new Student(firstName, lastName); 
        }
    }



    
}