import Person from "../abstract/Person";

export default class Student extends Person {
    constructor(first_name: String, last_name: String) {
        super(first_name, last_name);
    }
}