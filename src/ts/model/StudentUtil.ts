import Context from "../Context";
import Student from "./Student";

export default class StudentUtil {

    /**
     * Create {@link Student}'s object for new cabinet init
     * @param innerText {@link Array<String>}
     * @returns {@link Student}
     */
    public static makeStudentForNewCabinet(innerText: Array<string>): Student {
        if(innerText.length == 0) {
            return new Student(null, null); 
        }
        let trimFirstName = innerText[0].trim();
        let trimLastName = innerText[1].trim();
        let firstName: string = trimFirstName ? trimFirstName : null;
        let lastName: string = trimLastName ? trimLastName: null;
        return new Student(firstName, lastName); 
    }

    /**
     * Create {@link Student}'s object for Old Cabinet init
     * @param innerText {@link String}
     * @returns {@link Student}
     */
    public static makeStudentForOldCabinet(innerText: string): Student {
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