import Person from "../abstract/Person";

export default class Teacher extends Person {
    constructor(first_name: String, last_name: String) {
        super(first_name, last_name);
    }
}